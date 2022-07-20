import React from "react";
import "../styles/Features.css";
import Footer from "../components/Footer";

const Features = () => {
  return (
    <div>
      <div className="hero-container">
        <video src="/videos/video4.mp4" autoPlay loop muted />
        <h1>FEATURES</h1>
        <h3>
          {" "}
          Device Management / Dashboards / Workflows {" "}
        </h3>        
      </div>
      <Footer />
    </div>
  );
};

export default Features;
