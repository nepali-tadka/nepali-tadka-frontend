import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

import Button from "../../components/button/button";
import InputField from "../../components/input-field/input-field";
import TextareaField from "../../components/textarea-field/textarea-field";
import { fetchCategories } from "../../services/category.service";
import { addRecipe } from "../../services/recipe.service";
import "./add-recipe.css";

const AddRecipe = () => {
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

    getCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addRecipe({
        ...formData,
        ingredients: formData.ingredients.split(",").map((item) => item.trim()),
      });
      toast.success("Recipe added successfully!");
      navigate("/my-recipes");
    } catch (error) {
      setError(error.message);
      toast.error("Failed to add recipe. Please try again.");
    }
  };

  return (
    <div className="add-recipe-container">
      <Link to="/my-recipes" className="back-link">
        &larr; Back to My Recipes
      </Link>
      <h1>Add Recipe</h1>
      <p>Fill out the form below to add a new recipe.</p>
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
        <Button type="submit">Add Recipe</Button>
      </form>
    </div>
  );
};

export default AddRecipe;
