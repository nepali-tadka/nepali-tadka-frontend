import PropTypes from "prop-types";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router";

import { AuthContext } from "../../context/auth.context";
import "./navigation.css";

const Navigation = () => {
  const { authenticated, getUser, signOut } = useContext(AuthContext);
  const user = getUser();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  const getFullUserName = (user) => {
    return `${user.firstname} ${user.lastname}`;
  };

  const isAdmin = (user) => {
    console.log(user);
    return user.role.name === "ADMIN";
  };

  const getAvatarText = (user) => {
    return user.firstname.charAt(0) + user.lastname.charAt(0);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {authenticated ? (
          <li className="dropdown" onClick={toggleDropdown} ref={dropdownRef}>
            <div className="dropdown-trigger">
              <span className="dropdown-trigger__avatar">
                {getAvatarText(user)}
              </span>
            </div>
            {dropdownVisible && (
              <div className="dropdown-content">
                <div className="dropdown-content__name">
                  {getFullUserName(user)}
                </div>
                <Link to="/my-profile">My Profile</Link>
                <Link to="/my-recipes">My Recipes</Link>
                {isAdmin(user) && <Link to="/my-approvals">My Approvals</Link>}
                <button onClick={signOut} className="dropdown-content__button">
                  Sign Out
                </button>
              </div>
            )}
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  children: PropTypes.node,
};

export default Navigation;
