import React, { useState, useEffect } from "react";
import AdminNavBar from "../AdminNavbar/AdminNavbar";
import '../ListAllApprovedDoctors/ListAllApprovedDoctors.css';
import Tab from "../Tab/Tab";
import PatientNavBar from "../PatientNavbar/PatientNavbar";

function ApprovedDoctors() {
  const [patients, setPatients] = useState([]);

  const viewDoctors = () => {
    fetch("https://localhost:7235/api/Patient/Get_All_Approved_Doctors", {
      method: "GET",
      headers: {
        accept: "text/plain",
      },
    })
      .then(async (data) => {
        if (data.status >= 200 && data.status <= 300) {
          var myData = await data.json();
          console.log(myData);
          setPatients(myData);
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  useEffect(() => {
    viewDoctors();
  }, []);

  return (
    <div className="approve-list">
      <div>
      <div className="patient-table">
        <table className="fl-table">
          <thead>
            <tr>
              <th>DoctorId</th>
              <th>Name</th>
              <th>PhoneNumber</th>
              <th>Specialization</th>
              <th>Experience(Yrs)</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((user) => (
              <tr key={user.doctorId}>
                <td>{user.doctorId}</td>
                <td>{user.name}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.specialization}</td>
                <td>{user.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      <PatientNavBar />
    </div>
  );
}

export default ApprovedDoctors;
