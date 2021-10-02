import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector((state) => state.user);

  return user ? (
    <Route {...rest}>{(props) => <Component {...props} />}</Route>
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
