import React, { useState } from "react";
import {FaSignOutAlt } from "react-icons/fa";
import "../Navbar/Navbar.css";
import { Link, useNavigate } from "react-router-dom";


function DoctorNavBar() {  
    const [navActive, setNavActive] = React.useState(false);

    const toggleNavItems = () => {
      setNavActive(!navActive);
    };


    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("id");
        localStorage.removeItem("token");
        navigate("/");
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
            <li class="nav-link"><Link to="/DoctorProfile">Profile</Link></li>
            <li class="nav-link"><Link to="/UpdateDoctor">Update Pofile</Link></li>
            <div class="login-register" onClick={logout}>
                <a href="#" class="button"><FaSignOutAlt className="navbar-icon"/>&nbsp;&nbsp;LogOut</a>
            </div>
        </ul>
    </nav>
</div>

    );
  }

  export default DoctorNavBar;