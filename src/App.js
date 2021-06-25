import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Stores from "./pages/Stores/Stores";
import ServicesDynamic from "./pages/ServicesDynamic/ServicesDynamic";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp.js/SignUp";


const App = () => {

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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
          <Footer />
      </Router>
    </>
  );
};

export default App;