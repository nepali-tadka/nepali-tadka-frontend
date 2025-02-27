import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

import Button from "../../components/button/button";
import {
  approveRecipe,
  fetchPendingRecipes,
  rejectRecipe,
} from "../../services/recipe.service";
import "./my-approvals.css";

const MyApprovals = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getPendingRecipes = async () => {
      try {
        const data = await fetchPendingRecipes();
        setRecipes(data);
      } catch (error) {
        toast.error("Failed to fetch pending recipes. Please try again.");
      }
    };

    getPendingRecipes();
  }, []);

  const handleApprove = async (id) => {
    try {
      await approveRecipe(id);
      toast.success("Recipe approved successfully!");
      setRecipes(recipes.filter((recipe) => recipe._id !== id));
    } catch (error) {
      toast.error("Failed to approve recipe. Please try again.");
    }
  };

  const handleReject = async (id) => {
    try {
      await rejectRecipe(id);
      toast.success("Recipe rejected successfully!");
      setRecipes(recipes.filter((recipe) => recipe._id !== id));
    } catch (error) {
      toast.error("Failed to reject recipe. Please try again.");
    }
  };

  return (
    <div className="my-approvals-page">
      <h1>Pending Recipe Approvals</h1>
      {recipes.length === 0 && <p>No pending recipes to approve or reject.</p>}
      <div className="approval-recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="approval-recipe-card">
            <div className="approval-recipe-image">
              <img src={recipe.imageUrl} alt={recipe.title} />
            </div>
            <div className="approval-recipe-detail">
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
              <Link to={`/recipes/${recipe._id}`} className="view-recipe-link">
                View Details
              </Link>
              <div className="approval-recipe-actions">
                <Button
                  variant="success"
                  onClick={() => handleApprove(recipe._id)}
                >
                  Approve
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleReject(recipe._id)}
                >
                  Reject
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyApprovals;
