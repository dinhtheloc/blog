import React from 'react';
import {
  Link
} from "react-router-dom";

function Header(props) {
  return (
    <nav class="navbar navbar-main navbar-expand-lg navbar-transparent navbar-dark bg-dark" id="navbar-main">
      <div class="container px-lg-0">
        <Link class="navbar-brand mr-lg-5" to="/">
          <img alt="Logo" 
          style={{height: 70}}
          src="/img/logo-while.svg" id="navbar-logo"/>
        </Link>
        <button class="navbar-toggler pr-0" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-main-collapse">
          <ul class="navbar-nav align-items-lg-center">

            {/* <li class="nav-item ">
              <a class="nav-link" href="#">ReactJS</a>
            </li> */}

            {/* <li class="nav-item ">
              <a class="nav-link" href="index.html">Angular</a>
            </li> */}

          </ul>
          <ul class="navbar-nav align-items-lg-center ml-lg-auto">
            {/* <li class="nav-item d-lg-none d-xl-block">
              <a class="nav-link" href="docs/changelog.html" target="_blank">What's new</a>
            </li> */}
          
          </ul>
        </div>
      </div>
    </nav>
  
  
  );
}

export default Header;