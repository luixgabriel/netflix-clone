/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import TMDB from './api';
import './App.css';
import ListMovies from './components/movieRow/movieRow';
import FeaturedMovie from './components/featuredMovie/FeaturedMovie';

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      const list = await TMDB.getHomeList();
      setMovieList(list);

      const originals = list.filter((item) => item.slug === 'originals');
      console.log(originals[0].itens.results.length);
      const randomChosen = Math.floor(Math.random() * (originals[0].itens.results.length - 1));
      const choosen = originals[0].itens.results[randomChosen];
      const choosenInfo = await TMDB.getMovieinfo(choosen.id, 'tv');
      setFeaturedData(choosenInfo);
    };

    loadAll();
  }, []);

  return (
    <div className="page">

      {featuredData
        && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item) => (
          <div>
            <ListMovies key={item.id} title={item.title} itens={item.itens} />
          </div>
        ))}
      </section>
    </div>
  );
}
