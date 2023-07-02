import React, { useState } from "react";
import '../UpdateDoctorProfile/UpdateDoctor.css';
import { useNavigate } from "react-router-dom";


 const UpdatePatient = () => {
//   const [formData, setFormData] = useState(
//     {
//         "id": localStorage.getItem('id'),
//         "phone": "",
//         "address": "",
//         "passport": "",
//         "drivingLicenseNumber": ""
//       }
//   );

  const navigate=useNavigate();


//   const update=()=>{
//     console.log(formData)
//     if(formData.phone!="" || formData.passport!="" || formData.address!="" || formData.drivingLicenseNumber!="" ){
//       fetch("http://localhost:5201/api/User/action/Update_Employees",{
//           "method":"POST",
//           headers:{
//               "accept":"text/plain",
//               "Content-Type":"application/json",
//           },
//           "body":JSON.stringify({...formData,"formData":{} }
//           )
//       })
//       .then(async (data)=>{
//           if(data.status >= 200 && data.status<=300){
//               var myData = await data.json();
//               console.log(myData);
//               navigate("/AlertBoxProfile/");
//           }
//       })
//       .catch((err)=>{
//           console.log(err.error)
//       })
//     }
//     else{
//       alert("Try to fill atleast one field!!")
//       navigate('/UpdateProfile/');
//     }
      
//   }
   return (
    <div className="update-container">
        <div className="up-prof-head">
            <h1>
                Update Profile
            </h1>
        </div>
<div className="form-container-update" >
      <div className="up-prof">
        {/* <label className="up-prof-label" htmlFor="PH NO">PH NO :</label> */}
        <input
         required
         className="up-prof-input"
          id="PH NO"
          name="PH NO"
        //   value={formData.name}
          placeholder="Phone Number"
        //   onChange={(event,e)=>{
        //     setFormData({...formData,"phone":event.target.value})}}
        />
      </div><br/>

      <div className="up-prof">
        {/* <label className="up-prof-label" htmlFor="address">ADDRESS :</label> */}
        <input
        required
         className="up-prof-input"
          id=  "email"
          name="email"
          placeholder="Email"
        //   onChange={(event,e)=>{
        //     setFormData({...formData,"address":event.target.value})}}
        />
      </div><br/>
      <div className="prof-btn">
      <button className="up-prof-btn" type="submit" >SUMBIT</button>
      {/* onClick={update} */}
      </div>
    </div>
    </div>
   
    
  );
};
 export default UpdatePatient;
