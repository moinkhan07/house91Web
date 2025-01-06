import React from "react";
import "../Style/Footer.css";
import ando from "../Asset/Footer/andro.png"
import appl from "../Asset/Footer/appl.png"
import faceb from "../Asset/Footer/faceb.png"
import insta from "../Asset/Footer/insta.png"
import twitt from "../Asset/Footer/twitt.png"
import youtu from "../Asset/Footer/youtu.png"
const Footer1 = () => {
  return (
    <>
    <div className="footer-first-line"></div>
    <div className="footer-2-line"></div>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>COMPANY</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li>Terms & Conditions</li>
            <li>Policy of Use</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>NETWORK SITES</h4>
          <ul>
            <li>Square Yards Canada</li>
            <li>Square Yards UAE</li>
            <li>Square Yards Australia</li>
            <li>Urban Money</li>
            <li>Urban Money Australia</li>
            <li>Interior Company</li>
            <li>Prop VR</li>
            <li>Props AMC</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>SOLUTIONS</h4>
          <ul>
            <li>Square Connect</li>
            <li>Prime Connect</li>
            <li>Smart Agent</li>
            <li>Women Home Buyers</li>
            <li>Rent Agreement</li>
            <li>Escrow</li>
            <li>Book Property Online</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>RESOURCES</h4>
          <ul>
            <li>Data Intelligence</li>
            <li>Square Yards Reviews</li>
            <li>Real Estate Guide</li>
            <li>Cities Real Estate</li>
            <li>Awards & Recognition</li>
            <li>Media Coverage</li>
            <li>Glossary</li>
          </ul>
        </div>
      </div>
  <div className="border-footer"></div>
      <div className="footer-info">
        <div className="about-us">
          <h4>ABOUT US</h4>
          <p style={{fontSize:"13px"}}>
            House91 is India’s largest integrated real estate marketplace, with
            category leadership presence across multiple touchpoints of consumer
            home ownership journey. With Urbanisation and rising disposable
            incomes as the core theme, Square Yards, with 8mn+ monthly traffic
            and ~USD 5bn+ GTV, is the largest and asset light proxy to the
            growing residential demand story of India. One of the few Indian
            start ups to taste global success with presence in 100+ cities
            across 9 countries, Square Yards is at the forefront of tech
            adoption in the sector, with multiple patents across VR/AI domains.
          </p>
        </div>

        <div className="connect-with-us">
          <h4>CONNECT WITH US</h4>
          <div style={{marginTop:"20px"}}>
          <p style={{margin:"0px"}}>Write to us at</p>
          <p style={{margin:"0px"}}>connect@House91.com</p>
          </div>
          <div style={{marginTop:"20px"}}>
          <p style={{margin:"0px"}}>Existing Clients</p>
          <p style={{margin:"0px"}}>customercare@House91.com</p>
          </div>
          <div style={{marginTop:"20px"}}>
          <p style={{margin:"0px"}}>Job/Career Related</p>
          <p style={{margin:"0px"}}>careers@House91.com</p>
          </div>
        </div>
        <div className="social-experiance-section">
          <div className="experience-app">
            <h4>EXPERIENCE House91 APP ON MOBILE</h4>
            <div className="app-icons">
               <div className="footer-icon"><img src={ando}/></div>
               <div className="footer-icon"><img src={appl}/></div>
            </div>
          </div>

          <div className="social-media">
            <h4>KEEP IN TOUCH</h4>
            <div className="social-icons">
            <div className="footer-icon"><img src={youtu}/></div>
            <div className="footer-icon"><img src={insta}/></div>
            <div className="footer-icon"><img src={faceb}/></div>
            <div className="footer-icon"><img src={twitt}/></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-footer"></div>
      <div className="footer-bottom">
        <p>© 2024 www.House91.com. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
};

export default Footer1;
