import React, { useContext } from "react";
import { AuthContext } from "../../components/AuthContext/AuthContext";
import styles from "../../styles/pagesStyles/UsersProfile.module.css";
import DashboardSidebar from "./components/DashboardSidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Repair from "./components/Repair";
import MakeReview from "./components/MakeReview";
import Setting from "./components/Setting";
import DashboardHome from "./components/DashboardHome";

const UsersProfile = () => {
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <div id={styles.UsersProfile} className="w-full">
      <div id={styles.UsersProfile_container} className="flex flex-row">
        <div>
          <DashboardSidebar />
        </div>

        <div className="p-6">
          {/* routing components start */}
          <div>
            <Switch>
              <Route exact path="/profile">
                <DashboardHome />
              </Route>
              <Route path="/profile/repair">
                <Repair />
              </Route>
              <Route path="/profile/makeReview">
                <MakeReview />
              </Route>
              <Route path="/profile/setting">
                <Setting />
              </Route>
            </Switch>
          </div>
          {/* routing components end */}
        </div>
      </div>
    </div>
  );
};

export default UsersProfile;
