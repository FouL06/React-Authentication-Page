//Import React Modules
import React from "react";
import { Routes, Route } from "react-router-dom";

//Import Layout & Pages
import Login from "./components/pages/login";
import Registration from "./components/pages/registration";

//Import CSS
import "./App.css";

function App() {
  return (
    <div className="body-wrapper">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
