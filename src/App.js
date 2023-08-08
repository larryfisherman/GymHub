import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import { RegisterUser } from "./pages/WelcomePage/RegisterUser/RegisterUser";
import { LoginUser } from "./pages/WelcomePage/LoginUser/LoginUser";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { Home } from "./pages/Home/Home";
import { RecipeDetailsEdit } from "./pages/Home/Tabs/Recipes/RecipeDetailsEdit";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
          <Route path="/recipes/:id" element={<RecipeDetailsEdit />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
