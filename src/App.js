import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Stores from "./pages/Stores/Stores";
import ServicesDynamic from "./pages/ServicesDynamic/ServicesDynamic";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp.js/SignUp";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "./components/AuthContext/AuthContext";
import { fireAuth } from "./firebase";
import UsersProfile from "./pages/UsersProfile/UsersProfile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Error from "./pages/Error/Error";

const App = () => {
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
    fireAuth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setAuth({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        });
      } else {
        fireAuth
          .signOut()
          .then(() => {
            // Sign-out successful.
          })
          .catch((error) => {
            // An error happened.
          });
      }
    });
  }, []);

  return (
    <>
      <Router>
        <Nav />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/stores">
              <Stores />
            </Route>
            <Route path="/services/:device">
              <ServicesDynamic />
            </Route>
            {auth && auth.email && (
              <PrivateRoute path="/profile">
                <UsersProfile />
              </PrivateRoute>
            )}
            {auth && !auth.email && (
              <>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
              </>
            )}
            <Route>
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
