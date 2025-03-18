import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

export const RouteGuard = ({ children }) => {
  const location = useLocation();

  const { isAuthenticated } = useAuthenticationContext();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children ? children : <Outlet />;
};
