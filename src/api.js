/* eslint-disable default-case */
const apiKey = '00bb3908ca1c5f0bcd63e7eaf926d628';
const baseUrl = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const data = await fetch(`${baseUrl}${endpoint}`);
  const json = await data.json();
  return json;
};

export default {
  getHomeList: async () => [
    {
      slug: 'originals',
      title: 'Netflix Originals',
      itens: await basicFetch(`/discover/tv?with_network=213&api_key=${apiKey}`),
    },

    {
      slug: 'trending',
      title: 'recommended for you',
      itens: await basicFetch(`/trending/all/week?api_key=${apiKey}`),
    },

    {
      slug: 'top rated',
      title: 'on high',
      itens: await basicFetch(`/movie/top_rated?&api_key=${apiKey}`),
    },
    {
      slug: 'action',
      title: 'Action',
      itens: await basicFetch(`/discover/movie?with_genres=28&api_key=${apiKey}`),
    },
    {
      slug: 'comedy',
      title: 'Comedy',
      itens: await basicFetch(`/discover/movie?with_genres=35&api_key=${apiKey}`),
    },
    {
      slug: 'horror',
      title: 'Horror',
      itens: await basicFetch(`/discover/movie?with_genres=27&api_key=${apiKey}`),
    },
    {
      slug: 'romance',
      title: 'Romance',
      itens: await basicFetch(`/discover/movie?with_genres=10749&api_key=${apiKey}`),
    },
    {
      slug: 'documentary',
      title: 'Documentary',
      itens: await basicFetch(`/discover/movie?with_genres=99&api_key=${apiKey}`),
    },
  ],

  getMovieinfo: async (movieID, type) => {
    let info = {};

    if (movieID) {
      switch (type) {
        case 'movie': info = await basicFetch(`/movie/${movieID}?api_key=${apiKey}`);
          break;
        case 'tv': info = await basicFetch(`/tv/${movieID}?api_key=${apiKey}`);
          break;
      }
    }

    return info;
  },
};
