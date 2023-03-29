import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { RegisterUser } from "./components/RegisterUser/RegisterUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<RegisterUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
