import PropTypes from "prop-types";
import React from "react";

import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./default-layout.css";

const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
