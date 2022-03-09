import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";
 const NavBar = () => {
  return (
    <div>
      <nav id="nav-body" className="navbar navbar-light  fixed-top">
        <div className="container-fluid" style={{color: 'white'}}>
          <a className="navbar-brand" href="/">
            <img className="logo-nav" src="https://s3-symbol-logo.tradingview.com/apollo-hospitals--600.png" alt="" />
          </a>
          WE CARE
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header" id="offCan-body-head">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel" style={{color: 'white'}}>
               WE CARE
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body" id="offCan-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="link" to="/">
                  Home
                  </Link>
                  
                </li>
                <li className="nav-item">
                <Link className="link" to="/select">
                  Selection Page
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="link" to="/appointment">
                appointment Page
                  </Link>
                </li>
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="offcanvasNavbarDropdown"
                    // role="button"
                    // data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    Dropdown
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;