import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

/*const PrivateRoute = (props) => {
  return (
    <Route exact={props.exact} path={props.path} component={props.component} />
  );
};*/

/*const PrivateRoute = (props) => {
  return <Route {...props} />;
};*/

//Simular Autenticación
let auth;
auth = true;
auth = null;

//alias: component: Component
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>{auth ? <Component /> : <Redirect to="/login" />}</Route>
  );
};

export default PrivateRoute;
