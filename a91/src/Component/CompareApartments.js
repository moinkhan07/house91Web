import React from "react";
import "../Style/CompareApartments.css";
import h2 from "../Asset/Home/h1.png";

const CompareApartments = () => {
  const properties = [
    {
      image: h2,
      name: "Mana Dale",
      rent: "Rs. 230,000/-",
      sale: "Not For Sale!",
      bedrooms: "3 BHK",
      size: "3700 Sqft",
      distance: "14.8 Kms away",
    },
    {
      image: h2,
      name: "Urbanest Elite 35",
      rent: "Rs. 230,000/-",
      sale: "Not For Sale!",
      bedrooms: "3 BHK",
      size: "3700 Sqft",
      distance: "14.8 Kms away",
    },
    {
      image: h2,
      name: "Sarang by Sumadhura",
      rent: "Rs. 230,000/-",
      sale: "Not For Sale!",
      bedrooms: "3 BHK",
      size: "3700 Sqft",
      distance: "14.8 Kms away",
    },
  ];

  const options = [
    "Name of the society",
    "Rent",
    "Sale",
    "No of Bedrooms",
    "Buildup Size",
    "Distance from me",
    "Land Size",
    "No of Bathrooms",
    "Car Parks",
    "Pets Allowed",
    "Available From",
    "Deposit Amount",
    "Additional Rooms",
    "Helpers Room",
    "Type of Furnishing",
    "Type of Property Floor",
    "Current Status",
    "Facing",
    "Viewing Notice",
    "Age of Property",
    "Garden",
    "Balcony",
    "Appliances",
  ];

  return (
    <div className="compare-apartments-container">
      <h2>Comparison Of Selected Properties</h2>
      <div className="comparison-grid">
        <div className="options-list">
          {options.map((option, index) => (
            <p key={index} className="option-item">
              {option}:
            </p>
          ))}
        </div>

        {/* Property Cards (Right Side) */}
        <div className="property-comparison">
          {properties.map((property, index) => (
            <div key={index} className="property-card">
              <h2>Property {index + 1}</h2>
              <div className="property-image">
                <img src={property.image} alt={property.name} />
              </div>
              <div className="property-details">
                <p>
                  <strong>{options[0]} </strong>
                  {property.name}
                </p>
                <p>
                  <strong>{options[1]} </strong>
                  {property.rent}
                </p>
                <p>
                  <strong>{options[2]} </strong>
                  {property.sale}
                </p>
                <p>
                  <strong>{options[3]} </strong>
                  {property.bedrooms}
                </p>
                <p>
                  <strong>{options[4]} </strong>
                  {property.size}
                </p>
                <p>
                  <strong>{options[5]} </strong>
                  {property.distance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompareApartments;
