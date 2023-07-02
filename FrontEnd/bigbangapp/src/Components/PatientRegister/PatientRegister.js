import React from "react";
import "./PatientRegister.css"
import login from "../images/Person with a cold-pana.png";
import NavBar from "../Navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function PatientRegister() {
  var [patient, setPatient] = useState(
    {
      "user": {
      },
      "name": "",
      "dateOfBirth": "",
      "phoneNumber": "",
      "emailId": "",
      "address": "",
      "gender": "",
      "bloodType": "",
      "passwordClear": ""
    }
  );

  const navigate=useNavigate();

  var register = () => {
    console.log(patient);
    fetch("https://localhost:7235/api/Patient/Patient_Registration", {
      method: "POST",
      headers: {
        accept: "text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...patient,"patient":{} })
    })
      .then(async (data) => {
        var myData = await data.json();
        console.log(myData);
        localStorage.setItem('id', myData.userId);
        alert("Registeerd Successfully");
        navigate("/PatientProfile");
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
            <h2 class="title">Patient Registration</h2>
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
                    setPatient({
                      ...patient,
                      name: event.target.value,
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
                    setPatient({
                      ...patient,
                      dateOfBirth: event.target.value,
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
                    setPatient({
                      ...patient,
                      phoneNumber: event.target.value,
                    });
                  }}

                />
              </div>
              <div class="input-group">
                <input
                  class="form-control"
                  name="gender"
                  id="gender"
                  type="text"
                  placeholder="Gender"
                  required
                  onChange={(event) => {
                    setPatient({
                      ...patient,
                      gender: event.target.value,
                    });
                  }}
                />
              </div>
                </div>
                <div className="inner-right">
              <div class="input-group">
                <input
                  class="form-control"
                  name="blood"
                  id="blood"
                  type="text"
                  placeholder="Blood Group"
                  required
                  onChange={(event) => {
                    setPatient({
                      ...patient,
                      bloodType: event.target.value,
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
                    setPatient({
                      ...patient,
                      emailId: event.target.value,
                    });
                  }}

                />
              </div>
              <div class="input-group">
                <input
                  class="form-control"
                  name="patientAddress"
                  id="patientAddress"
                  type="text"
                  placeholder="Address"
                  required
                  onChange={(event) => {
                    setPatient({
                      ...patient,
                      address: event.target.value,
                    });
                  }}
                />
              </div>
              <div class="input-group">
                <input
                  class="form-control"
                  name="pwd"
                  id="pwd"
                  type="text"
                  placeholder="Password"
                  required
                  onChange={(event) => {
                    setPatient({
                      ...patient,
                      passwordClear: event.target.value,
                    });
                  }}
                />
              </div>
                </div>
            </div>
              <button id="login-btn" onClick={register}>Register</button>
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

export default PatientRegister;