import React from 'react'

const LoginForm = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
            <h1 className="text-2xl font-bold text-primary font-mono tracking-tighter">
                Login
            </h1>
            <div className="form-control">
                <div className="label">
                    <span className="label-text">Email</span>
                </div>
                <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
                <div className="label">
                    <span className="label-text">Password</span>
                </div>
                <input type="password" placeholder="password" className="input input-bordered" />
            </div>

            <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
            </div>
            
        </div>
    </div>
  )
}

export default LoginForm