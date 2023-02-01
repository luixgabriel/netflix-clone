/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import TMDB from './api';
import './App.css';
import ListMovies from './components/movieRow/MovieRow';
import FeaturedMovie from './components/featuredMovie/FeaturedMovie';
import Header from './components/header/Header';

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      const list = await TMDB.getHomeList();
      setMovieList(list);

      const originals = list.filter((item) => item.slug === 'originals');
      console.log(originals[0].itens.results.length);
      const randomChosen = Math.floor(Math.random() * (originals[0].itens.results.length - 1));
      const choosen = originals[0].itens.results[randomChosen];
      const choosenInfo = await TMDB.getMovieinfo(choosen.id, 'tv');
      console.log(choosenInfo.overview.length);
      if (choosenInfo.overview.length < 500) {
        setFeaturedData(choosenInfo);
      }
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {/* SE TEM O FEATURED DATA ACONTECE / && COMERCIAL IMPORTANTE */}
      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item) => (
          <div>
            <ListMovies key={item.id} title={item.title} itens={item.itens} />
          </div>
        ))}
      </section>
      <footer>
        <h4>Desenvolvido por: Luis Gabriel</h4>
      </footer>

      {movieList.length <= 0
      && (
      <div className="loading">
        <img src="https://media.tenor.com/Rfyx9OkRI38AAAAC/netflix-netflix-startup.gif" alt="loading" />
      </div>
      )}
    </div>

  );
}
