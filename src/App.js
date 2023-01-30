/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import TMDB from './api';
import './App.css';

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
        {movieList.map((item, key) => (
          <div>
            {item.title}
          </div>
        ))}
      </section>
    </div>
  );
}
