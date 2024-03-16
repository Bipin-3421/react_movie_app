import React from "react";
import { useSelector } from "react-redux";

const Carousel = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);
  return (
    <div>
      <section style={{ display: "flex", gap: "10px", overflowY: "hidden" }}>
        {data?.map((data, loading) => (
          <span key={data.id}>
            <img
              src={url.poster + data?.poster_path}
              alt="Poster"
              style={{ width: 200 }}
            />

            <span style={{ color: "#fff" }}>{data.title || data.name}</span>
          </span>
        ))}
      </section>
    </div>
  );
};

export default Carousel;
