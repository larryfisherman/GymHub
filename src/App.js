import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { RegisterUser } from "./components/RegisterUser/RegisterUser";
import { LoginUser } from "./components/LoginUser/LoginUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/login" element={<LoginUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
