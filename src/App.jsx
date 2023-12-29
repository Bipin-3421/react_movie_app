import React, { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";

const App = () => {
  useEffect(() => {
    fetchDataFromApi().then((value) => {
      const data = value.data;
      console.log(data);
    });
  }, []);

  return (
    <Router>
      <div>
        <h1>This is testing </h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
