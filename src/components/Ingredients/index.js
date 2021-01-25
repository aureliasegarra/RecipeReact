import React from 'react';

// == Import
import PropTypes from 'prop-types';
import './style.scss';

// == Composant
const Ingredients = ({ ingredients }) => {
  const jsxIngredients = ingredients.map((ingredient) => {
    const li = <li className="ingredient" key={ingredient.id}><span className="ingredient__quantity">{ingredient.quantity} {ingredient.unit}</span> {ingredient.name}</li>;
    return li;
  });
  return (
    <ul className="ingredients">
      {jsxIngredients}
    </ul>
  );
};

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    name: PropTypes.string.isREquired,
  })).isRequired,
};

// == Export
export default Ingredients;
