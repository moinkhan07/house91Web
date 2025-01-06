import React, { useState } from "react";
import "../Style/AddProperty.css";
import "../Style/Property.css";
import Photograph from "./Photograph";
import ElectricityBill from "./ElectricityBill";
import SelectAgent from "./SelectAgent";
import PropertyDetails from "./PropertyDetails";
import ActiveProperty from "./ActiveProperty";
import UnderNegotiation from "./UnderNegotiation";
import InactiveProperty from "./InactiveProperty";

const Property = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="add-property-main-container">
      {/* Navigation Bar */}
      <div className="options-container-1">
        <div
          key={"Electricity Bill"}
          className={`option ${
            selectedOption === "Active Property" ? "active" : ""
          }`}
          onClick={() => handleOptionClick("Active Property")}
          style={{
            borderTopLeftRadius: "40px",
            borderBottomLeftRadius: "40px",
          }}
        >
          Active Property
        </div>
        <div
          key={"Property Details"}
          className={`option ${
            selectedOption === "Under Negotiation" ? "active" : ""
          }`}
          onClick={() => handleOptionClick("Under Negotiation")}
          style={{
            borderRight: "2px solid black",
            borderLeft: "2px solid black",
          }}
        >
          Under Negotiation
        </div>
        <div
          key={"Photographs"}
          className={`option ${
            selectedOption === "Inactive Property" ? "active" : ""
          }`}
          onClick={() => handleOptionClick("Inactive Property")}
          style={{ borderRadius: "40px" }}
        >
          Inactive Property
        </div>
      </div>

      {/* Display Content */}
      <div className="content-container">
        {selectedOption === "Active Property" && <ActiveProperty />}
        {selectedOption === "Under Negotiation" && <UnderNegotiation />}
        {selectedOption === "Inactive Property" && <InactiveProperty />}
      </div>
    </div>
  );
};

export default Property;
