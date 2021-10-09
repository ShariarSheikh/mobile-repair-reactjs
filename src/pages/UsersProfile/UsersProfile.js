import React from "react";
import { Route, Switch } from "react-router-dom";

import useGetUserData from "../../hooks/useGetUserData";
import Api from "./components/Api";
import DashboardHome from "./components/DashboardHome";
import DashboardNavigation from "./components/DashboardNavigation";
import NotFound from "./components/NotFound";
import Setting from "./components/Setting";

const UsersProfile = () => {
  const { loading } = useGetUserData();

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
            <Route exact path="/profile/upload-data">
              <Api />
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
