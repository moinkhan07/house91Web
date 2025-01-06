import React, { useState } from "react";
import "../Style/YetToVisit.css";
import ApartmentCard from "./ApartmentCard";
import h2 from "../Asset/Home/h1.png";

const YetToVisit = () => {
  const [selectedProperties, setSelectedProperties] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const visitedApartments = [
    {
      productImage: h2,
      productName: "Residential",
      productAreaName: "Locality",
      productRent: 20000,
      productBedType: "3BHK",
      productArea: "3700sqft",
      productSaleType: "not for sale",
      productDistance: "9.8 Km away",
      appointmentStatus: "Visited on 12-Sep-24",
      isAgentView: false,
      leftBtn: "Not Visited",
      rightBtn: "Report",
      date: "12-Sep-2024 22:15",
      isAvailable: true,
    },
    {
      productImage: h2,
      productName: "Residential",
      productAreaName: "Locality",
      productRent: 25000,
      productBedType: "3BHK",
      productArea: "3700sqft",
      productSaleType: "not for sale",
      productDistance: "9.8 Km away",
      appointmentStatus: "Last Visited on 12-Sep-24 Past Visits(xx)",
      isAgentView: false,
      leftBtn: "Not Visited",
      rightBtn: "Report",
      date: "12-Aug-2024 22:15",
      isAvailable: true,
    },
    {
      productImage: h2,
      productName: "Residential",
      productAreaName: "Locality",
      productRent: 30000,
      productBedType: "3BHK",
      productArea: "3700sqft",
      productSaleType: "not for sale",
      productDistance: "9.8 Km away",
      appointmentStatus: "Visited on 12-Sep-24",
      isAgentView: false,
      leftBtn: "Not Visited",
      rightBtn: "Report",
      date: "12-Nov-2024 22:15",
      isAvailable: true,
    },
  ];

  const handleSelectAll = () => {
    if (!selectAll) {
      setSelectedProperties(visitedApartments.map((_, index) => index));
    } else {
      setSelectedProperties([]);
    }
    setSelectAll(!selectAll);
  };

  const handlePropertySelect = (index) => {
    if (selectedProperties.includes(index)) {
      setSelectedProperties(
        selectedProperties.filter((item) => item !== index)
      );
    } else {
      setSelectedProperties([...selectedProperties, index]);
    }
  };

  const handleScheduleAppointment = () => {
    if (selectedProperties.length > 0) {
      alert("Your appointment is scheduled");
    } else {
      alert("Please select at least one property to schedule an appointment");
    }
  };

  return (
    <div className="yet-main-container">
      <div className="yet-first-sec">
        <input
          type="checkbox"
          className="bookmark-checkbox-2"
          checked={selectAll}
          onChange={handleSelectAll}
        />
        <p>Select All</p>
      </div>
      {!selectedProperties.length && (
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <p style={{ fontSize: "17px", fontWeight: "600", color: "red" }}>
            Select one or more properties to proceed, maximum 10 properties can
            be selected
          </p>
        </div>
      )}
      <div
        className="product-append-111"
        style={{ width: "100%", marginTop: "30px" }}
      >
        {visitedApartments.map((product, index) => (
          <ApartmentCard
            key={index}
            product={product}
            isSelected={selectedProperties.includes(index)}
            onSelect={() => handlePropertySelect(index)}
          />
        ))}
      </div>
      <div style={{ marginTop: "70px" }}>
        <div className="agent-show-bottom-button">
          <button onClick={handleScheduleAppointment}>
            Schedule an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default YetToVisit;
