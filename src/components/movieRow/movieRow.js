/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import './Movierow.css';
import PropTypes from 'prop-types';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function ListMovies({ title, itens }) {
  const [scrollX, SetScrollX] = useState(0);
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    SetScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    const listW = itens.results.length * 150;

    if (window.innerWidth - listW > x) {
      x = (window.innerWidth - listW) - 60;
    }

    SetScrollX(x);
  };

  return (
    <div className="movieList">
      <h2>{title}</h2>
      <div className="movieRow--left">
        <FaArrowLeft style={{ fontSize: 30 }} onClick={handleLeftArrow} />
      </div>

      <div className="movieRow--right">
        <FaArrowRight style={{ fontSize: 30 }} onClick={handleRightArrow} />
      </div>

      <div className="movieList--area">
        <div
          className="movielist--list"
          style={{
            marginLeft: scrollX,
            width: itens.results.length * 150,
          }}
        >
          {itens.results.length > 0 && itens.results.map((movie) => (
            <div key={movie.id} className="movielist--item">
              <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} />
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

ListMovies.propTypes = {
  title: PropTypes.string.isRequired,
  itens: PropTypes.array.isRequired,
};
