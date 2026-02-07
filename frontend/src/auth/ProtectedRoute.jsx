/**
 * Route guard requiring authentication - Redirects to login if no token found
 */

import { Navigate, Outlet } from "react-router"; 

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    // No token found - user is not authenticated
    // Redirect to login page with replace flag (prevents back button issues)
    return <Navigate to="/" replace />;
  }

  // Token exists - user is authenticated
  // Render child routes defined in the router configuration
  return <Outlet />;
};

export default ProtectedRoute;
