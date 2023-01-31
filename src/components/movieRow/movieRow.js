/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './Movierow.css';
import PropTypes from 'prop-types';

export default function ListMovies({ title, itens }) {
  return (
    <div className="movieList">
      <h2>{title}</h2>
      <div className="movieList--area">
        <div className="movielist--list">
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
  title: PropTypes.func.isRequired,
  itens: PropTypes.array.isRequired,
};
