import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

import Button from "../../components/button/button";
import InputField from "../../components/input-field/input-field";
import TextareaField from "../../components/textarea-field/textarea-field";
import { fetchCategories } from "../../services/category.service";
import { fetchRecipeById, updateRecipe } from "../../services/recipe.service";
import "./edit-recipe.css";

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ingredients: "",
    instructions: "",
    category: "",
    imageUrl: "",
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        setError(error.message);
      }
    };

    const getRecipe = async () => {
      try {
        const data = await fetchRecipeById(id);
        setFormData({
          title: data.title,
          description: data.description,
          ingredients: data.ingredients.join(", "),
          instructions: data.instructions,
          category: data.category._id,
          imageUrl: data.imageUrl,
        });
      } catch (error) {
        setError(error.message);
      }
    };

    getCategories();
    getRecipe();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateRecipe(id, {
        ...formData,
        ingredients: formData.ingredients.split(",").map((item) => item.trim()),
      });
      toast.success("Recipe updated successfully!");
      navigate("/my-recipes");
    } catch (error) {
      setError(error.message);
      toast.error("Failed to update recipe. Please try again.");
    }
  };

  return (
    <div className="edit-recipe-page">
      <Link to="/my-recipes" className="back-link">
        &larr; Back to My Recipes
      </Link>
      <h1>Edit Recipe</h1>
      <p>Update the form below to edit the recipe.</p>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <InputField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <TextareaField
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <TextareaField
          label="Ingredients (comma separated)"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleChange}
          required
        />
        <TextareaField
          label="Instructions"
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          required
        />
        <div className="input-field">
          <label className="input-field__label">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="input-field__input"
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <InputField
          label="Image URL"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          required
        />
        <div className="edit-recipe-page__actions">
          <Button variant="default" type="submit">
            Update Recipe
          </Button>
          <Button variant="ghost" onClick={() => navigate("/my-recipes")}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditRecipe;
