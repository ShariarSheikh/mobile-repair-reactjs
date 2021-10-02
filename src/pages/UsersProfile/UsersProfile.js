import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import { getUser } from "../../redux/userSlice/userSlice";
import Error from "../Error/Error";
import DashboardHome from "./components/DashboardHome";
import DashboardSidebar from "./components/DashboardSidebar";
import Setting from "./components/Setting";

const UsersProfile = () => {
  const { user } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const fetchUserData = () => {
      setLoading(true);
      const url =
        "https://stormy-woodland-67379.herokuapp.com/auth/user/profile";
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
          console.log(err.message);
        });
    };
    fetchUserData();
  }, [history, dispatch]);

  if (loading) {
    <div>loading...</div>;
  }

  return (
    <div className="w-full">
      <div className="max-w-7xl m-auto flex flex-col u-p-h ">
        <DashboardSidebar />
        <div className="p-6">
          <Switch>
            <Route exact path="/profile">
              <DashboardHome user={user} />
            </Route>
            <Route exact path="/profile/setting">
              <Setting />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default UsersProfile;
