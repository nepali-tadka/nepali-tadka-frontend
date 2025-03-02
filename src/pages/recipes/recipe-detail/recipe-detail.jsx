import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

import { useAuth } from "../../../context/auth.context";
import Button from "../../../components/button/button";
import TextAreaField from "../../../components/textarea-field/textarea-field";
import {
  addReview,
  fetchRecipeById,
  fetchReviews,
} from "../../../services/recipe.service";
import "./recipe-detail.css";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 1, review: "" });
  const navigate = useNavigate();
  const { authenticated } = useAuth();

  const getFullUserName = (user) => {
    return `${user.firstname} ${user.lastname}`;
  };

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const data = await fetchRecipeById(id);
        setRecipe(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    const getReviews = async () => {
      try {
        const data = await fetchReviews(id);
        setReviews(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    getRecipe();
    getReviews();
  }, [id]);

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      await addReview(id, newReview);
      const data = await fetchReviews(id);
      setReviews(data);
      setNewReview({ rating: 1, review: "" });
      toast.success("Review submitted successfully");
    } catch (error) {
      toast.error("Failed to submit review");
    }
  };

  const renderStars = (rating) => {
    return (
      <span>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <i
              key={index}
              className={
                index <= rating ? "fas fa-star checked" : "far fa-star"
              }
            ></i>
          );
        })}
      </span>
    );
  };

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="recipe-detail">
      <Link onClick={() => navigate(-1)} className="back-link">
        &larr; Go Back
      </Link>
      <h1>{recipe.title}</h1>
      <p className="recipe-detail__description">{recipe.description}</p>
      <img src={recipe.imageUrl} alt={recipe.title} />
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p className="recipe-detail__instructions">{recipe.instructions}</p>
      <h2>Category</h2>
      <p>{recipe.category?.name}</p>

      <h2>Created By</h2>
      <p>{getFullUserName(recipe.createdBy)}</p>

      <h2>Reviews</h2>
      <ul className="recipe-review__list">
        {reviews.length === 0 ? (
          <i>No any reviews yet.</i>
        ) : (
          reviews?.map((review, index) => (
            <li key={index} className="recipe-review__item">
              <div className="recipe-review__header">
                <div className="recipe-review__user">
                  <strong>{getFullUserName(review.user)}</strong>
                  <span className="recipe-review__date">
                    {new Date(review.createdAt).toDateString()}
                  </span>
                </div>
                <span>{renderStars(review.rating)}</span>
              </div>
              <div className="recipe-review__text">{review.review}</div>
            </li>
          ))
        )}
      </ul>

      {authenticated && (
        <>
          <h2>Leave a Review</h2>
          <form onSubmit={handleReviewSubmit} className="review-form">
            <div className="form-group">
              <label>Rating:</label>
              <select
                name="rating"
                value={newReview.rating}
                onChange={handleReviewChange}
                className="form-control"
              >
                {[1, 2, 3, 4, 5].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Review:</label>
              <TextAreaField
                name="review"
                value={newReview.review}
                onChange={handleReviewChange}
                required
                className="form-control"
              />
            </div>
            <Button type="submit">Submit Review</Button>
          </form>
        </>
      )}
    </div>
  );
};

export default RecipeDetail;
