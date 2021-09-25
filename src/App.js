import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import useFetch from "./hooks/useFetch";
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
      <Router>
        <Header />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/stores">
              <Stores />
            </Route>
            <Route path="/services/:device">
              <Services />
            </Route>
            <Route path="/devicereapir/:devicename">
              <DeviceRepairDetails />
            </Route>

            <PrivateRoute path="/profile">
              <UsersProfile />
            </PrivateRoute>

            <>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
            </>

            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
