import React, { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration } from "../store/homeSlice";

const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  return (
    <Router>
      {/* <Header /> */}
      <div>
        <h1>This is testing </h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
