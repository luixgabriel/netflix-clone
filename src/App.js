/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import TMDB from './api';
import './App.css';
import ListMovies from './components/movieRow/movieRow';

export default function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await TMDB.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);

  return (
    <div className="page">
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
