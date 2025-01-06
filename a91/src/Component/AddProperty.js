import React, { useState } from "react";
import "../Style/AddProperty.css";
import Photograph from "./Photograph";
import ElectricityBill from "./ElectricityBill";
import SelectAgent from "./SelectAgent";
import PropertyDetails from "./PropertyDetails";

const AddProperty = () => {
  const isMobile = window.innerWidth <= 768;
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="add-property-main-container">
      {/* Navigation Bar */}
      <div className="options-container">
        <div
          key={"Electricity Bill"}
          className={`option ${
            selectedOption === "Electricity Bill" ? "active" : ""
          }`}
          onClick={() => handleOptionClick("Electricity Bill")}
          style={{
            borderTopLeftRadius: "40px",
            borderBottomLeftRadius: "40px",
          }}
        >
          Electricity Bill
        </div>
        <div
          key={"Property Details"}
          className={`option ${
            selectedOption === "Property Details" ? "active" : ""
          }`}
          onClick={() => handleOptionClick("Property Details")}
          style={{
            borderRight: !isMobile ? "2px solid black" : "",
            borderLeft: !isMobile ? "2px solid black" : "",
          }}
        >
          Property Details
        </div>
        <div
          key={"Photographs"}
          className={`option ${
            selectedOption === "Photographs" ? "active" : ""
          }`}
          onClick={() => handleOptionClick("Photographs")}
          style={{ borderRight: !isMobile ? "2px solid black" : "" }}
        >
          Photographs
        </div>
        <div
          key={"Select Agent"}
          className={`option ${
            selectedOption === "Select Agent" ? "active" : ""
          }`}
          onClick={() => handleOptionClick("Select Agent")}
          style={{
            borderTopRightRadius: "40px",
            borderBottomRightRadius: "40px",
          }}
        >
          Select Agent
        </div>
      </div>

      {/* Display Content */}
      <div className="content-container">
        {selectedOption === "Electricity Bill" && <ElectricityBill />}
        {selectedOption === "Property Details" && <PropertyDetails />}
        {selectedOption === "Photographs" && <Photograph />}
        {selectedOption === "Select Agent" && (
          <div className="add-select-agent">
            <SelectAgent />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProperty;
