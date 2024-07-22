import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { useAuthContext } from "../../contexts/AuthContext";

export const RouteGuard = ({ children }) => {
  const isAuthenticated = true;
  // const { isAuthenticated } = useAuthContext();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children ? children : <Outlet />;
};
