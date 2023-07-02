import React from "react";
import { Link } from "react-router-dom";
import "../PatientRegister/PatientRegister.css"
import login from "../images/Medical prescription-amico.png";
import NavBar from "../Navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DoctorRegister() {
  var [doctor, setDoctor] = useState(
    {
      "user": {
      },
      "name": "",
      "dateOfBirth": "",
      "phoneNumber": "",
      "emailId": "",
      "specialization": "",
      "experience": 0,
      "passwordClear": ""
    }
  );

  const navigate=useNavigate();

  var register = () => {
    console.log(doctor);

    fetch("https://localhost:7235/api/Doctor/Doctor_Registration", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...doctor,"doctor":{} })
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
        localStorage.setItem('id', myData.userId);
        alert("Registerd Successfully");
        navigate("/UnApproveProfile");
      })
      .catch((err) => {
        console.log(err.error);
      });
  };
  return (
    
    <div>
<div className="container">
      <div className="Patient-form-column">
        <div class="wrapper" id="patient-wrapper">
          <div class="inner-warpper text-center">
            <h2 class="title">Doctor Registration</h2>
            <div className="inner-wrapper-container">
                <div className="inner-left">
                <div class="input-group">
                <input
                  class="form-control"
                  name="userName"
                  id="userName"
                  type="text"
                  placeholder="User Name"
                  required
                  onChange={(event) => {
                    setDoctor({
                      ...doctor,
                      "name": event.target.value,
                    });
                  }}
                />
                </div>
              <div class="input-group">
                <input
                  class="form-control"
                  name="dob"
                  id="dob"
                  type="date"
                  placeholder="Date Of Birth"
                  required
                  onChange={(event) => {
                    setDoctor({
                      ...doctor,
                      "dateOfBirth": event.target.value,
                    });
                  }}
                />
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
                    setDoctor({
                      ...doctor,
                      "phoneNumber": event.target.value,
                    });
                  }}
                />
              </div>
              <div class="input-group">
                <input
                  class="form-control"
                  name="email"
                  id="patientemail"
                  type="email"
                  placeholder="Email ID"
                  required
                  onChange={(event) => {
                    setDoctor({
                      ...doctor,
                      "emailId": event.target.value,
                    });
                  }}
                />
              </div>

                </div>
                <div className="inner-right">
                <div class="input-group">
                <input
                  class="form-control"
                  name="speciality"
                  id="speciality"
                  type="text"
                  placeholder="Specializations"
                  required
                  onChange={(event) => {
                    setDoctor({
                      ...doctor,
                      "specialization": event.target.value,
                    });
                  }}
                />
              </div>
              <div class="input-group">
                <input
                  class="form-control"
                  name="experience"
                  id="experience"
                  type="number"
                  placeholder="Experience"
                  required
                  onChange={(event) => {
                    setDoctor({
                      ...doctor,
                      "experience": event.target.value,
                    });
                  }}
                />
              </div>

              <div class="input-group">
                <input
                  class="form-control"
                  name="docpwd"
                  id="docpwd"
                  type="text"
                  placeholder="Password"
                  required
                  onChange={(event) => {
                    setDoctor({
                      ...doctor,
                      "passwordClear": event.target.value,
                    });
                  }}
                />
              </div>
                </div>
            </div>
              <button id="login-btn"onClick={register}
>Register</button>
          </div>
          </div>
        </div>
        <div className="Patient-image-column" id="admin-reg-img">
        <img src={login} alt="Admin" className="login-image" />
      </div>
      </div>
      <NavBar/>
    </div>
    
  );
}

export default DoctorRegister;