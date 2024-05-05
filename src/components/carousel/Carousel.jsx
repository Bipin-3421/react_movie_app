import React from "react";
import { useSelector } from "react-redux";
import Genres from "../genres/Genres";
import { useNavigate } from "react-router-dom";
const Carousel = ({ data, loading, endpoint }) => {
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  return (
    <div>
      <section style={{ display: "flex", gap: "10px", overflowY: "hidden" }}>
        {data?.map((item, loading) => (
          <div
            key={item.id}
            onClick={() =>
              navigate(`/${item.media_type || endpoint}/${item.id}`)
            }
          >
            <span>
              <img
                src={url.poster + item?.poster_path}
                alt="Poster"
                style={{ width: 200 }}
              />
              <Genres data={item.genre_ids.slice(0, 2)} />
              <span style={{ color: "#fff" }}>{item.title || item.name}</span>
            </span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Carousel;
