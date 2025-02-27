import PropTypes from "prop-types";
import React from "react";

import "./textarea-field.css";

const TextareaField = ({ label, name, value, onChange, error }) => {
  return (
    <div className="textarea-field">
      {label && <label className="textarea-field__label">{label}</label>}
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className={`textarea-field__textarea ${
          error ? "textarea-field__textarea--error" : ""
        }`}
      />
      {error && <p className="textarea-field__error">{error}</p>}
    </div>
  );
};

TextareaField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default TextareaField;
