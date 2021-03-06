import { Route, Switch } from "react-router";
import Api from "./components/Api";
import DashboardHome from "./components/DashboardHome";
import DashboardNavigation from "./components/DashboardNavigation";
import NotFound from "./components/NotFound";
import Setting from "./components/Setting";

const AdminProfile = () => {
  return (
    <main className="w-full bg-gray-900">
      <div className="max-w-7xl w-full m-auto min-h-screen">
        <DashboardNavigation />
        <div>
          <Switch>
            <Route exact path="/admin">
              <DashboardHome />
            </Route>
            <Route exact path="/admin/setting">
              <Setting />
            </Route>
            <Route exact path="/admin/upload-data">
              <Api />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </main>
  );
};

export default AdminProfile;
