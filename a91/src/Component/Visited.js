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

const Visited = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reportingProperty, setReportingProperty] = useState(null);

  const handleReportClick = (property) => {
    setReportingProperty(property);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setReportingProperty(null);
  };

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
      leftBtn: "Not Visisted",
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
      leftBtn: "Not Visisted",
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
      leftBtn: "Not Visisted",
      rightBtn: "Report",
      date: "12-Nov-2024 22:15",
      isAvailable: false,
    },
  ];

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
        {visitedApartments?.map((apartment, index) => (
          <ApartmentCard
            key={index}
            product={apartment}
            isAppointmentStatus={true}
            isVisitedTab={true}
            onReportClick={() => handleReportClick(apartment)}
          />
        ))}
      </div>
      <div style={{ marginTop: "70px" }}>
        <div className="agent-show-bottom-button">
          <button style={{ marginTop: "20px", fontSize: "14px" }}>
            Revisit Selected Properties
          </button>
        </div>
      </div>
      {isModalVisible && (
        <div className="modal_visited">
          <div className="modal-content_visited">
            <h3>Report this property</h3>
            <ul>
              <li>
                <input type="radio" />
                The property did not match the photographs
              </li>
              <li>
                <input type="radio" />
                The property is no longer available
              </li>
              <li>
                <input type="radio" />
                The information is incorrect
              </li>
              <li>
                <input type="radio" />
                The price is incorrect
              </li>
              <li>
                <input type="radio" />
                Others (please specify)
              </li>
            </ul>
            <div className="textAreaContainer">
              <textarea placeholder="Comments" />
            </div>
            <div className="reportBtnContainer">
              <button onClick={handleCloseModal}>Report</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Visited;
