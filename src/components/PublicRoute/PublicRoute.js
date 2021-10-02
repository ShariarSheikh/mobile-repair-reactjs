import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const PublicRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector((state) => state.user);

  return !user ? (
    <Route {...rest}>{(props) => <Component {...props} />}</Route>
  ) : (
    <Redirect to="/" />
  );
};

export default PublicRoute;
