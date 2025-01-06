import React from "react";
import "../Style/Home.css";
import h1 from "../Asset/Home/h1.png";
import ApartmentCard from "./ApartmentCard";

const HomeDesign2 = () => {
  const products = [];
  for (let r = 0; r < 6; r++) {
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
    </div>
  );
};

export default HomeDesign2;
