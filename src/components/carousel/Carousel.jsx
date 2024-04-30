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
        {data?.map((data, loading) => (
          <div
            key={data.id}
            onClick={() =>
              navigate(`/${data.media_type || endpoint}/${data.id}`)
            }
          >
            <span>
              <img
                src={url.poster + data?.poster_path}
                alt="Poster"
                style={{ width: 200 }}
              />
              <Genres data={data?.genre_ids.slice(0, 2)} />
              <span style={{ color: "#fff" }}>{data.title || data.name}</span>
            </span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Carousel;
