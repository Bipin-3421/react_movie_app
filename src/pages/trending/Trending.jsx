import React, { useState, useEffect } from "react";
import SwitchTabs from "../../components/switchTabs/SwitchTabs";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";

const Trending = () => {
  const [endPoint, setEndPoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endPoint}`);
  const { url } = useSelector((state) => state.home);
  const [trendingImg, setTrendingImg] = useState("");

  useEffect(() => {
    const trendingBackdrop =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.poster_path;
    setTrendingImg(trendingBackdrop);
  }, [data]);

  const onTabHandler = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div>
      Trending
      <SwitchTabs data={["Day", "Week"]} onTabHandler={onTabHandler} />
      <div>
        <img
          src={trendingImg}
          alt="Trending"
          style={{ width: 200, marginLeft: 20 }}
        />
      </div>
    </div>
  );
};

export default Trending;
