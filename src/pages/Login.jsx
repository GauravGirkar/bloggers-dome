import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2>Login</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>
          <button type="submit" className="btn btn-success">Login</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
