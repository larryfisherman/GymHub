import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegisterUser } from "./components/RegisterUser/RegisterUser";
import { LoginUser } from "./components/LoginUser/LoginUser";
import { WelcomePage } from "./components/WelcomePage/WelcomePage";
import { Home } from "./components/Home/Home";
import { WorkoutDiary } from "./components/WorkoutDiary/WorkoutDiary";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
