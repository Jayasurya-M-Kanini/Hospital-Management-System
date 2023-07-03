import React from "react";
import "./ListPatients.css";
import { useState, useEffect } from "react";
import AdminNavBar from "../AdminNavbar/AdminNavbar";

function ListPatients() {
  const [patients, setPatients] = useState([]);

  const viewPatients = () => {
    fetch("https://localhost:7235/api/Admin/View_All_Patients", {
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
    viewPatients();
  }, []);

  return (
    <div className="patients-table-container">
<h2 className="pat-tbl-head">Patients</h2>
  <div class="patient-table">
      <table class="fl-table">
          <thead>
          <tr>
          <th>PatientId</th>
            <th>Name</th>
            <th>D.O.B</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Blood Group</th>
          </tr>
          </thead>
          <tbody>
          { patients.map((user) => (
            <tr>
                            <td>{user.patientId}</td>
                            <td>{user.name}</td> 
                            <td>{user.dateOfBirth}</td>
                            <td>{user.gender}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.emailId}</td>
                            <td>{user.bloodType}</td> 
                               </tr>             
            ))} 
          </tbody>
      </table>
    </div>
  <AdminNavBar />
</div>
  );
}

export default ListPatients;
