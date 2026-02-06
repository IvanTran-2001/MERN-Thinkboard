import { Navigate, Outlet } from "react-router"; 

const GuestRoute = () => {
  const token = localStorage.getItem("token");

  if (token) {
    // Already logged in? Send to home
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};
export default GuestRoute;
