import { Redirect, Route } from "react-router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth && auth.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
