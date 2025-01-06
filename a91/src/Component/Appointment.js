import React, { useState } from "react";
import "../Style/YetToVisit.css";
import "../Style/Appointment.css";
import ApartmentCard from "./ApartmentCard";
import h2 from "../Asset/Home/h1.png";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import TextField from "@mui/material/TextField";

const Appointment = () => {
  const apartments = [
    {
      productImage: h2,
      productName: "Residential",
      productAreaName: "Locality",
      productRent: 20000,
      productBedType: "3BHK",
      productArea: "3700sqft",
      productSaleType: "not for sale",
      productDistance: "9.8 Km away",
      appointmentStatus: "Appointment yet to be Confirmed",
      isAgentView: false,
      leftBtn: "Accept new time",
      rightBtn: "Reschedule",
      bgColor: "#fff",
      isAvailable: true,
      date: "12-Sep-2024 22:15",
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
      appointmentStatus: "Agent requested to view on 12-sep-24 at 18:00",
      isAgentView: true,
      leftBtn: "Accept new time",
      rightBtn: "Reschedule",
      bgColor: "#f4d6d6",
      isAvailable: true,
      date: "12-Aug-2024 22:15",
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
      appointmentStatus: "Appointment Confirmed",
      isAgentView: false,
      leftBtn: "Accept new time",
      rightBtn: "Reschedule",
      bgColor: "#d8eadc",
      isAvailable: true,
      date: "12-Nov-2024 22:15",
    },
  ];
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="yet-main-container">
      <div className="yet-first-sec">
        <input type="checkbox" className="bookmark-checkbox-2" />
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
        {apartments.map((apartment, index) => (
          <ApartmentCard
            key={index}
            product={apartment}
            isAppointmentStatus={true}
          />
        ))}
      </div>
      <div style={{ marginTop: "70px" }}>
        <div className="agent-show-bottom-button">
          <button style={{ fontSize: "14px" }}>
            Reschedule Selected Properties
          </button>
          <button style={{ marginTop: "20px", fontSize: "14px" }}>
            Revisit Selected Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
