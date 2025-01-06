import React, { useState, useEffect } from "react";
import "../Style/Hfirst.css";
import { IoSearch } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import account from "../Asset/Navbar/account.png";
import logo from "../Asset/Navbar/logo.png";
import search from "../Asset/Navbar/search.png";
import h1 from "../Asset/Navbar/h1.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RiCloseLargeFill } from "react-icons/ri";
import filt from "../Asset/Navbar/filter.png";
import header from "../Asset/Home/header11.png";
import partner from "../Asset/Navbar/partner.png";
import "../Style/Home.css";
import { useNavigate } from "react-router-dom";
import h2 from "../Asset/Home/h1.png";

import Footer1 from "./Footer1";
import { BiSearchAlt } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";
import ApartmentCard from "./ApartmentCard";
import { FaChevronRight } from "react-icons/fa";
import SearchModel from "./SearchModel";
import FilterModal from "./FilterModal";
const Home = () => {
  const navigate = useNavigate();
  const [isAccount, setAccount] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showSignupComponent, setShowSignupComponent] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showPurposeDropdown, setShowPurposeDropdown] = useState(false);
  const [showPurposeDropdownHeader, setShowPurposeDropdownHeader] =
    useState(false);
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showCityDropdownHeader, setShowCityDropdownHeader] = useState(false);
  const [showOwnDropdown, setShowOwnDropdown] = useState(false);
  const [showOwnDropdownHeader, setShowOwnDropdownHeader] = useState(false);
  const [isPurRotate, setIsPurRotate] = useState(false);
  const [isPurRotateHeader, setIsPurRotateHeader] = useState(false);
  const [isOwnRotate, setIsOwnRotate] = useState(false);
  const [isOwnRotateHeader, setIsOwnRotateHeader] = useState(false);
  const [isCityRotate, setIsCityRotate] = useState(false);
  const [isCityRotateHeader, setIsCityRotateHeader] = useState(false);
  const [showFirstComponent, setShowFirstComponent] = useState(true);
  const [showOptionsInNavbar, setShowOptionsInNavbar] = useState(false);
  const [searchDropdown, setSearchDropdown] = useState(false);

  const isMobile = window.innerWidth <= 768;
  const [opacity, setOpacity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const toggleFilterModal = () => {
    setIsFilterModalOpen(!isFilterModalOpen);
  };

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleScrolls = () => {
      const scrollY = window.scrollY;
      const maxScroll = 200; // Total scroll range
      const offset = maxScroll * 0.9; // 50% of the scroll

      let newOpacity = 1;

      if (scrollY > offset) {
        // Start hiding after 50% of the scroll
        newOpacity = Math.max(1 - (scrollY - offset) / (maxScroll - offset), 0);
      }

      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScrolls);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const hfirstOption = document.querySelector(".h-main-img");
      const navbar = document.querySelector(".h-nav-content");

      if (hfirstOption && navbar) {
        const hfirstOffsetTop = hfirstOption.offsetTop;
        const navbarHeight = navbar.offsetHeight;

        if (scrollPosition + navbarHeight >= hfirstOffsetTop) {
          setShowOptionsInNavbar(true);
        } else {
          setShowOptionsInNavbar(false);
        }
      }

      setShowFirstComponent(scrollPosition === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCityDropdown = () => {
    setShowCityDropdown(!showCityDropdown);
    setIsCityRotate(!isCityRotate);
  };

  const handleCityDropdownHeader = () => {
    setShowCityDropdownHeader(!showCityDropdownHeader);
    setIsCityRotateHeader(!isCityRotateHeader);
  };
  const handleAccountOption = () => {
    setAccount(!isAccount);
  };
  const handleLoginClick = () => {
    setShowLogin(!showLogin);
    setAccount(false);
  };
  const closeSignupComponent = () => {
    setShowSignupComponent(false);
  };

  const closeLoginComponent = () => {
    setShowLogin(false);
  };
  const handleLoginForm = () => {
    console.log("handleLoginForm", showLogin);
    console.log("handleLoginForm", showSignupComponent);
    setShowSignupComponent(false);

    setShowLogin(true);
  };
  const handleSignupForm = () => {
    console.log("handleSignupForm", showLogin);
    console.log("handleSignupForm", showSignupComponent);
    setShowSignupComponent(true);
    setAccount(false);
  };
  const handlePurposeDropdown = () => {
    setShowPurposeDropdown(!showPurposeDropdown);
    setIsPurRotate(!isPurRotate);
  };
  const handlePurposeDropdownHeader = () => {
    setShowPurposeDropdownHeader(!showPurposeDropdownHeader);
    setIsPurRotateHeader(!isPurRotateHeader);
  };
  const handleOwnDropdown = () => {
    setShowOwnDropdown(!showOwnDropdown);
    setIsOwnRotate(!isOwnRotate);
  };
  const handleOwnDropdownHeader = () => {
    setShowOwnDropdownHeader(!showOwnDropdownHeader);
    setIsOwnRotateHeader(!isOwnRotateHeader);
  };
  const handleSearchDropdown = () => {
    setSearchDropdown(!searchDropdown);
  };
  const goToDetailPage = () => {
    setAccount(false);
    navigate("/detailpage");
  };
  const goToPropertyPage = () => {
    setAccount(false);
    navigate("/property");
  };
  const products = [];
  for (let r = 0; r < 6; r++) {
    products.push({
      productImage: h2,
      productName: "Residential",
      productAreaName: "Locality",
      productRent: 20000,
      productBedType: "3BHK",
      productArea: "3700sqft",
      productSaleType: "not for sale",
      productDistance: "9.8 Km away",
      isAvailable: true,
    });
  }
  return (
    <div className="hfirst-main-container">
      <div className="h-nav-content">
        <div
          className="h-nav-content-1"
          style={{ flexDirection: isMobile ? "column" : "" }}
        >
          {!isMobile ? (
            <>
              <div className="h-logo-1" onClick={() => navigate("/")}>
                <img src={logo} alt="Logo" />
              </div>
              {showOptionsInNavbar && (
                <div className="nav-option-1">
                  <div className="nav-option-11">
                    <p className="font-incre">City</p>
                    <RiArrowDropDownLine
                      style={{
                        transform: isCityRotate
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: isCityRotate
                          ? "transform 0.5s ease"
                          : "transform 0.5s ease",
                        fontSize: "35px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                      onClick={handleCityDropdown}
                    />
                  </div>
                  <div className="nav-option-12">
                    <p className="font-incre">Own/Rent</p>
                    <RiArrowDropDownLine
                      style={{
                        transform: isOwnRotate
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: isOwnRotate
                          ? "transform 0.5s ease"
                          : "transform 0.5s ease",
                        fontSize: "35px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                      onClick={handleOwnDropdown}
                    />
                  </div>
                  <div className="nav-option-13">
                    <p className="font-incre">Purpose</p>
                    <RiArrowDropDownLine
                      style={{
                        transform: isPurRotate
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: isPurRotate
                          ? "transform 0.5s ease"
                          : "transform 0.5s ease",
                        fontSize: "35px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                      onClick={handlePurposeDropdown}
                    />
                  </div>
                </div>
              )}
              <div className="h-second-nav">
                <div
                  className="search-dropdown-main"
                  onClick={handleSearchDropdown}
                >
                  <BiSearchAlt size={35} />
                  {searchDropdown && (
                    <div className="search-dropdown-1">
                      <ul className="search-li-1">
                        <li
                          onClick={handleOpenModal}
                          style={{
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          New Search
                          <FaChevronRight
                            style={{ marginLeft: "5px", fontWeight: "bold" }}
                            size={12}
                          />
                        </li>

                        <li>
                          Saved Search{" "}
                          <FaChevronRight
                            style={{ marginLeft: "5px", fontWeight: "bold" }}
                            size={12}
                          />
                        </li>
                      </ul>
                    </div>
                  )}
                  <SearchModel
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                  />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/addproperty")}
                >
                  <AiFillHome size={35} />
                </div>
                <div>
                  <FaHandshake size={40} />
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleAccountOption()}
                >
                  <FaUser size={30} />
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "10px",
                }}
              >
                <div className="h-logo-1" onClick={() => navigate("/")}>
                  <img src={logo} alt="Logo" />
                </div>
                <div className="h-second-nav">
                  <div>
                    <img src={search} alt="Search" />
                  </div>
                  <div onClick={() => navigate("/addproperty")}>
                    <img src={h1} alt="H1" />
                  </div>
                  <div>
                    <img src={partner} alt="Partner" />
                  </div>
                  <div onClick={() => handleAccountOption()}>
                    <img src={account} alt="Account" />
                  </div>
                </div>
              </div>

              {showOptionsInNavbar && (
                <div className="nav-option-1">
                  <div className="nav-option-11">
                    <p className="font-incre">City</p>
                    <RiArrowDropDownLine
                      style={{
                        transform: isCityRotate
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: isCityRotate
                          ? "transform 0.5s ease"
                          : "transform 0.5s ease",
                        fontSize: "35px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                      onClick={handleCityDropdown}
                    />
                  </div>
                  <div className="nav-option-12">
                    <p className="font-incre">Own/Rent</p>
                    <RiArrowDropDownLine
                      style={{
                        transform: isOwnRotate
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: isOwnRotate
                          ? "transform 0.5s ease"
                          : "transform 0.5s ease",
                        fontSize: "35px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                      onClick={handleOwnDropdown}
                    />
                  </div>
                  <div className="nav-option-13">
                    <p className="font-incre">Purpose</p>
                    <RiArrowDropDownLine
                      style={{
                        transform: isPurRotate
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: isPurRotate
                          ? "transform 0.5s ease"
                          : "transform 0.5s ease",
                        fontSize: "35px",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                      onClick={handlePurposeDropdown}
                    />
                  </div>
                </div>
              )}
            </>
          )}

          {showCityDropdown && showOptionsInNavbar && (
            <div className="city-dropdown-12">
              <div>
                <p>Mumbai</p>
                <p>Delhi</p>
                <p>Kolkata</p>
                <p>Bengaluru</p>
                <p>Chennai</p>
                <p>Hyderabad</p>
              </div>
            </div>
          )}
          {showOwnDropdown && showOptionsInNavbar && (
            <div className="own-dropdown-12">
              <div>
                <p>Own</p>
                <p>Rent</p>
              </div>
            </div>
          )}
          {showPurposeDropdown && showOptionsInNavbar && (
            <div className="purpose-dropdown-12">
              <div>
                <p
                  onClick={() => {
                    setShowPurposeDropdown(false);
                    setIsPurRotate(!isPurRotate);
                    navigate("/homedesign");
                  }}
                >
                  Residential
                </p>
                <p
                  onClick={() => {
                    setShowPurposeDropdown(false);
                    setIsPurRotate(!isPurRotate);
                    navigate("/homedesignfirst");
                  }}
                >
                  Commercial
                </p>
                <p
                  onClick={() => {
                    setShowPurposeDropdown(false);
                    setIsPurRotate(!isPurRotate);
                    navigate("/homedesignsecond");
                  }}
                >
                  Plot
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {showOptionsInNavbar && (
        <div style={{ display: "flex", width: "85%", margin: "auto" }}>
          <div>
            <div>
              <img src={filt} />
            </div>
            <p>Filter</p>
          </div>
          <div
            className="divide-line-11"
            style={{ marginRight: "15px", marginLeft: "15px" }}
          ></div>
          <div className="budget-div">
            <div>
              <p>₹ Budget</p>
            </div>
            <div className="div-min-max">
              <div className="nav-min">Min</div>
              <p>To</p>
              <div className="nav-min">Max</div>
            </div>
          </div>
          <div className="divide-line-11" style={{ marginLeft: "15px" }}></div>
        </div>
      )}
      {isAccount && (
        <div className="account-details1">
          <p className="account-option" onClick={handleLoginClick}>
            Login
          </p>
          <p className="account-option" onClick={handleSignupForm}>
            Register as Individual
          </p>
          <p className="account-option" onClick={goToDetailPage}>
            Register as Channel Partner
          </p>
          <p className="account-option" onClick={goToPropertyPage}>
            Property
          </p>
        </div>
      )}
      {showLogin && (
        <>
          <div className="overlay"></div>
          <div className="login-container">
            <div className="register-container">
              <div className="regis-heading">
                <h1 style={{ textAlign: "center" }}>Login</h1>
                <RiCloseLargeFill
                  style={{ fontSize: "25px", cursor: "pointer" }}
                  onClick={closeLoginComponent}
                />
              </div>

              <form>
                <div className="login-input">
                  <div className="login-second-div">
                    <input
                      placeholder="Enter Phone Number / Email ID"
                      style={{ border: "none" }}
                    />
                  </div>
                  <div className="login-third-div">
                    <button>Send OTP</button>
                  </div>
                </div>
                <div className="login-input">
                  <div className="login-second-div">
                    <input placeholder="Enter Otp" style={{ border: "none" }} />
                  </div>
                  <div className="login-third-div">
                    <button>Verify OTP</button>
                  </div>
                </div>

                <div className="link-ff">
                  <Link className="link-forgot">Forgot Password..?</Link>
                </div>
                <div className="regis-input1">
                  <input type="checkbox" className="regi-inpu" />
                  <p>
                    By clicking you agree to{" "}
                    <Link className="p-link">Terms and Conditions</Link>
                  </p>
                </div>
                <button className="reg-btn1">Login</button>
              </form>
              <div className="las-footer33">
                <div>
                  <p style={{ fontSize: "14px" }}>Don't have an account?</p>
                  <Link
                    className="las-btn-44"
                    onClick={() => {
                      handleSignupForm();
                    }}
                  >
                    Register
                  </Link>
                </div>
                <Link className="register-link">
                  <div>
                    <p style={{ fontSize: "14px" }}>Continue with google</p>
                    <div>
                      <FcGoogle
                        style={{
                          borderRadius: "100px",
                          border: "1px solid black",
                          padding: "2px",
                          fontSize: "20px",
                        }}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>{" "}
            {/* Pass a callback to close after login */}
          </div>
        </>
      )}
      {showSignupComponent && (
        <>
          <div
            className="overlay1"
            onClick={() => setShowSignupComponent(false)}
          ></div>
          <div className="signup-component-container">
            <div className="register-container">
              <div className="regis-heading">
                <h1 style={{ textAlign: "center" }}>Register</h1>
                <RiCloseLargeFill
                  style={{ fontSize: "25px", cursor: "pointer" }}
                  onClick={closeSignupComponent}
                />
              </div>

              <form>
                <div className="regis-form-11">
                  <div className="regis-input">
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="regis-input">
                    <input type="text" placeholder="Last Name" />
                  </div>
                  <div className="regis-input">
                    <input type="email" placeholder="Email ID" />
                  </div>
                  <div className="regis-input">
                    <input type="number" placeholder="OTP*" />
                  </div>
                  <div className="regis-input">
                    <input type="number" placeholder="Phone Number" />
                  </div>
                  <div className="regis-input">
                    <input type="number" placeholder="OTP*" />
                  </div>
                </div>
                <div className="regis-input1">
                  <input type="checkbox" className="regi-inpu" />
                  <p>
                    By clicking you agree to{" "}
                    <Link className="p-link">Terms and Conditions</Link>
                  </p>
                </div>
                <Link to={"/accountindividualdashboard"}>
                  <button className="reg-btn1" onClick={closeSignupComponent}>
                    Register
                  </button>
                </Link>
              </form>

              <div className="las-footer33">
                <div>
                  <p>I have an account?</p>
                  <Link
                    className="las-btn-44"
                    onClick={() => {
                      closeSignupComponent();
                      handleLoginForm();
                    }}
                  >
                    Login
                  </Link>
                </div>
                <Link className="register-link">
                  <div>
                    <p>Register with Google</p>
                    <div>
                      <FcGoogle
                        style={{
                          borderRadius: "100px",
                          border: "1px solid black",
                          padding: "2px",
                          fontSize: "20px",
                        }}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
      <div
        style={{
          width: "100%",
          height: "auto",
          opacity: opacity,
          transition: "opacity 0.2s ease-out",
        }}
      >
        <div className="h-main-content">
          <p
            style={{
              fontSize: "22px",
              textAlign: "center",
              fontWeight: "600",
              marginTop: "105px",
              marginBottom: "20px",
            }}
          >
            Address In <span style={{ color: "var(--primary)" }}>India</span>
          </p>
          <div className="h-main-img">
            <img src={header} alt="Header" />
          </div>
        </div>
        <div className="hfirst-option">
          <div className="nav-option-15">
            {!isCityRotateHeader ? (
              <div className="nav-options-child-div">
                <p
                  style={{
                    fontSize: isMobile ? "16px" : "18px",
                    fontWeight: "600",
                  }}
                >
                  Which <span className="text-color-1">City</span> do you want
                  to be in?
                </p>
                <RiArrowDropDownLine
                  style={{
                    transform: isCityRotateHeader
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.5s ease",
                    fontSize: "35px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  onClick={handleCityDropdownHeader}
                />
              </div>
            ) : (
              <div className="nav-options-child-div">
                <input
                  className="city-input-1"
                  placeholder=" Which City do you want to be in?"
                />
                <RiArrowDropDownLine
                  style={{
                    transform: isCityRotateHeader
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                    transition: "transform 0.5s ease",
                    fontSize: "35px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  onClick={handleCityDropdownHeader}
                />
              </div>
            )}
            {showCityDropdownHeader && (
              <div className="city-dropdown-13">
                <div>
                  <p>Mumbai</p>
                  <p>Delhi</p>
                  <p>Kolkata</p>
                  <p>Bengaluru</p>
                  <p>Chennai</p>
                  <p>Hyderabad</p>
                </div>
              </div>
            )}
          </div>
          <div className="vertical-line"></div>
          <div className="nav-option-16">
            <div className="nav-options-child-div">
              <p style={{ fontSize: "18px", fontWeight: "600" }}>
                Do you want to <span className="text-color-1">Own</span> or{" "}
                <span className="text-color-1">Rent</span>?
              </p>
              <RiArrowDropDownLine
                style={{
                  transform: isOwnRotateHeader
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.5s ease",
                  fontSize: "35px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
                onClick={handleOwnDropdownHeader}
              />
            </div>
            {showOwnDropdownHeader && (
              <div className="own-dropdown-13">
                <div>
                  <p>Own</p>
                  <p>Rent</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="select-search-div-1">
          <p style={{ fontSize: "18px", fontWeight: "600" }}>
            What is the <span className="text-color-1">Purpose</span>?
          </p>
          <RiArrowDropDownLine
            style={{
              transform: isPurRotateHeader ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.5s ease",
              fontSize: "35px",
              fontWeight: "600",
              cursor: "pointer",
            }}
            onClick={handlePurposeDropdownHeader}
          />
          {showPurposeDropdownHeader && (
            <div className="purpose-dropdown-13">
              <div>
                <p
                  onClick={() => {
                    setShowPurposeDropdown(false);
                    setIsPurRotate(!isPurRotate);
                    navigate("/homedesign");
                  }}
                >
                  Residential
                </p>
                <p
                  onClick={() => {
                    setShowPurposeDropdown(false);
                    setIsPurRotate(!isPurRotate);
                    navigate("/homedesignfirst");
                  }}
                >
                  Commercial
                </p>
                <p
                  onClick={() => {
                    setShowPurposeDropdown(false);
                    setIsPurRotate(!isPurRotate);
                    navigate("/homedesignsecond");
                  }}
                >
                  Plot
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {showOptionsInNavbar && (
        <div className="home-container">
          <div
            style={{ display: "flex", width: "100%", margin: "auto" }}
            className="sticky-filter-1"
          >
            <div onClick={toggleFilterModal}>
              <div>
                <GiSettingsKnobs
                  size={!isMobile ? 35 : 24}
                  style={{
                    transform: "rotate(90deg)",
                  }}
                />
              </div>
              <p>Filter</p>
            </div>
            <div
              className="divide-line-11"
              style={{ marginRight: "15px", marginLeft: "15px" }}
            ></div>
            <div className="budget-div">
              <div>
                <p>₹ Budget</p>
              </div>
              <div className="div-min-max">
                <div className="nav-min">Min</div>
                <p>To</p>
                <div className="nav-min">Max</div>
              </div>
            </div>
            <div
              className="divide-line-11"
              style={{ marginLeft: "15px" }}
            ></div>
          </div>
          <div className="product-append-111" style={{ marginTop: "30px" }}>
            {products.map((product) => (
              <ApartmentCard product={product} />
            ))}
          </div>
          <div className="show-bottom-button">
            <button>Show more</button>
          </div>
          <Footer1 />
        </div>
      )}
      {isFilterModalOpen && (
        <div className="modal-overlay" onClick={toggleFilterModal}>
          <div
            className="modal-container"
            style={{ padding: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <FilterModal />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
