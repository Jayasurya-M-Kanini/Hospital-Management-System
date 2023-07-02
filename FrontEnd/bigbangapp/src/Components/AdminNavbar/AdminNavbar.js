import React, { useState } from "react";
import { FaBars, FaUser, FaUserMd, FaUserInjured, FaUserPlus, FaSignOutAlt } from "react-icons/fa";
import "../Navbar/Navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function AdminNavBar() {  
    const [navActive, setNavActive] = React.useState(false);

    const toggleNavItems = () => {
      setNavActive(!navActive);
    };

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
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
            <li class="nav-link"><Link to='/AdminProfile'>Profile</Link></li>
            <li class="nav-link"><Link href="#">Patients</Link></li>
            <li class="nav-link"><Link href="#">Doctors</Link></li>
            <li class="nav-link"><Link to='/AdminRegister'>Add Admin</Link></li>
            <div class="login-register" onClick={logout}>
                <a href="#" class="button"><FaSignOutAlt className="navbar-icon"/>&nbsp;&nbsp;LogOut</a>
            </div>
        </ul>
    </nav>
</div>

    );
  }

  export default AdminNavBar;