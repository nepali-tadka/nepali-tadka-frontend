import PropTypes from "prop-types";
import React from "react";

import InputField from "../input-field/input-field";
import "./recipe-search.css";

const RecipeSearch = ({
  value,
  onChange,
  placeholder,
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="recipe-search">
      <div className="recipe-search__input-container">
        <InputField
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <i className="fas fa-search recipe-search__icon"></i>
      </div>
      <div className="recipe-search__dropdown-container">
        <select
          value={selectedCategory}
          onChange={onCategoryChange}
          className="recipe-search__dropdown"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

RecipeSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default RecipeSearch;
