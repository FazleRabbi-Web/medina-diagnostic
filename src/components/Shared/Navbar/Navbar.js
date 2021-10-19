import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";
const Navbar = () => {
  const { logOut, user } = useAuth();

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="d-flex">
            <img
              src="https://cdn.discordapp.com/attachments/899735448845418517/899943663885504512/favicon.png"
              style={{ height: "50px", width: "170px" }}
              alt=""
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto fw-bold">
              <Link to="/home" className="nav-link">
                Home
              </Link>
              <Link to="/services" className="nav-link">
                services
              </Link>
              <Link to="/testimonial" className="nav-link">
                Testimonial
              </Link>
              <Link to="/about" className="nav-link">
                About us
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>

              {user.email ? (
                <p className="text-center pt-2 me-2 text-info">
                  {user.displayName}
                </p>
              ) : (
                ""
              )}
              {user.email ? (
                <Link to="/login">
                  <button onClick={logOut} className="btn btn-warning me-2">
                    Log-out
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="btn btn-warning me-2">Log In</button>
                </Link>
              )}
              {user.email ? (
                ""
              ) : (
                <Link to="/register">
                  <button className="btn btn-success me-2">Register</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
