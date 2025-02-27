export const fetchRecipes = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/recipes/", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

export const fetchRecipeById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/recipes/${id}`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch recipe");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    throw error;
  }
};

export const fetchUserRecipes = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3000/api/recipes/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch user recipes");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user recipes:", error);
    throw error;
  }
};

export const addRecipe = async (recipe) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3000/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(recipe),
    });
    if (!response.ok) {
      throw new Error("Failed to add recipe");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding recipe:", error);
    throw error;
  }
};

export const updateRecipe = async (id, recipe) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/api/recipes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(recipe),
    });
    if (!response.ok) {
      throw new Error("Failed to update recipe");
    }
    return await response.json();
  } catch (error) {
    console.error("Error updating recipe:", error);
    throw error;
  }
};

export const deleteRecipe = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/api/recipes/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete recipe");
    }
    return await response.json();
  } catch (error) {
    console.error("Error deleting recipe:", error);
    throw error;
  }
};

export const fetchPendingRecipes = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3000/api/recipes/pending", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch pending recipes");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching pending recipes:", error);
    throw error;
  }
};

export const approveRecipe = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `http://localhost:3000/api/recipes/${id}/approve`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to approve recipe");
    }
    return await response.json();
  } catch (error) {
    console.error("Error approving recipe:", error);
    throw error;
  }
};

export const rejectRecipe = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `http://localhost:3000/api/recipes/${id}/reject`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to reject recipe");
    }
    return await response.json();
  } catch (error) {
    console.error("Error rejecting recipe:", error);
    throw error;
  }
};

export const fetchReviews = async (recipeId) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/reviews/${recipeId}`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch reviews");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};

export const addReview = async (recipeId, review) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `http://localhost:3000/api/reviews/${recipeId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(review),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to add review");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
};
