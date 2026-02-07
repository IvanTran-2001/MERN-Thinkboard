/**
 * Route guard for guest-only pages - Redirects authenticated users to home
 */

import { Navigate, Outlet } from "react-router";

const GuestRoute = () => {
  const token = localStorage.getItem("token");

  if (token) {
    // Token exists - user is already authenticated
    // Redirect to home page (prevents authenticated users from seeing login/register)
    return <Navigate to="/home" replace />;
  }

  // No token - user is a guest
  // Render child routes (login, register pages)
  return <Outlet />;
};

export default GuestRoute;
