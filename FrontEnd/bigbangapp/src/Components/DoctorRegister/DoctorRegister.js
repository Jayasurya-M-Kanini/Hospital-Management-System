import React from "react";
import { Link } from "react-router-dom";
import "../PatientRegister/PatientRegister.css"
import login from "../images/Medical prescription-amico.png";

function DoctorRegister() {
  return (
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
                />
              </div>
                </div>
            </div>
              <button id="login-btn">Register</button>
          </div>
          </div>
        </div>
        <div className="Patient-image-column" id="admin-reg-img">
        <img src={login} alt="Admin" className="login-image" />
      </div>
      </div>
  );
}

export default DoctorRegister;