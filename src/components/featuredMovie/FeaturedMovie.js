/* eslint-disable guard-for-in */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './FeaturedMovie.css';
import PropTypes from 'prop-types';

export default function FeaturedMovie({ item }) {
  const firstDate = new Date(item.first_air_date);

  const genres = [];

  for (const i in item.genres) {
    genres.push(item.genres[i].name);
  }

  // let description = item.overview;
  // if (description.length > 200) {
  //   description = `${description.substrin(0, 200)}...`;
  // }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">
              {item.vote_average}
              {' '}
              points
            </div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--season">
              {item.number_of_seasons}
              {' '}
              season
              {item.number_of_seasons !== 1 ? 's' : ''}
            </div>
          </div>
          <div className="featured--description">{item.overview}</div>
          <div className="featured--buttons">
            <a className="watch" href={`/watch/${item.id}`}>Watch</a>
            <a className="list" href={`/list/add/${item.id}`}>+ My list</a>
          </div>
          <div className="featured--genres">
            <strong>Genres: </strong>
            {genres.join(' , ')}
          </div>
        </div>
      </div>
    </section>
  );
}FeaturedMovie.propTypes = {
  item: PropTypes.object.isRequired,
};
