import React, { useState } from "react";
import { FaBars, FaUser, FaUserMd, FaUserInjured, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import "../Navbar/Navbar.css";

function AdminNavBar() {  
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
            <li class="nav-link"><a href="#">Profile</a></li>
            <li class="nav-link"><a href="#">Patients</a></li>
            <li class="nav-link"><a href="#">Doctors</a></li>
            <div class="login-register">
                <a href="#" class="button"><FaSignOutAlt className="navbar-icon"/>&nbsp;&nbsp;LogOut</a>
            </div>
        </ul>
    </nav>
</div>

    );
  }

  export default AdminNavBar;