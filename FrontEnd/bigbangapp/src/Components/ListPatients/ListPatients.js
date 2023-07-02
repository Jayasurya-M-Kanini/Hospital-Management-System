import React from "react"
import './ListEmployees.css'
import ManagerBoard from "./ManagerBoard";
import {useState,useEffect} from "react";
import ChangeStatus from "./ChangeStatus";

function ListPatients(){
    const[patients,setPatients]=useState([]);

    const viewPatients=()=>{
        fetch("",{
            "method":"GET",
            headers:{
                "accept":"text/plain",
                "Content-Type":"application/json",
            },
            "body":JSON.stringify({...profile,"profile":{} })
        })
        .then(async (data)=>{
            if(data.status >= 200 && data.status<=300){
                var myData = await data.json();
                console.log(myData);
                setUsers(myData);
            }
        })
        .catch((err)=>{
            console.log(err.error)
        })
    };

    useEffect(() => {
        viewPatients();
      }, []);

return(
    <div>
        <h1 className="list-head">Employee Details</h1>
    <main>
    <table>
            <tr>
            <th>UserId</th>
            <th>Name</th>
            <th>D.O.B</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
            </tr>
            { users.filter((d)=>d.user .status !="Quit")
            .map((user) => (
                    <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td> 
                            <td>{user.dateOfBirth}</td>
                            <td>{user.gender}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.user.status}</td>
                    </tr>
            ))}    
    </table>
    </main>
    </div>
)
}

export default ListPatients;
