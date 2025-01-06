import React, { useState } from "react";
import "../Style/YetToVisit.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import TextField from "@mui/material/TextField";
import ApartmentCard from "./ApartmentCard";
import h2 from "../Asset/Home/h1.png";

const ScheduleAppointment = () => {
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

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedProperties, setSelectedProperties] = useState([]);

  const handleSelectAll = (isChecked) => {
    if (isChecked) {
      setSelectedProperties(visitedApartments.map((_, index) => index));
    } else {
      setSelectedProperties([]);
    }
  };

  const handlePropertySelect = (index) => {
    if (selectedProperties.includes(index)) {
      setSelectedProperties(selectedProperties.filter((i) => i !== index));
    } else {
      setSelectedProperties([...selectedProperties, index]);
    }
  };

  const handleRequestAppointment = () => {
    if (selectedProperties.length === 0) {
      alert("Please select at least one property.");
      return;
    }

    const selectedApartments = selectedProperties.map(
      (index) => visitedApartments[index]
    );

    alert(
      `Appointment scheduled for:\n\n${selectedApartments
        .map((apartment) => apartment.productName)
        .join(
          ", "
        )}\n\nDate: ${selectedDate.toLocaleDateString()} Time: ${selectedDate.toLocaleTimeString()}`
    );
  };

  return (
    <div className="yet-main-container">
      <div className="yet-first-sec">
        <input
          type="checkbox"
          className="bookmark-checkbox-2"
          checked={selectedProperties.length === visitedApartments.length}
          onChange={(e) => handleSelectAll(e.target.checked)}
        />
        <p>Select All</p>
      </div>
      <div style={{ textAlign: "center", marginBottom: "70px" }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div style={{ marginRight: "10px" }}>
              <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
            <div>
              <MobileTimePicker
                label="Select Time"
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
          </div>
        </LocalizationProvider>
      </div>
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
          <button onClick={handleRequestAppointment}>
            Request For Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
