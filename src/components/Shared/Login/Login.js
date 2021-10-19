import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const {
    googleSignIn,
    signInUser,
    user,
    error,
    handleEmailChange,
    handlePasswordChange,
  } = useAuth();
  return (
    <div className=" container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <form onSubmit={signInUser} className="col-md-6 shadow p-5">
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              onBlur={handleEmailChange}
              type="email"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input
              onBlur={handlePasswordChange}
              type="password"
              className="form-control"
              required
            />
          </div>
          <h5 className="text-danger mt-2">{user.email ? "" : `${error}`}</h5>
          <div className="from-group mt-5">
            <input className='bg-warning border-0 rounded px-3 py-1 fw-bold' type="submit" value="Login" />
          </div>
          <div className="from-group mt-5">
            <button onClick={googleSignIn} className="btn fw-bold btn-warning">
              Google Sign in
            </button>
            <br />
            <br />
            <Link className="fw-bold" to="/register">
              Are you new user?
            </Link>
          </div>
        </form>
        <div className="col-md-6 d-none d-md-block">
          <img
            className="img-fluid"
            src="https://ld-wt73.template-help.com/wt_prod-20176/images/post-16-370x240.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
