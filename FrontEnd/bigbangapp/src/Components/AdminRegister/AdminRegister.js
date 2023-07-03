import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import "./AdminRegister.css";
import login from "../images/Admin-rafiki.png";
import AdminNavBar from "../AdminNavbar/AdminNavbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function AdminRegister() {
  const [admin, setAdmin] = useState({
    "user": {},
    "name": "",
    "phoneNumber": "",
    "emailId": ""
  });

  const navigate = useNavigate();

  const register = () => {
    // Check if all fields are filled
    if (!admin.name || !admin.phoneNumber || !admin.emailId) {
      toast.warning("Please fill in all the fields");
      return;
    }

    console.log(admin);

    fetch("https://localhost:7235/api/Admin/Admin_Registration", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      body: JSON.stringify({ ...admin, "admin": {} })
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
        toast.success("Registered Successfully");
        alert("User Id: " + myData.userId);
        navigate("/AdminProfile");
      })
      .catch((err) => {
        toast.error("Error occured, Kindly retry again !!")
        console.log(err.error);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="form-column">
          <div className="logo text-center">{/* <h1>Company Name</h1> */}</div>
          <div className="wrapper">
            <div className="inner-warpper text-center">
              <h2 className="title">Admin Registration</h2>
              <div className="input-group">
                <input
                  className="form-control"
                  name="userName"
                  id="userName"
                  type="text"
                  placeholder="User Name"
                  required
                  onChange={(event) => {
                    setAdmin({
                      ...admin,
                      "name": event.target.value
                    });
                  }}
                />
                <span className="lighting"></span>
              </div>
              <div className="input-group">
                <input
                  className="form-control"
                  name="adminphone"
                  id="adminphone"
                  type="phone"
                  placeholder="Phone Number"
                  required
                  onChange={(event) => {
                    setAdmin({
                      ...admin,
                      "phoneNumber": event.target.value
                    });
                  }}
                />
              </div>
              <div className="input-group">
                <input
                  className="form-control"
                  name="adminemail"
                  id="adminemail"
                  type="email"
                  placeholder="Email Id"
                  required
                  onChange={(event) => {
                    setAdmin({
                      ...admin,
                      "emailId": event.target.value
                    });
                  }}
                />
              </div>
              <button id="login-btn" onClick={register}>
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="image-column" id="admin-reg-img">
          <img src={login} alt="Admin" className="login-image" />
        </div>
      </div>
      <AdminNavBar />
    </div>
  );
}

export default AdminRegister;
