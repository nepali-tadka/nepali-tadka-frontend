import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import { AuthContext, AuthProvider } from "./context/auth.context";
import DefaultLayout from "./layouts/default-layout/default-layout";
import About from "./pages/about/about";
import AddRecipe from "./pages/add-recipe/add-recipe";
import Contact from "./pages/contact/contact";
import EditRecipe from "./pages/edit-recipe/edit-recipe";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import MyApprovals from "./pages/my-approvals/my-approvals";
import MyProfile from "./pages/my-profile/my-profile";
import MyRecipes from "./pages/my-recipes/my-recipes";
import RecipeDetail from "./pages/recipes/recipe-detail/recipe-detail";
import Recipes from "./pages/recipes/recipes";
import Register from "./pages/register/register";

const PrivateRoute = ({ children }) => {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  return authenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DefaultLayout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/my-profile"
              element={
                <PrivateRoute>
                  <MyProfile />
                </PrivateRoute>
              }
            />
            <Route
              path="/my-recipes"
              element={
                <PrivateRoute>
                  <MyRecipes />
                </PrivateRoute>
              }
            />
            <Route
              path="/add-recipe"
              element={
                <PrivateRoute>
                  <AddRecipe />
                </PrivateRoute>
              }
            />
            <Route
              path="/edit-recipe/:id"
              element={
                <PrivateRoute>
                  <EditRecipe />
                </PrivateRoute>
              }
            />
            <Route
              path="/my-approvals"
              element={
                <PrivateRoute>
                  <MyApprovals />
                </PrivateRoute>
              }
            />
          </Routes>
        </DefaultLayout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
