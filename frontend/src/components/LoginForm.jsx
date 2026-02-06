import React from 'react'
import api from '../lib/axios';
import toast from 'react-hot-toast';

const LoginForm = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            await api.post("/login", { email, password });
            toast.success("Login successful!");
            setEmail("");
            setPassword("");
        } catch (error) {
            setPassword("");
            console.log("Error logging in:", error);
            if (error.response?.status === 400) {
                toast.error("Invalid email or password.");
            }
        
        } finally {
            setLoading(false);
        }
    }
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
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </div>
            </form>
            
        </div>
    </div>
  )
}

export default LoginForm