import React, { useState, useEffect } from "react";
import SwitchTabs from "../../components/switchTabs/SwitchTabs";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import Carousel from "../../components/carousel/Carousel";
import ContentWrapper from "../../components/contentwrapper/ContentWrapper";
const Trending = () => {
  const [endPoint, setEndPoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endPoint}`);
  const { url } = useSelector((state) => state.home);
  const [trendingImg, setTrendingImg] = useState("");

  const onTabHandler = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabHandler={onTabHandler} />
      </ContentWrapper>
      <Carousel data={data?.results} />
    </div>
  );
};

export default Trending;
