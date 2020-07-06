import React from 'react';
import {
  Link
} from "react-router-dom";

function Header(props) {
  return (
    <nav className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-dark bg-dark" id="navbar-main">
      <div className="container px-lg-0">
        <Link className="navbar-brand mr-lg-5" to="/">
          <img alt="Logo" 
          style={{height: 70}}
          src="/img/logo-while.svg" id="navbar-logo"/>
        </Link>
        <button className="navbar-toggler pr-0" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-main-collapse">
          <ul className="navbar-nav align-items-lg-center">

            {/* <li className="nav-item ">
              <a className="nav-link" href="#">ReactJS</a>
            </li> */}

            {/* <li className="nav-item ">
              <a className="nav-link" href="index.html">Angular</a>
            </li> */}

          </ul>
          <ul className="navbar-nav align-items-lg-center ml-lg-auto">
            {/* <li className="nav-item d-lg-none d-xl-block">
              <a className="nav-link" href="docs/changelog.html" target="_blank">What's new</a>
            </li> */}
          
          </ul>
        </div>
      </div>
    </nav>
  
  
  );
}

export default Header;