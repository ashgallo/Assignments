import React from 'react';
import { Link } from 'react-dom'; 
import Recipes from './Recipes';
import Random from './Random';
import SubmitRecipe from './SubmitRecipe';

function SelectionDisplay() {
  return(
    <div>
      <div className="recipe-link">Recipes</div>
      <div className="random-link">Random</div>
      <div className="submit-recipe-link">SubmitRecipe</div>
    </div>
  )
}

export default SelectionDisplay;