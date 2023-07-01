import React, { useState, useEffect } from 'react';
import './SideNav.css';

const SideNav = () => {
 

  return (
    <header>
        <div class="logo">
            <div class="bars"></div>
            <h2>Coderider</h2>
        </div>
       
        <nav>
            <ul class="nav__links">
                <li><a href="#"><i class="fas fa-home fa-lg"></i><span>Home</span></a></li>
                <li><a href="#"><i class="fas fa-folder fa-lg"></i><span>Groups</span></a></li>
                <li><a href="#"><i class="fas fa-comment-alt fa-lg"></i><span>Dialogs</span></a></li>
                <li><a href="#"><i class="fas fa-phone fa-lg"></i><span>Contact</span></a></li>
            </ul>
        </nav>
        <section>
            <span><i class="fi-rr-search"></i></span>
            <span><i class="fi-sr-bell"></i></span>
            <img src="user.jpg" alt=""/>
        </section>
    </header>
  );
};

export default SideNav;
