import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getUser } from "../redux/userSlice/userSlice";

const useGetUserData = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const fetchUserData = () => {
      setLoading(true);
      const url = process.env.REACT_APP_FETCH_USER_DATA;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };

      fetch(url, config)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          dispatch(getUser(data.user));
          !data.success && history.replace({ pathname: "/" });
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
        });
    };
    fetchUserData();
  }, [history, dispatch]);

  return { error, loading };
};

export default useGetUserData;
