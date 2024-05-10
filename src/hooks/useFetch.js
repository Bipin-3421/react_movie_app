import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(null);

  useEffect(() => {
    setloading("Loading");
    setData(null);

    const trialFunc = async () => {
      const res = await fetchDataFromApi(url);
      setData(res);
      setloading(false);
    };
    trialFunc();
  }, [url]);

  return { data, loading };
};

export default useFetch;
