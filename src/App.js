import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import DeviceRepairDetails from "./pages/DeviceRepairDetails/DeviceRepairDetails";
import Error from "./pages/Error/Error";
import Gadgets from "./pages/Gadgets/Gadgets";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Services from "./pages/Services/Services";
import SignUp from "./pages/SignUp.js/SignUp";
import StoreDetails from "./pages/StoreDetails/StoreDetails";
import Stores from "./pages/Stores/Stores";
import UsersProfile from "./pages/UsersProfile/UsersProfile";

const App = () => {
  return (
    <>
      <Header />
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/stores">
            <Stores />
          </Route>
          <Route exact path="/services/:device">
            <Services />
          </Route>
          <Route exact path="/device">
            <DeviceRepairDetails />
          </Route>
          <Route exact path="/gadgets">
            <Gadgets />
          </Route>
          <Route exact path="/store/:location">
            <StoreDetails />
          </Route>
          <PrivateRoute path="/profile">
            <UsersProfile />
          </PrivateRoute>

          <PublicRoute exact path="/login">
            <Login />
          </PublicRoute>
          <PublicRoute exact path="/signup">
            <SignUp />
          </PublicRoute>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </>
      <Footer />
    </>
  );
};

export default App;
