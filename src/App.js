import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegisterUser } from "./pages/WelcomePage/RegisterUser/RegisterUser";
import { LoginUser } from "./pages/WelcomePage/LoginUser/LoginUser";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { Home } from "./pages/Home/Home";
import { WorkoutDiary } from "./pages/Home/Tabs/WorkoutDiary/WorkoutDiary";
import { RecipeDetails } from "./pages/Home/Tabs/Recipes/RecipeDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/workout-diary" element={<WorkoutDiary />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
