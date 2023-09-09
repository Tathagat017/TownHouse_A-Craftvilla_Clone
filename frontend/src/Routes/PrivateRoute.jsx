import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../Components/Context";
function PrivateRoute({ children }) {
  const { authState } = useContext(authContext);
  const { isAuth, token } = authState;
  if (!isAuth) {
    return <Navigate to="/Login" />;
  } else {
    return children;
  }
}

export default PrivateRoute;
