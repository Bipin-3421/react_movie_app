import React, { useEffect, useState } from "react";
import "./style.scss";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../../../components/contentwrapper/ContentWrapper";
const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const inputSearchHandler = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
  };

  return (
    <div className="heroBanner">
      <section className="heroContent">
        <div className="backdrop-img">
          <img src={background} alt="HeroBanner" />
        </div>

        <div className="opacity-layer"></div>

        <ContentWrapper>
          <div className="heroBannerContent">
            <span className="title">Welcome Seekers</span>
            <span className="subTitle">
              Millions of movies, TV shows and people to discover.Explore now.
            </span>

            <form className="searchInput">
              <input
                type="text"
                value={query}
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={inputSearchHandler}>Search</button>
            </form>
          </div>
        </ContentWrapper>
      </section>
    </div>
  );
};

export default HeroBanner;
