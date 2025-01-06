import React,{useState} from "react";
import "../Style/ElectricityBill.css"
import { BiSearchAlt } from "react-icons/bi";

const ElectricityBill = ()=>{
    const [bill,setBill] = useState("[]");

      
    return(
        <div className="electricity-main-container">
             <p className="elect-p">Enter electricity bill details</p>
             <div className="elect-main-content">
                <div className="elect-main-content-1">
                    <p className="elect-main-content-1-p1">BESCOM</p>
                    <p className="elect-main-content-1-p2">5621044000</p>
                </div>
                <div className="elect-main-content-2">
                    <BiSearchAlt style={{fontSize:"40px"}}/>
                </div>
             </div>
             <div className="elect-main-content-details">
                 <p>Property found in database: Yes</p>
                 <p>Property Address: MS MRIDHVIKA PROPERTY MANAGEMENT PVT LTD NO 51/10/1,RICHMOND ROAD, BANGALORE -,KAR -576112</p>
             </div>
             <div className="bot-content-link">
                <p>Continue to Review Details and add Property</p>
             </div>
        </div>
    )
}

export default ElectricityBill;