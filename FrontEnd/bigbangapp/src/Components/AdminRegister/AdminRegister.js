import React from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";
import "./AdminRegister.css"
import login from "../images/Admin-rafiki.png";
import AdminNavBar from "../AdminNavbar/AdminNavbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AdminRegister() {
  var [admin, setAdmin] = useState(
    {
      "user": {
      },
      "name": "",
      "phoneNumber": "",
      "emailId": ""
    }
  );

  const navigate=useNavigate();

  var register = () => {
    console.log(admin);

    fetch("https://localhost:7235/api/Admin/Admin_Registration", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...admin,"admin":{} })
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
        alert("------Registerd Successfully-----");
        alert("---User Id:"+myData.userId);
        navigate("/AdminProfile");
      })
      .catch((err) => {
        console.log(err.error);
      });
  };


  return (
    <div>
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
                  required
                  onChange={(event) => {
                    setAdmin({
                      ...admin,
                      "name": event.target.value,
                    });
                  }}
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
                  required
                  onChange={(event) => {
                    setAdmin({
                      ...admin,
                      "phoneNumber": event.target.value,
                    });
                  }}
                />
              </div>
              <div class="input-group">
                <input
                  class="form-control"
                  name="adminemail"
                  id="adminemail"
                  type="email"
                  placeholder="Email Id"
                  required
                  onChange={(event) => {
                    setAdmin({
                      ...admin,
                      "emailId": event.target.value,
                    });
                  }}
                />
              </div>
              <button id="login-btn" onClick={register}>Register</button>
          </div>
          </div>
        </div>
        <div className="image-column" id="admin-reg-img">
        <img src={login} alt="Admin" className="login-image" />
      </div>
      </div>
      <AdminNavBar/>
    </div>
  );
}

export default AdminRegister;
