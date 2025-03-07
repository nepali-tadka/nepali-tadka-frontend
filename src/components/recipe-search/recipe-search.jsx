import PropTypes from "prop-types";
import React from "react";

import InputField from "../input-field/input-field";
import "./recipe-search.css";

const RecipeSearch = ({ value, onChange, placeholder }) => {
  return (
    <div className="recipe-search">
      <InputField
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <i className="fas fa-search recipe-search__icon"></i>
    </div>
  );
};

RecipeSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default RecipeSearch;
