import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";


function NavBar() {  
    const [navActive, setNavActive] = React.useState(false);

    const toggleNavItems = () => {
      setNavActive(!navActive);
    };

    return (
<div className="nav-main">
<nav class="navbar-container">
        <div class="logo-container">
            <a href="index.html">Healthcare</a>
        </div>

        <div className="bars" onClick={toggleNavItems}>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>

        <ul className={`nav-items ${navActive ? 'active' : ''}`}>
            <li class="nav-link"><a href="#">Home</a></li>
            <li class="nav-link"><a href="#">Service</a></li>
            <li class="nav-link"><a href="#">Projects</a></li>
            <li class="nav-link"><a href="#">About</a></li>
            <div class="login-register">
                <a href="#" class="button">Login</a>
                <a href="#" class="button">Sign in</a>
            </div>
        </ul>
    </nav>
</div>

    );
  }

  export default NavBar;