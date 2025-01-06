// import React from "react";
// import "../Style/SearchModel.css";
// import { BsArrowsFullscreen } from "react-icons/bs";
// import { MdCurrencyRupee } from "react-icons/md";

// const SearchModel = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal-container" onClick={(e) => e.stopPropagation()}>
//         <h2 style={{ marginBottom: "20px" }}>Search</h2>
//         <div className="search-form">
//           <div className="row-first">
//             <div className="row-1">
//               <p>City</p>
//             </div>
//             <div className="vertical-line-21"></div>
//             <div className="row-2">
//               <p>Locality</p>
//             </div>
//           </div>
//           <div className="row-first">
//             <div className="row-1">
//               <p>Own/Rent</p>
//             </div>
//             <div className="vertical-line-21"></div>
//             <div className="row-2">
//               <p>Purpose</p>
//             </div>
//           </div>
//           <div className="row-second">
//             <div className="budget-div-1">
//               <div className="budget-rupee-icon">
//                 <MdCurrencyRupee size={24} style={{ marginRight: "10px" }} />
//               </div>
//               <div className="budget-div-2">
//                 <div className="div-min-max-1">
//                   <div className="nav-min-1">Min</div>
//                   <p style={{ fontSize: "12px" }}>To</p>
//                   <div className="nav-min-1">Max</div>
//                 </div>
//                 <div>
//                   <p style={{ fontSize: "13px" }}> Budget</p>
//                 </div>
//               </div>
//             </div>
//             <div className="budget-div-1">
//               <div className="budget-rupee-icon">
//                 <BsArrowsFullscreen size={20} style={{ marginRight: "10px" }} />
//               </div>
//               <div className="budget-div-2">
//                 <div className="div-min-max-1">
//                   <div className="nav-min-1">Min</div>
//                   <p style={{ fontSize: "12px" }}>To</p>
//                   <div className="nav-min-1">Max</div>
//                 </div>
//                 <div>
//                   <p style={{ fontSize: "13px" }}>Size</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="row-first">
//             <div className="row-1">
//               <p>No of Bedroom</p>
//             </div>
//             <div className="vertical-line-21"></div>
//             <div className="row-2">
//               <p>No of Bathroom</p>
//             </div>
//           </div>
//           <div className="search-pid-number">
//             <label>Search by PID Number</label>
//             <input type="text" placeholder="9999999" />
//           </div>
//           <div className="search-pid-number">
//             <label>Name the Search</label>
//             <input type="text" placeholder="3BHK to Buy in Bengalore" />
//           </div>
//           <div className="buttons">
//             <button className="publish-btn">Publish Requirement</button>
//             <button className="search-btn">Search</button>
//           </div>
//         </div>
//         <button className="close-btn" onClick={onClose}>
//           &times;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchModel;

import React, { useState } from "react";
import "../Style/SearchModel.css";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdCurrencyRupee } from "react-icons/md";

const SearchModel = ({ isOpen, onClose }) => {
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showLocalityDropdown, setShowLocalityDropdown] = useState(false);
  const [showOwnRentDropdown, setShowOwnRentDropdown] = useState(false);
  const [showPurposeDropdown, setShowPurposeDropdown] = useState(false);
  const [showBedroomDropdown, setShowBedroomDropdown] = useState(false);
  const [showBathroomDropdown, setShowBathroomDropdown] = useState(false);

  const toggleDropdown = (dropdown) => {
    switch (dropdown) {
      case "city":
        setShowCityDropdown(!showCityDropdown);
        break;
      case "locality":
        setShowLocalityDropdown(!showLocalityDropdown);
        break;
      case "ownRent":
        setShowOwnRentDropdown(!showOwnRentDropdown);
        break;
      case "purpose":
        setShowPurposeDropdown(!showPurposeDropdown);
        break;
      case "bedroom":
        setShowBedroomDropdown(!showBedroomDropdown);
        break;
      case "bathroom":
        setShowBathroomDropdown(!showBathroomDropdown);
        break;
      default:
        break;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h2 style={{ marginBottom: "20px" }}>Search</h2>
        <div className="search-form">
          <div className="row-first">
            <div className="row-1">
              <p onClick={() => toggleDropdown("city")}>City</p>
              {showCityDropdown && (
                <div className="dropdown-options">
                  <p>Mumbai</p>
                  <p>Delhi</p>
                  <p>Kolkata</p>
                  <p>Bengaluru</p>
                </div>
              )}
            </div>
            <div className="vertical-line-21"></div>
            <div className="row-2">
              <p onClick={() => toggleDropdown("locality")}>Locality</p>
              {showLocalityDropdown && (
                <div className="dropdown-options">
                  <p>Locality 1</p>
                  <p>Locality 2</p>
                  <p>Locality 3</p>
                </div>
              )}
            </div>
          </div>
          <div className="row-first">
            <div className="row-1">
              <p onClick={() => toggleDropdown("ownRent")}>Own/Rent</p>
              {showOwnRentDropdown && (
                <div className="dropdown-options">
                  <p>Own</p>
                  <p>Rent</p>
                </div>
              )}
            </div>
            <div className="vertical-line-21"></div>
            <div className="row-2">
              <p onClick={() => toggleDropdown("purpose")}>Purpose</p>
              {showPurposeDropdown && (
                <div className="dropdown-options">
                  <p>Residential</p>
                  <p>Commercial</p>
                  <p>Plot</p>
                </div>
              )}
            </div>
          </div>
          <div className="row-second">
            <div className="budget-div-1">
              <div className="budget-rupee-icon">
                <MdCurrencyRupee size={24} style={{ marginRight: "10px" }} />
              </div>
              <div className="budget-div-2">
                <div className="div-min-max-1">
                  <input type="text" className="input-text" placeholder="Min" />
                  <p style={{ fontSize: "14px", margin: "0 10px" }}>To</p>
                  <input type="text" className="input-text" placeholder="Max" />
                </div>
                <div>
                  <p style={{ fontSize: "13px" }}>Budget</p>
                </div>
              </div>
            </div>
            <div className="budget-div-1">
              <div className="budget-rupee-icon">
                <BsArrowsFullscreen size={20} style={{ marginRight: "10px" }} />
              </div>
              <div className="budget-div-2">
                <div className="div-min-max-1">
                  <input type="text" className="input-text" placeholder="Min" />
                  <p style={{ fontSize: "14px", margin: "0 10px" }}>To</p>
                  <input type="text" className="input-text" placeholder="Max" />
                </div>
                <div>
                  <p style={{ fontSize: "13px" }}>Size</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row-first">
            <div className="row-1">
              <p onClick={() => toggleDropdown("bedroom")}>No of Bedroom</p>
              {showBedroomDropdown && (
                <div className="dropdown-options">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4+</p>
                </div>
              )}
            </div>
            <div className="vertical-line-21"></div>
            <div className="row-2">
              <p onClick={() => toggleDropdown("bathroom")}>No of Bathroom</p>
              {showBathroomDropdown && (
                <div className="dropdown-options">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                  <p>4+</p>
                </div>
              )}
            </div>
          </div>
          <div className="search-pid-number">
            <label>Search by PID Number</label>
            <input type="text" placeholder="9999999" />
          </div>
          <div className="search-pid-number">
            <label>Name the Search</label>
            <input type="text" placeholder="3BHK to Buy in Bangalore" />
          </div>
          <div className="buttons">
            <button className="publish-btn">Publish Requirement</button>
            <button className="search-btn">Search</button>
          </div>
        </div>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default SearchModel;
