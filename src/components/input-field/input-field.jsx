import PropTypes from "prop-types";
import React from "react";

import "./input-field.css";

const InputField = ({
  label = "",
  type = "text",
  name = "",
  value = "",
  error = "",
  ...props
}) => {
  return (
    <div className="input-field">
      {label && <label className="input-field__label">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        className={`input-field__input ${
          error ? "input-field__input--error" : ""
        }`}
        {...props}
      />
      {error && <p className="input-field__error">{error}</p>}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
