import React from "react";
import "../Style/Home.css";
import h1 from "../Asset/Home/h1.png";
import ApartmentCard from "./ApartmentCard";
const HomeDesign = () => {
  const products = [
    {
      productImage: h1,
      productName: "Residential",
      productAreaName: "Locality",
      productRent: 20000,
      productBedType: "3BHK",
      productArea: "3700sqft",
      productSaleType: "not for sale",
      productDistance: "9.8 Km away",
      isAvailable: true,
    },
    {
      productImage: h1,
      productName: "Residential",
      productAreaName: "Locality",
      productRent: 20000,
      productBedType: "3BHK",
      productArea: "3700sqft",
      productSaleType: "not for sale",
      productDistance: "9.8 Km away",
      isAvailable: true,
    },
  ];
  for (let r = 0; r < 10; r++) {
    products.push({
      productImage: h1,
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
    <div className="home-container">
      <div className="product-append-111">
        {products.map((product) => (
          <ApartmentCard product={product} />
        ))}
      </div>
      <div className="show-bottom-button">
        <button>Show more</button>
      </div>
    </div>
  );
};

export default HomeDesign;
