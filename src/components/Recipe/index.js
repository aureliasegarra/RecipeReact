import React from 'react';

// == Import
import Header from 'src/components/Header';
import Ingredients from 'src/components/Ingredients';
import Instructions from 'src/components/Instructions';
import data from 'src/data/recipe';
import './style.scss';

// == Composant
const Recipe = () => (
  <div className="recipe">
    <Header
      author={data.author}
      title={data.title}
      image={data.thumbnail}
      difficulty={data.difficulty}
    />
    <Ingredients ingredients={data.ingredients} />
    <Instructions instructions={data.instructions} />
  </div>
);

// == Export
export default Recipe;
