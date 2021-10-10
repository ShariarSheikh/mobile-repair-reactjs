import { Route, Switch } from "react-router-dom";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import UserRoute from "./components/UserRoute/UserRoute";
import DeviceRepairDetails from "./pages/DeviceRepairDetails/DeviceRepairDetails";
import Error from "./pages/Error/Error";
import Gadgets from "./pages/Gadgets/Gadgets";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import AdminProfile from "./pages/Profile/AdminProfile/AdminProfile";
import NormalProfile from "./pages/Profile/NormalProfile/NormalProfile";
import Services from "./pages/Services/Services";
import SignUp from "./pages/SignUp.js/SignUp";
import StoreDetails from "./pages/StoreDetails/StoreDetails";
import Stores from "./pages/Stores/Stores";

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

          <AdminRoute path="/admin">
            <AdminProfile />
          </AdminRoute>
          <UserRoute path="/user">
            <NormalProfile />
          </UserRoute>

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
