import React from "react";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { IoVideocamOutline } from "react-icons/io5";
import { LuNotepadText } from "react-icons/lu";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaBed } from "react-icons/fa";
import { RxDimensions } from "react-icons/rx";
import { IoLocationSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const ApartmentCard = ({
  product,
  isAppointmentStatus,
  isVisitedTab,
  isSelected,
  onSelect,
  onReportClick,
}) => {
  return (
    <div
      className="product-details-div"
      style={{ backgroundColor: product?.bgColor }}
    >
      {!product?.isAvailable && (
        <div className="noLongerAvailable">
          <p>Property no longer available</p>
        </div>
      )}
      <div className="main-product-ima">
        <img src={product?.productImage} />
        {product?.isAvailable && (
          <div className="bookmark-checkbox-1">
            <input type="checkbox" checked={isSelected} onChange={onSelect} />
          </div>
        )}
      </div>
      <div className="first-div">
        <div className="first-div-left">
          <p
            style={{
              color: "var(--primary)",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {product?.productName}
          </p>
          <p>{product?.productAreaName}</p>
          <p
            style={{
              marginTop: "8px",
              color: "var(--primary)",
              fontWeight: "600",
            }}
          >{`Rent: Rs. ${product?.productRent}`}</p>
          <p
            style={{ margin: "7px 0px" }}
          >{`Sale: ${product?.productSaleType}`}</p>
          <div className="product-details-content-ss11">
            <div>
              <FaBed size={24} />
            </div>
            <p>{product?.productBedType}</p>
          </div>
          <div
            className="product-details-content-ss11"
            style={{ margin: "7px 0px" }}
          >
            <div>
              <RxDimensions size={24} />
            </div>
            <p>{product?.productArea}</p>
          </div>
        </div>
        <div className="first-div-right">
          <div>
            <BiSolidLike size={24} style={{ marginRight: "1rem" }} />
            <BiSolidDislike size={24} />
          </div>
          <div style={{ marginTop: "15px" }}>
            <IoVideocamOutline size={24} style={{ marginRight: "1rem" }} />
            <LuNotepadText size={24} />
          </div>
        </div>
      </div>
      <div
        className="product-details-content-ss11"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <IoLocationSharp size={24} style={{ marginRight: 12 }} />
          <p>{product?.productDistance}</p>
        </div>
        {!isAppointmentStatus && (
          <div>
            <IoShareSocialSharp size={24} />
          </div>
        )}
      </div>
      {isAppointmentStatus && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 5,
            marginBottom: !isVisitedTab ? 15 : 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <SlCalender size={24} style={{ marginRight: 12 }} />
            <p>{product?.date}</p>
          </div>
          <div>
            <IoShareSocialSharp size={24} />
          </div>
        </div>
      )}
      {isVisitedTab && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
            marginTop: 5,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <CiUser size={24} style={{ marginRight: 12 }} />
            <p style={{ marginRight: 10 }}>Agent: Rammu</p>
            <FaWhatsapp size={18} />
            <MdOutlineMail
              size={18}
              style={{ marginRight: 5, marginLeft: 5 }}
            />
            <IoCallOutline size={18} />
          </div>
        </div>
      )}
      {isAppointmentStatus && (
        <div className="appointmentVisitedContainer">
          <p style={{ fontSize: "16px", fontWeight: "600" }}>
            {product.appointmentStatus}
          </p>
          {product?.isAgentView && (
            <div>
              <button>{product?.leftBtn}</button>
              <button>{product?.rightBtn}</button>
            </div>
          )}
          {isVisitedTab && (
            <div>
              <button>{product?.leftBtn}</button>
              <button onClick={onReportClick}>{product.rightBtn}</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ApartmentCard;
