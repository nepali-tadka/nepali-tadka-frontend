import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router";

import { useAuth } from "../../context/auth.context";
import Button from "../button/button";
import DeleteConfirmationModal from "../delete-dialog/delete-dialog";
import "./user-recipe-card.css";

const UserRecipeCard = ({ recipe, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getUser } = useAuth();
  const user = getUser();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isAdmin = (user) => {
    return user.role.name === "ADMIN";
  };

  const handleDelete = () => {
    onDelete(recipe._id);
    closeModal();
  };

  return (
    <div className="user-recipe-card">
      <div className="user-recipe-image">
        <img src={recipe.imageUrl} alt={recipe.title} />
      </div>
      <div className="user-recipe-content">
        <h2 className="user-recipe-title">{recipe.title}</h2>
        <p className="user-recipe-category">{recipe.description}</p>
        <p
          className={`user-recipe-status user-recipe-status--${recipe.status.toLowerCase()}`}
        >
          {recipe.status}
        </p>
        <div className="user-recipe-actions">
          <Link to={`/recipes/${recipe._id}`} className="user-view-recipe-link">
            View Details
          </Link>
          <div className="user-recipe-buttons">
            <Link
              to={`/edit-recipe/${recipe._id}`}
              className="user-edit-recipe-link"
            >
              <Button variant="default">
                <i className="fas fa-edit"></i>
              </Button>
            </Link>
            {(recipe.status !== "APPROVED" || isAdmin(user)) && (
              <Button variant="danger" onClick={openModal}>
                <i className="fas fa-trash-alt"></i>
              </Button>
            )}
          </div>
        </div>
      </div>
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onDelete={handleDelete}
      />
    </div>
  );
};

UserRecipeCard.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UserRecipeCard;
