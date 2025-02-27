import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router";

import Navigation from "../navigation/navigation";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <p className="header__title">Nepali Tadka</p>
        <p className="header__subtitle">Bringing flavors to your home</p>
      </Link>
      <div>
        <Navigation />
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
