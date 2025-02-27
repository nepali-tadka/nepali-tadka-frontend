import React, { useEffect, useState } from "react";

import RecipeCard from "../../components/recipe-card/recipe-card";
import { fetchRecipes } from "../../services/recipe.service";
import "./recipes.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await fetchRecipes();
        setRecipes(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getRecipes();
  }, []);

  return (
    <div className="recipes-page">
      <h1>Recipes</h1>
      <p>Discover the flavors of Nepal with our curated recipes.</p>
      {error && <p className="error">{error}</p>}
      <div className="all-recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
