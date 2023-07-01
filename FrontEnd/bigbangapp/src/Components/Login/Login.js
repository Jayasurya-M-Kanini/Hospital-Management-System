import React from "react";
import './Login.css';
import '../images/login-1.jpg';
import login from '../images/Pediatrician-pana.png';
import { Link } from "react-router-dom";

function Login(){
    return (
      <div className="container">
        <div className="image-column">
          <img src={login} alt="Login" className="login-image" />
        </div>
        <div className="form-column">
          <div class="logo text-center">
            {/* <h1>Company Name</h1> */}
          </div>
          <div class="wrapper">
            <div class="inner-warpper text-center">
              <h2 class="title">Login to your account</h2>
              <form action="" id="formvalidate">
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
                    name="userPassword"
                    id="userPassword"
                    type="password"
                    placeholder="Password"
                    // required
                  />
                </div>

                <button id="login-btn">
                  Login
                </button>
                <div class="clearfix supporter">
                  <div class="pull-left remember-me">
                    <input id="rememberMe" type="checkbox" />
                    <label for="rememberMe">Remember Me</label>
                  </div>
                  <Link class="forgot pull-right" to=''>
                  Forgot Password?
                  </Link>
                </div>
              </form>
            </div>
            <div class="signup-wrapper text-center">
              <Link className="toRegister" to='/AccountType/'>
                Don't have an accout?{" "}
                <span class="text-primary">Create One</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );  
}

export default Login;