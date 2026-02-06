import React from "react";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { Link } from "react-router";

const RegisterForm = () => {
  const [email, setEmail] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Make API call to register endpoint
      const res = await api.post("/auth/register", { userName, email, password });

      // Clear form fields
      setEmail("");
      setUserName("");
      setPassword("");

      // Store token in localStorage
      const token = res.data.token;
      localStorage.setItem("token", token);

      // Show success message and redirect to home page
      toast.success("Registration successful!");
      navigate("/home"); // Redirect to home page after successful registration
    } catch (error) {
      console.log("Error registering:", error);
      if (error.response?.status === 400) {
        toast.error(error.response.data.message || "Invalid registration details");
      } else if (error.response?.status === 429) {
        toast.error("Too many registration attempts. Please try again later.");
      } else {
        toast.error("An error occurred during registration. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h1 className="text-2xl font-bold text-primary font-mono tracking-tighter">
          Create Account
        </h1>
        <form onSubmit={handleSubmit}>
        <div className="form-control">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <input
              type="text"
              placeholder="username"
              className="input input-bordered"
              disabled={loading}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              placeholder="email"
              autoComplete="email"
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
              autoComplete="password"
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
                Signing Up
                  <span className="loading loading-dots loading-md"></span>
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm">
            Already have an account?{" "}
            <Link to="/" className="link link-primary">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
