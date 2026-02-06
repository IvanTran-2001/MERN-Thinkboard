import React from "react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { Link } from "react-router";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Make API call to login endpoint
      const res = await api.post("/auth/login", { email, password });

      // Clear form fields
      setEmail("");
      setPassword("");

      // Store token in localStorage
      const token = res.data.token;
      localStorage.setItem("token", token);

      // Show success message and redirect to home page
      toast.success("Login successful!");
      navigate("/home"); // Redirect to home page after successful login
    } catch (error) {
      setPassword("");
      console.log("Error logging in:", error);
      if (error.response?.status === 400) {
        toast.error(error.response.data.message || "Invalid credentials");
      } else if (error.response?.status === 429) {
        toast.error("Too many login attempts. Please try again later.");
      } else {
        toast.error("An error occurred during login. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h1 className="text-2xl font-bold text-primary font-mono tracking-tighter">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              disabled={loading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              disabled={loading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="loading loading-dots loading-md"></span>
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="link link-primary">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
