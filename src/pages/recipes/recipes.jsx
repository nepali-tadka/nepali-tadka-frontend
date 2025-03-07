import React, { useEffect, useState } from "react";

import RecipeCard from "../../components/recipe-card/recipe-card";
import RecipeSearch from "../../components/recipe-search/recipe-search";
import { fetchRecipes } from "../../services/recipe.service";
import "./recipes.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="recipes-page">
      <h1>Recipes</h1>
      <p>Discover the flavors of Nepal with our curated recipes.</p>
      {error && <p className="error">{error}</p>}
      <RecipeSearch
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search recipes by name..."
      />
      <div className="all-recipe-list">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
      {filteredRecipes.length === 0 && (
        <p className="no-results">No recipes found matching your search.</p>
      )}
    </div>
  );
};

export default Recipes;
