// import React, { useState } from "react";
// import "../Style/FilterModal.css";
// import { FaArrowRightLong } from "react-icons/fa6";

// const FilterModal = () => {
//   const [propertyType, setPropertyType] = useState("");
//   const [showPropertyTypes, setShowPropertyTypes] = useState(false);
//   const [statusOfProperty, setStatusOfProperty] = useState(false);
//   const [typeOfFurnishing, setTypeOfFurnishing] = useState(false);
//   const [subOptions, setSubOptions] = useState({
//     Residential: {
//       Villa: false,
//       "Independent Bungalow": false,
//       Apartment: false,
//       Penthouse: false,
//     },
//     Commercial: {
//       Office: false,
//       Shop: false,
//     },
//     Plot: {
//       "Residential Plot": false,
//       "Commercial Plot": false,
//     },
//   });

//   const handleSubOptionChange = (type, subOption) => {
//     setSubOptions((prev) => ({
//       ...prev,
//       [type]: {
//         ...prev[type],
//         [subOption]: !prev[type][subOption],
//       },
//     }));
//   };

//   const handlePropertyTypeClick = () => {
//     setShowPropertyTypes((prev) => !prev);
//     setPropertyType("");
//   };

//   const handleStatusPropertyClick = () => {
//     setStatusOfProperty((prev) => !prev);
//   };

//   const handleTypeOfFurnishingClick = () => {
//     setTypeOfFurnishing((prev) => !prev);
//   };

//   return (
//     <div className="filter-modal">
//       <h2>Advance Filter</h2>
//       <div className="filter-options">
//         <div className="filter-group">
//           <div className="sort-options">
//             <span>Sort</span>
//             <FaArrowRightLong />
//             <span>Price</span>
//             <div className="vertical-line-fresh"></div>
//             <span>Size</span>
//             <div className="vertical-line-fresh"></div>
//             <span>Distance from Me</span>
//           </div>
//           <label className="save-preference">
//             <input type="checkbox" />
//             Save Sort Preference
//           </label>
//         </div>

//         <div className="typeOfProperty">
//           <div className="typeOfPropertyDiv">
//             <p onClick={handlePropertyTypeClick} className="clickable-heading">
//               Type of Property
//             </p>

//             {showPropertyTypes && (
//               <div className="property-types">
//                 {["Residential", "Commercial", "Plot"].map((type) => (
//                   <div key={type}>
//                     <label>
//                       <input
//                         type="radio"
//                         name="propertyType"
//                         value={type}
//                         checked={propertyType === type}
//                         onChange={(e) => setPropertyType(e.target.value)}
//                       />
//                       {type}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {propertyType && subOptions[propertyType] && (
//               <div className="sub-options">
//                 {Object.keys(subOptions[propertyType]).map((subOption) => (
//                   <div key={subOption}>
//                     <label>
//                       <input
//                         type="checkbox"
//                         checked={subOptions[propertyType][subOption]}
//                         onChange={() =>
//                           handleSubOptionChange(propertyType, subOption)
//                         }
//                       />
//                       {subOption}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//           <div className="vertical-line-fresh"></div>
//           <div className="typeOfPropertyDiv">
//             <p onClick={handleStatusPropertyClick}>Status of Property</p>
//             {statusOfProperty && (
//               <div className="property-types" style={{ left: "33%" }}>
//                 {[
//                   "Vaccant",
//                   "Under Construction",
//                   "Under Rennovation",
//                   "Occupied",
//                 ].map((type) => (
//                   <div key={type}>
//                     <label>
//                       <input
//                         type="radio"
//                         name="propertyType"
//                         value={type}
//                         checked={propertyType === type}
//                         onChange={(e) => setPropertyType(e.target.value)}
//                       />
//                       {type}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//           <div className="vertical-line-fresh"></div>
//           <div className="typeOfPropertyDiv">
//             <p onClick={handleTypeOfFurnishingClick}>Type of Furnishing</p>
//             {typeOfFurnishing && (
//               <div className="property-types" style={{ left: "66%" }}>
//                 {[
//                   "Unfurnished",
//                   "Semi-Furnished",
//                   "Partly Furnished",
//                   "Fully Furnished",
//                 ].map((type) => (
//                   <div key={type}>
//                     <label>
//                       <input
//                         type="radio"
//                         name="propertyType"
//                         value={type}
//                         checked={propertyType === type}
//                         onChange={(e) => setPropertyType(e.target.value)}
//                       />
//                       {type}
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="applyFilterBtnContainer">
//         <button className="applyFilterBtn">Apply</button>
//       </div>
//     </div>
//   );
// };

