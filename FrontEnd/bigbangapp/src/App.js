import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ReactComponentElement } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from './Components/Login/Login'
import AccountType from './Components/Register/AccountType';
import Register from './Components/Register/Register';

function App() {
  return (
<div>
  <BrowserRouter>
  {/* <Login/> */}
  <AccountType/>
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
