import React from "react";
import { Link } from "react-router";
import { PlusIcon, MenuIcon } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully!");
    localStorage.removeItem("token"); // Show logout success message
    navigate("/"); // Redirect to login page after logout
  };

  const handleProfile = () => {
    toast("Profile page is under construction!", {
      icon: "👷",
    });
  };

  const handleSettings = () => {
    toast("Settings page is under construction!", {
      icon: "👷",
    });
  };

  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tighter">
            Think Board
          </h1>
          <div className="flex items-center gap-4">
            <Link to="/create" className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <MenuIcon className="size-5" />
              </label>
              <ul 
                tabIndex={0} 
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-[100] mt-3"
              >
                <li>
                  <button onClick={handleProfile}>Profile</button>
                </li>
                <li>
                  <button onClick={handleSettings}>Settings</button>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