// export default FilterModal;
import React, { useState } from "react";
import "../Style/FilterModal.css";
import { FaArrowRightLong } from "react-icons/fa6";

const FilterModal = () => {
  const [propertyType, setPropertyType] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown
  const [subOptions, setSubOptions] = useState({
    Residential: {
      Villa: false,
      "Independent Bungalow": false,
      Apartment: false,
      Penthouse: false,
    },
    Commercial: {
      Office: false,
      Shop: false,
    },
    Plot: {
      "Residential Plot": false,
      "Commercial Plot": false,
    },
  });

  const handleSubOptionChange = (type, subOption) => {
    setSubOptions((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [subOption]: !prev[type][subOption],
      },
    }));
  };

  const handleDropdownClick = (dropdown) => {
    // If a new dropdown is clicked, close any open dropdown and reset suboptions
    if (openDropdown === dropdown) {
      setOpenDropdown(null); // Close current dropdown
    } else {
      setOpenDropdown(dropdown); // Open the new dropdown
      setPropertyType(""); // Reset property type to close any suboptions
    }
  };

  return (
    <div className="filter-modal">
      <h2>Advance Filter</h2>
      <div className="filter-options">
        <div className="filter-group">
          <div className="sort-options">
            <span>Sort</span>
            <FaArrowRightLong />
            <span>Price</span>
            <div className="vertical-line-fresh"></div>
            <span>Size</span>
            <div className="vertical-line-fresh"></div>
            <span>Distance from Me</span>
          </div>
          <label className="save-preference">
            <input type="checkbox" />
            Save Sort Preference
          </label>
        </div>

        <div className="typeOfProperty">
          <div className="typeOfPropertyDiv">
            <p
              onClick={() => handleDropdownClick("propertyType")}
              className="clickable-heading"
            >
              Type of Property
            </p>

            {openDropdown === "propertyType" && (
              <div className="property-types">
                {["Residential", "Commercial", "Plot"].map((type) => (
                  <div key={type}>
                    <label>
                      <input
                        type="radio"
                        name="propertyType"
                        value={type}
                        checked={propertyType === type}
                        onChange={(e) => setPropertyType(e.target.value)}
                      />
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            )}

            {propertyType && subOptions[propertyType] && (
              <div className="sub-options">
                {Object.keys(subOptions[propertyType]).map((subOption) => (
                  <div key={subOption}>
                    <label>
                      <input
                        type="checkbox"
                        checked={subOptions[propertyType][subOption]}
                        onChange={() =>
                          handleSubOptionChange(propertyType, subOption)
                        }
                      />
                      {subOption}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="vertical-line-fresh"></div>
          <div className="typeOfPropertyDiv">
            <p onClick={() => handleDropdownClick("statusOfProperty")}>
              Status of Property
            </p>
            {openDropdown === "statusOfProperty" && (
              <div className="property-types" style={{ left: "33%" }}>
                {[
                  "Vaccant",
                  "Under Construction",
                  "Under Rennovation",
                  "Occupied",
                ].map((type) => (
                  <div key={type}>
                    <label>
                      <input
                        type="radio"
                        name="propertyType"
                        value={type}
                        checked={propertyType === type}
                        onChange={(e) => setPropertyType(e.target.value)}
                      />
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="vertical-line-fresh"></div>
          <div className="typeOfPropertyDiv">
            <p onClick={() => handleDropdownClick("typeOfFurnishing")}>
              Type of Furnishing
            </p>
            {openDropdown === "typeOfFurnishing" && (
              <div className="property-types" style={{ left: "66%" }}>
                {[
                  "Unfurnished",
                  "Semi-Furnished",
                  "Partly Furnished",
                  "Fully Furnished",
                ].map((type) => (
                  <div key={type}>
                    <label>
                      <input
                        type="radio"
                        name="propertyType"
                        value={type}
                        checked={propertyType === type}
                        onChange={(e) => setPropertyType(e.target.value)}
                      />
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="applyFilterBtnContainer">
        <button className="applyFilterBtn">Apply</button>
      </div>
    </div>
  );
};

export default FilterModal;
