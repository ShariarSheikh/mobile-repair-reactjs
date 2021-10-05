import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import { getUser } from "../../redux/userSlice/userSlice";
import DashboardHome from "./components/DashboardHome";
import DashboardNavigation from "./components/DashboardNavigation";
import NotFound from "./components/NotFound";
import Setting from "./components/Setting";

const UsersProfile = () => {
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
          console.log(err);
        });
    };
    fetchUserData();
  }, [history, dispatch]);

  if (loading) {
    <div className="text-white">loading...</div>;
  }

  return (
    <div className="w-full bg-gray-900">
      <div className="max-w-7xl w-full m-auto min-h-screen">
        <DashboardNavigation />
        <div>
          <Switch>
            <Route exact path="/profile">
              <DashboardHome />
            </Route>
            <Route exact path="/profile/setting">
              <Setting />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default UsersProfile;
