//Import React Modules
import React from "react";
import { Routes, Route } from "react-router-dom";

//Import Layout & Pages
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import Registration from "./components/pages/registration";

//Import CSS & Bootstrap
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="body-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route pate="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
