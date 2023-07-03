import React from "react";
import "./Tab.css";
import { Link } from "react-router-dom";


function Tab() {
  return (
    <div className="tab-container">
      <div className="tab-buttons">
        <Link to="/ListAllApprovedDoctors" className="tab-button"><div>View Doctors</div></Link>
        <Link to="/ListAllUnApprovedDoctors" className="tab-button"><div>Requests</div></Link>
      </div>
    </div>
  );
}

export default Tab;