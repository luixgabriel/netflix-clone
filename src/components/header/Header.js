import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

import Logo from '../imgs/netflix.svg';

export default function Header({ black }) {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>

    </header>
  );
}

Header.propTypes = {
  black: PropTypes.bool.isRequired,
};
