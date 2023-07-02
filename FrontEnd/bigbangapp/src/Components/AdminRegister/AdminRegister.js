import React from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";
import "./AdminRegister.css"
import login from "../images/Admin-rafiki.png";

function AdminRegister() {
  return (
    <div className="container">
      <div className="form-column">
        <div class="logo text-center">{/* <h1>Company Name</h1> */}</div>
        <div class="wrapper">
          <div class="inner-warpper text-center">
            <h2 class="title">Admin Registration</h2>
              <div class="input-group">
                <input
                  class="form-control"
                  name="userName"
                  id="userName"
                  type="text"
                  placeholder="User Name"
                  // required
                />
                <span class="lighting"></span>
              </div>
              <div class="input-group">
                <input
                  class="form-control"
                  name="adminphone"
                  id="adminphone"
                  type="phone"
                  placeholder="Phone Number"
                  // required
                />
              </div>
              <div class="input-group">
                <input
                  class="form-control"
                  name="adminemail"
                  id="adminemail"
                  type="email"
                  placeholder="Email Id"
                  // required
                />
              </div>

              <button id="login-btn">Register</button>
          </div>
          </div>
        </div>
        <div className="image-column" id="admin-reg-img">
        <img src={login} alt="Admin" className="login-image" />
      </div>
      </div>
  );
}

export default AdminRegister;
