import React from "react";
import './Login.css';
import '../images/login-1.jpg';
import loginimg from '../images/Pediatrician-pana.png'
import { Link } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){
  const navigate = useNavigate();
  var [Login, setLogin] = useState({
    "userId": 0,
    "password":"",
    "role":"",
    "token":"",
    "status": ""
  });
  var login = () => {
    fetch("https://localhost:7235/api/User/Login", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      "body": JSON.stringify({ ...Login,"Login":{}}),
    })
      .then(async (data) => {
        var myData = await data.json();
        localStorage.setItem("id", myData.userId);
        localStorage.setItem("token", myData.token);
        if (myData.role === "Patient") {
          console.log(myData);
          navigate("/PatientProfile");
        } else if (myData.role === "Admin") {
          console.log(myData);
          navigate("/AdminProfile");
        } else if (myData.role === "Doctor" && myData.token==null) {
          console.log(myData);
          navigate("/UnApproveProfile");
        } else {
          console.log(myData);
          navigate("/DoctorProfile");
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

    return (
      <div>
<div className="container">
        <div className="image-column">
          <img src={loginimg} alt="Login" className="login-image" />
        </div>
        <div className="form-column">
          <div class="logo text-center">
            {/* <h1>Company Name</h1> */}
          </div>
          <div class="wrapper">
            <div class="inner-warpper text-center">
              <h2 class="title">Login to your account</h2>
                <div class="input-group">
        
                  <input
                    class="form-control"
                    name="userName"
                    id="userName"
                    type="text"
                    placeholder="User ID"
                    required
                    onChange={(event) => {
                      setLogin({
                        ...Login,
                        userId: event.target.value,
                      });
                    }}

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
                    required
                    onChange={(event) => {
                      setLogin({
                        ...Login,
                        password: event.target.value,
                      });
                    }}
                  />
                </div>

                <button id="login-btn"  onClick={login}
>
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
      <NavBar/>
      </div>
      
    );  
}

export default Login;