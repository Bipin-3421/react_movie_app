import React, { useEffect, useState } from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  return (
    <div className="heroBanner">
      <section className="heroContent">
        <div className="background-img">
          <img src={background} alt="HeroBanner" />
        </div>
        <div className="title">
          <h1>Welcome Seekers</h1>
          <p>
            Millions of movies, TV shows and people to discover.Explore now.
          </p>
        </div>
        <form className="input_field">
          <input type="text" placeholder="Search for a movie or tv show...." />
          <button>Search</button>
        </form>
      </section>
    </div>
  );
};

export default HeroBanner;
