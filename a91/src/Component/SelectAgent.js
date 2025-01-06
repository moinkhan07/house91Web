import React, { useState } from "react";
import "../Style/SelectAgent.css";
import { IoIosSearch } from "react-icons/io";
import primg from "../Asset/Home/primg.png";

const SelectAgent = () => {
  const agents = [
    {
      imageUrl: primg,
      name: "Shrestha Agarwal",
      consultationRent: "One month rent",
      consultationSale: "1% of sale value",
      operatingSince: "2019",
      noOfProperties: "999",
    },
    {
      imageUrl: primg,
      name: "Shrestha Agarwal",
      consultationRent: "One month rent",
      consultationSale: "1% of sale value",
      operatingSince: "2019",
      noOfProperties: "999",
    },
    {
      imageUrl: primg,
      name: "Shrestha Agarwal",
      consultationRent: "One month rent",
      consultationSale: "1% of sale value",
      operatingSince: "2019",
      noOfProperties: "999",
    },
    {
      imageUrl: primg,
      name: "Shrestha Agarwal",
      consultationRent: "One month rent",
      consultationSale: "1% of sale value",
      operatingSince: "2019",
      noOfProperties: "999",
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSelectAgentClick = () => {
    if (isChecked) {
      setIsModalVisible(true);
    } else {
      alert("Please select an agent before proceeding.");
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="select-main-container">
      <div className="select-search-div">
        <input placeholder="Search by Agent Name" />
        <div className="select-search-image">
          <IoIosSearch color="white" size={28} />
        </div>
      </div>

      <div className="select-agent-content">
        {agents.map((agent, index) => (
          <div className="select-agent-content-div" key={index}>
            <div>
              <img src={agent.imageUrl} alt="Agent" />
            </div>
            <div>
              <p
                style={{
                  color: "var(--primary)",
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: 5,
                }}
              >
                {agent.name}
              </p>
              <div>
                <p className="agent-p11">
                  Consultation(Rent) &nbsp; {`:${agent.consultationRent}`}
                </p>
                <p className="agent-p11">
                  Consultation(Sale) &nbsp;&nbsp; {`:${agent.consultationSale}`}
                </p>
                <p className="agent-p11">
                  Operating Since &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                  {`:${agent.operatingSince}`}
                </p>
                <p className="agent-p11">
                  No. Of Properties &nbsp;&nbsp;&nbsp;&nbsp;
                  {`:${agent.noOfProperties}`}
                </p>
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                className="circle-checkbox"
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "70px" }}>
        <div className="agent-show-bottom-button">
          <button>Show more</button>
        </div>
        <div className="agent-show-bottom-button">
          <button onClick={handleSelectAgentClick}>
            Select Executive Agent
          </button>
        </div>
      </div>

      {isModalVisible && (
        <div className="modal_agent">
          <div className="modal-content_agent">
            <h2>
              You are choosing{" "}
              <span style={{ color: "var(--primary)" }}>Rammu</span> to be your
              representative:
            </h2>
            <h3>By selecting an Exclusive Agent:</h3>
            <ul>
              <li>This Agent shall be your one point of contact.</li>
              <li>
                This Agent shall network within the platform of A91.in and their
                network to find the best suitable property for you.
              </li>
              <li>
                This Agent shall coordinate your viewings of all properties.
              </li>
              <li>
                This Agent shall represent your interest in the negotiation of
                the transaction.
              </li>
            </ul>
            <h3>Please Note:</h3>
            <ul>
              <li>
                There is a consultation fee payable to the agent once you
                finalise the property.
              </li>
              <li>
                We request that you do not deal with another agent or owner once
                the property is viewed through an agent.
              </li>
              <li>
                Your contact details will be shared with the agent and the agent
                details have been shared with you on your mail.
              </li>
              <li>
                You can change your agent at any time through Agent tab for any
                new properties not viewed through the previous agent(s).
              </li>
            </ul>
            <div className="acceptBtnContainer">
              <button onClick={handleCloseModal}>Accept and Proceed</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectAgent;
