import { Route, Switch } from "react-router";
import ComingSoon from "./components/ComingSoon";
import Setting from "./components/Setting";
import UserHome from "./components/UserHome";

const NormalProfile = () => {
  return (
    <main className="w-full bg-gray-900">
      <div className="max-w-7xl w-full m-auto min-h-screen">
        <Switch>
          <Route exact path="/user">
            <UserHome />
          </Route>
          <Route exact path="/user/setting">
            <Setting />
          </Route>
          <Route path="*">
            <ComingSoon />
          </Route>
        </Switch>
      </div>
    </main>
  );
};

export default NormalProfile;
