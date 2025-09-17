import React from "react";
import "./styles.css";
import "tailwindcss/tailwind.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import ProjectDetails from "./components/ProjectDetails";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
  );
}

export default App;
