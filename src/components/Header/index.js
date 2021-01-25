import React from 'react';

// == Import
import PropTypes from 'prop-types';
import './style.scss';

// == stateless component (paramétré par ses props)
const Header = ({
  image,
  title,
  author,
  difficulty,
}) => (
  <header className="header">
    <img
      className="header__image"
      src={image}
      alt={title}
    />
    <div className="header__content">
      <h1 className="header__title">{title}</h1>
      <p className="header__text">{author} - {difficulty}</p>
    </div>
  </header>
);

// pour valider les props, on rajoute une propriété 'propTypes' avec le p en minuscule
// les propTypes sont des gardes fou
Header.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};
// == Export
export default Header;
