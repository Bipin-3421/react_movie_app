import React from "react";
import HeroBanner from "./HeroBanner/HeroBanner";
import Trending from "../trending/Trending";
import "./style.scss";
const Home = () => {
  return (
    <div style={{ height: "1000px" }} className="homePage">
      <HeroBanner />
      <Trending />
    </div>
  );
};

export default Home;
