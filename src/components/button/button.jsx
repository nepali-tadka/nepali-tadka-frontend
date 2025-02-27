import PropTypes from "prop-types";
import React from "react";

import "./button.css";

const Button = ({
  children,
  onClick = null,
  type = "button",
  className = "",
  size = "medium",
  variant = "default",
}) => {
  return (
    <button
      type={type}
      className={`custom-button custom-button--${size} custom-button--${variant} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["default", "success", "danger", "ghost"]),
};

export default Button;
