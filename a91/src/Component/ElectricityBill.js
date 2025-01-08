import React, { useState } from "react";
import "../Style/ElectricityBill.css";
import { BiSearchAlt } from "react-icons/bi";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const ElectricityBill = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBESCOM, setSelectedBESCOM] = useState("5621044001");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleBESCOMSelection = (value) => {
    setSelectedBESCOM(value);
    setIsDropdownOpen(false);
  };

  const bescomNames = {
    5621044001: "BESCOM",
    5621044002: "BESCOM2",
    5621044003: "BESCOM3",
    5621044004: "BESCOM4",
  };

  return (
    <div className="electricity-main-container">
      <p className="elect-p">Enter electricity bill details</p>
      <div className="elect-main-content">
        <div className="elect-main-content-1">
          <p className="elect-main-content-1-p1" onClick={toggleDropdown}>
            {bescomNames[selectedBESCOM] || "Select BESCOM"}
            {isDropdownOpen ? (
              <BiChevronUp size={20} style={{ marginLeft: "10px" }} />
            ) : (
              <BiChevronDown size={20} style={{ marginLeft: "10px" }} />
            )}
          </p>
          {isDropdownOpen && (
            <div className="bescom-dropdown">
              <p onClick={() => handleBESCOMSelection("5621044001")}>BESCOM</p>
              <p onClick={() => handleBESCOMSelection("5621044002")}>BESCOM2</p>
              <p onClick={() => handleBESCOMSelection("5621044003")}>BESCOM3</p>
              <p onClick={() => handleBESCOMSelection("5621044004")}>BESCOM4</p>
            </div>
          )}
        </div>
        <div className="vertical-line"></div>
        <div className="elect-main-content-2">
          <p className="elect-main-content-1-p2">{selectedBESCOM}</p>
        </div>
        <div className="elect-main-content-3">
          <BiSearchAlt size={40} color="white" />
        </div>
      </div>
      <div className="elect-main-content-details">
        <p>Property found in database: Yes</p>
        <p>
          Property Address: MS MRIDHVIKA PROPERTY MANAGEMENT PVT LTD NO
          51/10/1,RICHMOND ROAD, BANGALORE -,KAR -576112
        </p>
      </div>
      <div className="bot-content-link">
        <p>Continue to Review Details and add Property</p>
      </div>
    </div>
  );
};

export default ElectricityBill;
