import React from "react";
import { createClient } from "../../utils/supabase/server.js";

const Navbar = async () => {
  const supabase = createClient();
  let isAuthenticated = false;

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    isAuthenticated = false;
  } else {
    isAuthenticated = true;
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand align-items-center pe-2" href="/home">
          <img
            src="/site_logo.png"
            alt="Logo"
            width="60"
            height="40"
            className="d-inline-block"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
            {isAuthenticated ? (
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
            ) : null}


            {isAuthenticated ? (
              <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/profile">
                Profile
              </a>
            </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/login">
                  Login
                </a>
              </li>
            )}
            {isAuthenticated ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tasks
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/archived">
                      Archived tasks
                    </a>
                  </li>
                </ul>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
