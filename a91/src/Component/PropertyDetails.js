import React from "react";
import "../Style/PropertyDetails.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const PropertyDetails = () => {
  const placeHolderValue = [
    "No of Bedrooms*",
    "No of Bathrooms*",
    "No. of Car Parks*",
    "Type of furnishing",
    "Available for Rent/Sale",
    "Expected Sale Price",
    "Expected Rent",
    "Rental Deposit",
    "Maintenance - (incl. / excl.)",
    "Available from",
    "Current Status",
    "Viewing from",
    "Viewing Notice",
    "Viewing Slots",
    "Helpers Room (Yes/No)",
    "Balcony (Yes/No)",
    "Additional Areas (Multi-Select)",
    "Appliances (multi-select)",
    "Garden (Yes/No)",
    "Pets Allowed (Yes/No)",
    "Renovated (Yes/No)",
    "Main Door Facin",
    "Age of property",
    "Geo Location",
    "Active (Y/N)",
  ];
  return (
    <div className="property-main-container">
      <div className="property-all-options">
        <div className="pro-1">
          <input
            placeholder="PID Number (system generated)"
            className="pro-input"
          />
        </div>
        <div className="pro-2">
          <input placeholder="City*" required className="pro-input" />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input placeholder="Developer*" required className="pro-input" />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input placeholder="Project Name*" required className="pro-input" />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-1">
          <input placeholder="Pincode* (from records)" className="pro-input" />
        </div>
        <div className="pro-2">
          <input placeholder="Locality" required className="pro-input" />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-1">
          <input placeholder="Address* (from records)" className="pro-input" />
        </div>
        <div className="pro-2">
          <input
            placeholder="Type of Property*"
            required
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-2">
          <input
            placeholder="Select Tower/Phase/Building*"
            required
            className="pro-input"
          />
          <RiArrowDropDownLine style={{ fontSize: "50px" }} />
        </div>
        <div className="pro-1">
          <input placeholder="Floor Number*" className="pro-input" />
        </div>
        <div className="pro-1">
          <input placeholder="Unit Number*" className="pro-input" />
        </div>
        <div className="pro-1">
          <input placeholder="Nick Name*" className="pro-input" />
        </div>
        <div className="pro-3">
          <div className="pro-1" style={{ flex: 1 }}>
            <input placeholder="Land Size" className="pro-input" />
          </div>
          <div className="pro-2" style={{ width: "20%" }}>
            <input placeholder="sqft" required className="pro-input" />
            <RiArrowDropDownLine style={{ fontSize: "50px" }} />
          </div>
        </div>
        <div className="pro-3">
          <div className="pro-1" style={{ flex: 1 }}>
            <input
              placeholder="Builtup Size/Carpet Area*"
              className="pro-input"
            />
          </div>
          <div className="pro-2" style={{ width: "20%" }}>
            <input placeholder="sqft" required className="pro-input" />
            <RiArrowDropDownLine style={{ fontSize: "50px" }} />
          </div>
        </div>
        {placeHolderValue.map((value) => (
          <div className="pro-2">
            <input placeholder={value} required className="pro-input" />
            <RiArrowDropDownLine style={{ fontSize: "50px" }} />
          </div>
        ))}
      </div>
      <textarea
        placeholder="Add Description"
        className="property-text-area-1"
      ></textarea>
      <div className="bottom-btn-21">
        <div className="bottom-btn-21-1">Save as Draft</div>
        <div className="bottom-btn-21-2">Add Property Photos and Videos</div>
      </div>
    </div>
  );
};

export default PropertyDetails;
