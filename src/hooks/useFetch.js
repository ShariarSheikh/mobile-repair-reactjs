import { useEffect, useState } from "react";

const useFetch = (url, config) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url, config && config)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, config]);

  return { data, error, loading };
};

export default useFetch;
