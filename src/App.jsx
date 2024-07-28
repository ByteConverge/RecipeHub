// src/App.js

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import Layout from "./Pages/Layout";
import LoggedInLayout from "./Pages/LoggedInLayout";
import Recipes from "./Pages/Recipes";
import LoggedIn from "./Pages/LoggedIn";
import AddRecipes from "./Pages/AddRecipes";
// import AllRecipes from "./Components/AllRecipes";
import Recommended from "./Components/AllRecipes";
import StewRecipes from "./Components/StewRecipes";
import SoupRecipes from "./Components/SoupRecipes";
import RiceRecipes from "./Components/RiceRecipes";
import RecipeDetails from "./Pages/RecipeDetails";
import ResetPassword from "./Pages/ResetPassword";
import AboutPage from "./Pages/AboutPage";
import Profile from "./Pages/Profile";
import ProtectedRoute from "./Components/AuthRoutes/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Not logged in */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>

        {/* Protected routes */}
        <Route
          path="/loggedIn"
          element={
            <ProtectedRoute>
              <LoggedInLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<LoggedIn />} />
          <Route path="/loggedIn/Recipes" element={<Recipes />}>
            <Route index element={<Recommended />} />
            <Route
              path="/loggedIn/Recipes/riceRecipes"
              element={<RiceRecipes />}
            />
            <Route
              path="/loggedIn/Recipes/soupRecipes"
              element={<SoupRecipes />}
            />
            <Route
              path="/loggedIn/Recipes/stewRecipes"
              element={<StewRecipes />}
            />
          </Route>
        </Route>
        {/* recipes Details */}
        <Route
          path="/loggedIn/recipeDetails/:id"
          element={
            <ProtectedRoute>
              <RecipeDetails />
            </ProtectedRoute>
          }
        />

        {/* Pages details */}
        <Route
          path="/addRecipe"
          element={
            <ProtectedRoute>
              <AddRecipes />
            </ProtectedRoute>
          }
        />

        {/* Public pages */}
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/reset/:reset" element={<ResetPassword />} />

        {/* Profile */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
