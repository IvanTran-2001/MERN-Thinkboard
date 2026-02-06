import React from "react";
import { Link } from "react-router";
import { PlusIcon } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const NavBar = () => {
  const [userName, _] = React.useState("User"); // Placeholder for user name
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully!");
    localStorage.removeItem("token"); // Show logout success message
    navigate("/"); // Redirect to login page after logout
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
              <label tabIndex={0} className="btn btn-ghost">
                {userName} 
              </label>
              <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box z-50">
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Settings</a>
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
