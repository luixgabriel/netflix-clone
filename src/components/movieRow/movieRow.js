import React from 'react';
import './Movierow.css';
import PropTypes from 'prop-types';

export default function ListMovies({ title, itens }) {
  return (
    <div className="movieList">
      <h1>{title}</h1>
    </div>
  );
}

ListMovies.propTypes = {
  title: PropTypes.func.isRequired,
  itens: PropTypes.array.isRequired,
};
