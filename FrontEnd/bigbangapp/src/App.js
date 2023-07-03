import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { ReactComponentElement } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from './Components/Login/Login'
import AccountType from './Components/Register/AccountType';
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
import UpdateDoctor from './Components/UpdateDoctorProfile/UpdateDoctor';
import UpdatePatient from './Components/UpdatePatientProfile/UpdatePatient';
import UnApproveNavbar from './Components/UnApprovedDoctor/UnApproveNavbar';
import UnApproveProfile from './Components/UnApprovedDoctor/UnApproveProfile';
import Home from './Components/Home/Home';
import ListPatients from './Components/ListPatients/ListPatients';
import ListAllApprovedDoctors from './Components/ListAllApprovedDoctors/ListAllApprovedDoctors';
import ListAllUnApprovedDoctors from './Components/ListAllUnApprovedDoctors/ListAllUnApprovedDoctors';
import AdminDoctorsTab from './Components/AdminDoctorsTab/AdminDoctorsTab';
import ApprovedDoctors from './Components/PatientApprovedDoctors/ApprovedDoctors';

function App() {
  return (
<div>
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='Login' element={<Login/>}/> 
      <Route path='/AccountType/' element={<AccountType/>}/>
      <Route path='/DoctorRegister' element={<DoctorRegister/>}/>
      <Route path='/PatientRegister' element={<PatientRegister/>}/>
      <Route path='/AdminRegister' element={<AdminRegister/>}/>
      <Route path='/AdminProfile' element={<AdminProfile/>}/>
      <Route path='/UnApproveProfile' element={<UnApproveProfile/>}/>
      <Route path='/PatientProfile' element={<PatientProfile/>}/>
      <Route path='/DoctorProfile' element={<DoctorProfile/>}/>
      <Route path='/UpdatePatient' element={<UpdatePatient/>}/>
      <Route path='/UpdateDoctor' element={<UpdateDoctor/>}/>
      <Route path='/ListPatients' element={<ListPatients/>}/>
      <Route path='/ListAllUnApprovedDoctors' element={<ListAllUnApprovedDoctors/>}/>
      <Route path='/ListAllApprovedDoctors' element={<ListAllApprovedDoctors/>}/>
      <Route path='/AdminDoctorsTab' element={<AdminDoctorsTab/>}/>
      <Route path='/PatientApprovedDoctors' element={<ApprovedDoctors/>}/>

  </Routes>
  </BrowserRouter>

</div>
  );
}

export default App;
