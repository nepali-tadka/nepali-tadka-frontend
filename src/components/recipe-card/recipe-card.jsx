import PropTypes from "prop-types";
import React from "react";

import "./recipe-card.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <div className="recipe-image">
        <img src={recipe.imageUrl} alt={recipe.title} />
      </div>
      <div className="recipe-content">
        <h2 className="recipe-title">{recipe.title}</h2>
        <p className="recipe-category">{recipe.description}</p>
        <a href={`/recipes/${recipe._id}`} className="view-recipe-link">
          View Recipe
        </a>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeCard;
