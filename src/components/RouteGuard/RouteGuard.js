import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthenticationContext } from "../../contexts/AuthenticationContext";

export const RouteGuard = ({ children }) => {

  const { isAuthenticated } = useAuthenticationContext();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children ? children : <Outlet />;
};
