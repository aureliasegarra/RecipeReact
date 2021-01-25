import React from 'react';

// == Import
import PropTypes from 'prop-types';
import './style.scss';

// == Composant
const Instructions = ({ instructions }) => {
  // lorsqu'on fait une liste d'éléments jsx, il faut donner à ces éléments une prop-key unique
  // mais attention à ne pas prendre l'index de map
  const jsxInstructions = instructions.map((instruction) => {
    const li = <li className="instructions__list" key={instruction}>{instruction}</li>;
    return li;
  });
  return (
    <ul className="instructions">
      {jsxInstructions}
    </ul>
  );
};

// version condensée

Instructions.propTypes = {
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// == Export
export default Instructions;
