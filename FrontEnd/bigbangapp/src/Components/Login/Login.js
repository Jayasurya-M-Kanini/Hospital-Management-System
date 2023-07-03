import React, { useState } from "react";
import './Login.css';
import '../images/login-1.jpg';
import loginimg from '../images/Pediatrician-pana.png'
import { Link } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    "userId": 0,
    "password": "",
    "role": "",
    "token": "",
    "status": ""
  });

  const login = () => {
    // Check if all fields are filled
    // for (const field in loginData) {
    //   if (!loginData[field]) {
    //     alert("Please fill in all the fields");
    //     return;
    //   }
    // }

    fetch("https://localhost:7235/api/User/Login", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...loginData, "Login": {} }),
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
        } else if (myData.role === "Doctor" && myData.token == null) {
          console.log(myData);
          navigate("/UnApproveProfile");
        } else if (myData.role === "Doctor" && myData.token != null) {
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
          <div className="logo text-center">
            {/* <h1>Company Name</h1> */}
          </div>
          <div className="wrapper">
            <div className="inner-warpper text-center">
              <h2 className="title">Login to your account</h2>
              <div className="input-group">
                <input
                  className="form-control"
                  name="userName"
                  id="userName"
                  type="text"
                  placeholder="User ID"
                  required
                  onChange={(event) => {
                    setLoginData({
                      ...loginData,
                      userId: event.target.value,
                    });
                  }}
                />
                <span className="lighting"></span>
              </div>
              <div className="input-group">
                <input
                  className="form-control"
                  name="userPassword"
                  id="userPassword"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(event) => {
                    setLoginData({
                      ...loginData,
                      password: event.target.value,
                    });
                  }}
                />
              </div>

              <button id="login-btn" onClick={login} >
                Login
              </button>
              <div className="clearfix supporter">
                <div className="pull-left remember-me">
                  <input id="rememberMe" type="checkbox" />
                  <label htmlFor="rememberMe">Remember Me</label>
                </div>
                <Link className="forgot pull-right" to=''>
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="signup-wrapper text-center">
              <Link className="toRegister" to='/AccountType/'>
                Don't have an account?{" "}
                <span className="text-primary">Create One</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
}

export default Login;
