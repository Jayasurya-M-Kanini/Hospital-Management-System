import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ReactComponentElement } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from './Components/Login/Login'
import AccountType from './Components/Register/AccountType';
import Register from './Components/Register/Register';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import AdminRegister from './Components/AdminRegister/AdminRegister';
import PatientRegister from './Components/PatientRegister/PatientRegister';
import DoctorRegister from './Components/DoctorRegister/DoctorRegister';
import AdminNavbar from './Components/AdminNavbar/AdminNavbar';
import DoctorNavBar from './Components/DoctorNavbar/DoctorNavbar';
import PatientNavBar from './Components/PatientNavbar/PatientNavbar';
import AdminProfile from './Components/AdminProfile/AdminProfile';
import DoctorProfile from './Components/DoctorProfile/DoctorProfile';
import PatientProfile from './Components/PatientProfile/PatientProfile';

function App() {
  return (
<div>
  <BrowserRouter>
  {/* <AdminProfile/> */}
    {/* <Landing/> */}
    {/* <AdminNavbar/> */}
    {/* <DoctorProfile/> */}
    <PatientProfile/>
    <DoctorNavBar/>
    {/* <PatientNavBar/> */}
  {/* <Navbar/> */}
  {/* <DoctorRegister/> */}
  {/* <PatientRegister/> */}
  {/* <AdminRegister/> */}
  {/* <Login/> */}
  {/* <AccountType/>  */}
  <routes>
    <route path='/AccountType/' element={<AccountType/>}/>
    <route path='/Register/' element={<Register/>}/>
  </routes>
  </BrowserRouter>

  {/* <div>
    <FontAwesomeIcon icon={['fas','home']} />
  </div> */}

</div>
  );
}

export default App;
