import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const AdminRoute = ({ children, ...rest }) => {
  const { user } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.data.email &&
        user.data.email === process.env.REACT_APP_VERCEL_ENV_ADMIN_EMAIL ? (
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

export default AdminRoute;
