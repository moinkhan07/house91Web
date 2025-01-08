import React, { useState } from "react";
import "../Style/SelectAgent.css";
import { IoIosSearch } from "react-icons/io";
import primg from "../Asset/Home/primg.png";
import { FcManager } from "react-icons/fc";

const SelectAgent = () => {
  const agents = [
    {
      id: 1,
      imageUrl: primg,
      name: "Shrestha Agarwal",
      consultationRent: "One month rent",
      consultationSale: "1% of sale value",
      operatingSince: "2019",
      noOfProperties: "999",
    },
    {
      id: 2,
      imageUrl: primg,
      name: "Rammu Sharma",
      consultationRent: "One month rent",
      consultationSale: "1% of sale value",
      operatingSince: "2019",
      noOfProperties: "999",
    },
    {
      id: 3,
      imageUrl: primg,
      name: "Tom & Jerry",
      consultationRent: "One month rent",
      consultationSale: "1% of sale value",
      operatingSince: "2019",
      noOfProperties: "999",
    },
    {
      id: 4,
      imageUrl: primg,
      name: "Vikas Singh",
      consultationRent: "One month rent",
      consultationSale: "1% of sale value",
      operatingSince: "2019",
      noOfProperties: "999",
    },
  ];

  const [selectedAgent, setSelectedAgent] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCheckboxChange = (agentId) => {
    setSelectedAgent(agentId);
  };

  const handleSelectAgentClick = () => {
    if (selectedAgent) {
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
        {agents.map((agent) => (
          <div className="select-agent-content-div" key={agent.id}>
            <div className="select-agent-content-div_First">
              <FcManager
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div className="select-agent-content-div_Second">
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
              <div className="agent-info">
                <div className="agent-row">
                  <p className="agent-key">Consultation(Rent):</p>
                  <p className="agent-value">{agent.consultationRent}</p>
                </div>
                <div className="agent-row">
                  <p className="agent-key">Consultation(Sale):</p>
                  <p className="agent-value">{agent.consultationSale}</p>
                </div>
                <div className="agent-row">
                  <p className="agent-key">Operating Since:</p>
                  <p className="agent-value">{agent.operatingSince}</p>
                </div>
                <div className="agent-row">
                  <p className="agent-key">No. Of Properties:</p>
                  <p className="agent-value">{agent.noOfProperties}</p>
                </div>
              </div>
            </div>
            <div className="select-agent-content-div_Third">
              <input
                type="checkbox"
                className="circle-checkbox_2"
                checked={selectedAgent === agent.id}
                onChange={() => handleCheckboxChange(agent.id)}
                style={{
                  marginLeft: "auto",
                  display: "flex",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                }}
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
              <span style={{ color: "var(--primary)" }}>
                {agents.find((agent) => agent.id === selectedAgent)?.name}
              </span>{" "}
              to be your representative:
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
