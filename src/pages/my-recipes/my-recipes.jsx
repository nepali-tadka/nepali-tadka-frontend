import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

import Button from "../../components/button/button";
import UserRecipeCard from "../../components/user-recipe-card/user-recipe-card";
import { useAuth } from "../../context/auth.context";
import { deleteRecipe, fetchUserRecipes } from "../../services/recipe.service";
import "./my-recipes.css";

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const { getUser } = useAuth();
  const user = getUser();

  useEffect(() => {
    const getUserRecipes = async () => {
      try {
        const data = await fetchUserRecipes();
        setRecipes(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getUserRecipes();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteRecipe(id);
      toast.success("Recipe deleted successfully!");
      const data = await fetchUserRecipes();
      setRecipes(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="my-recipes-page">
      <div className="my-recipes-header">
        <div className="my-recipes-header__text">
          <h1>{user.firstname}'s Recipes</h1>
          <p>Here are all the recipes you have created.</p>
        </div>
        <Link to="/add-recipe">
          <Button variant="default">
            <i class="fa fa-plus add-recipe__icon" aria-hidden="true"></i>
            <span>Add Recipe</span>
          </Button>
        </Link>
      </div>
      {error && <p className="error">{error}</p>}
      <div className="my-recipe-list">
        {recipes.map((recipe) => (
          <UserRecipeCard
            key={recipe._id}
            recipe={recipe}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MyRecipes;
