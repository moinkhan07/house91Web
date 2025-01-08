import React, { useState, useEffect } from "react";
import "../Style/Detailpage.css";
import SelectAgent from "./SelectAgent";
import YetToVisit from "./YetToVisit";
import ScheduleAppointment from "./ScheduleAppoinment";
import Appointment from "./Appointment";
import Visited from "./Visited";
import CompareApartments from "./CompareApartments";
import { GrCompare } from "react-icons/gr";
import { MdOutlineDateRange } from "react-icons/md";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { TbHomeFilled } from "react-icons/tb";
import { GiSettingsKnobs } from "react-icons/gi";
import repor from "../Asset/Navbar/repor.png";

const DetailPage = () => {
  const isMobile = window.innerWidth <= 768;
  // State to track the active option and components to display
  const [activeOption, setActiveOption] = useState("Select an agent");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Component rendering based on the active option
  const renderContent = () => {
    switch (activeOption) {
      case "Select an agent":
        return <SelectAgent />;
      case "Yet to visit":
        return <YetToVisit />;
      case "Schedule an Appointment":
        return <ScheduleAppointment />;
      case "Appointment Status":
        return <Appointment />;
      case "Visited":
        return <Visited />;
      case "Compare":
        return <CompareApartments />;
      default:
        return null;
    }
  };

  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <div className="detail-page-main-container">
      <div className="nav-down-part">
        <div className="nav-down-part-content">
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
              <div>
                <GiSettingsKnobs
                  size={!isMobile ? 32 : 24}
                  style={{
                    transform: "rotate(90deg)",
                  }}
                />
              </div>
              <p>Filter</p>
            </div>
            <div className="divide-line-11"></div>
            <div className="budget-div">
              <div>
                <p>₹ Budget</p>
              </div>
              <div className="div-min-max">
                <div className="nav-min">
                  <input placeholder="Min" />
                </div>

                <p>To</p>

                <div className="nav-min">
                  <input placeholder="Max" />
                </div>
              </div>
            </div>
            <div className="divide-line-11"></div>
            <div id="detail-image-11">
              <div onClick={() => handleClick(0)}>
                <TbHomeFilled
                  size={16}
                  style={{
                    color: active === 0 ? "var(--primary)" : "black",
                  }}
                />
                <p
                  style={{
                    color: active === 0 ? "var(--primary)" : "black",
                    fontWeight: active === 0 ? "bold" : "",
                  }}
                >
                  1BHK
                </p>
              </div>
              <div onClick={() => handleClick(1)}>
                <TbHomeFilled
                  size={20}
                  style={{
                    color: active === 1 ? "var(--primary)" : "black",
                  }}
                />
                <p
                  style={{
                    color: active === 1 ? "var(--primary)" : "black",
                    fontWeight: active === 1 ? "bold" : "",
                  }}
                >
                  2BHK
                </p>
              </div>
              <div onClick={() => handleClick(2)}>
                <TbHomeFilled
                  size={24}
                  style={{
                    color: active === 2 ? "var(--primary)" : "black",
                  }}
                />
                <p
                  style={{
                    color: active === 2 ? "var(--primary)" : "black",
                    fontWeight: active === 2 ? "bold" : "",
                  }}
                >
                  3BHK
                </p>
              </div>
              <div onClick={() => handleClick(3)}>
                <TbHomeFilled
                  size={28}
                  style={{
                    color: active === 3 ? "var(--primary)" : "black",
                  }}
                />
                <p
                  style={{
                    color: active === 3 ? "var(--primary)" : "black",
                    fontWeight: active === 3 ? "bold" : "",
                  }}
                >
                  4BHK
                </p>
              </div>
              <div onClick={() => handleClick(4)}>
                <TbHomeFilled
                  size={32}
                  style={{
                    color: active === 4 ? "var(--primary)" : "black",
                  }}
                />
                <p
                  style={{
                    color: active === 4 ? "var(--primary)" : "black",
                    fontWeight: active === 4 ? "bold" : "",
                  }}
                >
                  5BHK
                </p>
              </div>
            </div>

            <div className="divide-line-11"></div>
            <div id="like-dis-div">
              <div>
                <BiSolidLike size={24} />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`1000`}</p>
              </div>
              <div>
                <BiSolidDislike size={24} />
                <p style={{ fontSize: "8px", fontWeight: "600" }}>{`500`}</p>
              </div>
            </div>
            <div className="divide-line-11"></div>
            <div
              onClick={() => {
                handleClick(5);
                setActiveOption(
                  activeOption === "Select an agent"
                    ? "Compare"
                    : "Select an agent"
                );
              }}
            >
              <GrCompare
                size={30}
                style={{
                  color:
                    active === 5 && activeOption == "Compare"
                      ? "var(--primary)"
                      : "black",
                }}
              />
            </div>
            <div className="divide-line-11"></div>
            <div onClick={() => handleClick(6)}>
              <MdOutlineDateRange
                size={30}
                style={{
                  color: active === 6 ? "var(--primary)" : "black",
                }}
              />
            </div>
          </div>
        </div>

        <div className="repor-agent">
          <div>
            <img src={repor} />
          </div>
          <p>Report an agent</p>
        </div>
      </div>
      {active !== 5 && (
        <div className="all-option-div">
          <div className="options-container-2">
            <div
              key={"Electricity Bill"}
              className={`option ${
                activeOption === "Select an agent" ? "active" : ""
              }`}
              onClick={() => setActiveOption("Select an agent")}
            >
              <p>Select an agent</p>
            </div>
            <div className="vertical-line"></div>
            <div
              key={"Property Details"}
              className={`option ${
                activeOption === "Yet to visit" ? "active" : ""
              }`}
              onClick={() => setActiveOption("Yet to visit")}
            >
              <p>Yet to visit</p>
            </div>
            <div className="vertical-line"></div>
            <div
              key={"Photographs"}
              className={`option ${
                activeOption === "Schedule an Appointment" ? "active" : ""
              }`}
              onClick={() => setActiveOption("Schedule an Appointment")}
            >
              <p>Schedule an Appointment</p>
            </div>
            <div className="vertical-line"></div>
            <div
              key={"Select Agent"}
              className={`option ${
                activeOption === "Appointment Status" ? "active" : ""
              }`}
              onClick={() => setActiveOption("Appointment Status")}
            >
              <p>Appointment Status</p>
            </div>
            <div className="vertical-line"></div>
            <div
              key={"Select Agent"}
              className={`option ${activeOption === "Visited" ? "active" : ""}`}
              onClick={() => setActiveOption("Visited")}
              style={{
                borderTopRightRadius: "40px",
                borderBottomRightRadius: "40px",
              }}
            >
              <p> Visited</p>
            </div>
          </div>
        </div>
      )}

      <div className="content-container">{renderContent()}</div>
    </div>
  );
};

export default DetailPage;
