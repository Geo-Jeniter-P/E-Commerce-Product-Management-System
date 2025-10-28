import React from "react";

const HeroBanner = () => {
  return (
    <div style={{
      backgroundImage: "url('/hero-banner.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "300px",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)"
    }}>
      <h1 style={{ fontSize: "48px", margin: 0 }}>Welcome to ShopEase</h1>
      <p style={{ fontSize: "20px", marginTop: "10px" }}>Find the best products at amazing prices</p>
    </div>
  );
};

export default HeroBanner;
