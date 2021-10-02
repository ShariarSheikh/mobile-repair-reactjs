import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import DeviceRepairDetails from "./pages/DeviceRepairDetails/DeviceRepairDetails";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Services from "./pages/Services/Services";
import SignUp from "./pages/SignUp.js/SignUp";
import Stores from "./pages/Stores/Stores";
import UsersProfile from "./pages/UsersProfile/UsersProfile";

const App = () => {
  return (
    <>
      <Header />
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/stores" component={Stores} />
          <Route exact path="/services/:device" component={Services} />
          <Route exact path="/device" component={DeviceRepairDetails} />
          <PrivateRoute exact path="/profile" component={UsersProfile} />

          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/signup" component={SignUp} />
          <Route path="*" component={Error} />
        </Switch>
      </>
      <Footer />
    </>
  );
};

export default App;
