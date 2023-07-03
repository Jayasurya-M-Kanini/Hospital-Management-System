import React, { useState, useEffect } from "react";
import AdminNavBar from "../AdminNavbar/AdminNavbar";
import "../ListAllApprovedDoctors/ListAllApprovedDoctors.css";
import "./search.css";
import { toast } from "react-toastify";

function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const [data, setData] = useState([]);
  
    const handleChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSearch = async () => {
      if (searchQuery === "") {
        viewPatients();
      } else {
        try {
          const response = await fetch(
            `https://localhost:7235/api/Admin/Search_By_Name?name=${searchQuery}`,
            {
              method: "GET",
              headers: {
                accept: "text/plain",
                // 'Authorization': 'Bearer ' + localStorage.getItem('token')
              },
            }
          );
          if (response.ok) {
            const data = await response.json();
            setData(data);
            console.log(data);
          } else {
            toast.error("No doctors matches your search..")
            console.error("Failed to get doctor by name");
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
  
    const viewPatients = async () => {
      try {
        const response = await fetch(
          "https://localhost:7235/api/Patient/Get_All_Approved_Doctors",
          {
            method: "GET",
            headers: {
              accept: "text/plain",
              // 'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setData(data);
          console.log(data);
        } else {
          console.error("Failed to get all approved doctors");
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    useEffect(() => {
      viewPatients();
    }, []);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        handleSearch();
      }, 500); // Delay of 500ms before making the API call
      return () => clearTimeout(timer);
    }, [searchQuery]);
  
    const handleClick = async (doctorId) => {
      const statusDTO = {
        id: doctorId,
        status: "UnApproved",
      };
      console.log(statusDTO);
      await unApproveDoctor(statusDTO);
      await viewPatients();
    };
  
    const unApproveDoctor = async (statusDTO) => {
      try {
        const response = await fetch(
          "https://localhost:7235/api/Admin/Update_Doctor_Status",
          {
            method: 'PUT',
            body: JSON.stringify(statusDTO),
            headers: {
              accept: "text/plain",
              "Content-Type": "application/json",
              // 'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
        } else {
          console.error('Failed to Unapprove doctor');
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleDelete = async (doctorId) => {
      try {
        const response = await fetch(
          "https://localhost:7235/api/Admin/Delete_Doctor?key="+doctorId,
          {
            method: 'DELETE',
            headers: {
              accept: 'text/plain',
              // 'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
          }
        );
        if (response.ok) {
          // Doctor deleted successfully
          const data = await response.json();
          console.log(data);
          await viewPatients();
        } else {
          console.error('Failed to delete doctor');
        }
      } catch (error) {
        console.error(error);
      }
    };
  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          id="search-input"
          value={searchQuery}
          onChange={handleChange}
        />
      </div>

      <div>
        <h2 className="pat-tbl-head">Doctors</h2>
        <div className="patient-table">
          <table className="fl-table">
            <thead>
              <tr>
                <th>DoctorId</th>
                <th>Name</th>
                <th>PhoneNumber</th>
                <th>Specialization</th>
                <th>Experience(Yrs)</th>
                <th>Approval</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr id="col">
                  <td colSpan="7">No data available</td>
                </tr>
              ) : (
                data.map((user) => (
                  <tr key={user.doctorId}>
                    <td>{user.doctorId}</td>
                    <td>{user.name}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.specialization}</td>
                    <td>{user.experience}</td>
                    <td>
                      {/* <div className="view-button">Disapprove</div> */}
                      <div className="view-button" onClick={() => handleClick(user.doctorId)}>
                    Disapprove
                  </div>
                    </td>
                    <td>
                      {/* <div className="Delete-button">Delete</div> */}
                      <div className="Delete-button" onClick={() => handleDelete(user.doctorId)}>
                    Delete
                  </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <AdminNavBar />
    </div>
  );
}

export default Search;
