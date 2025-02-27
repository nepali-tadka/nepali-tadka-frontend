import PropTypes from "prop-types";
import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">
        <span>
          &copy; 2025 <strong>Nepali Tadka</strong>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
