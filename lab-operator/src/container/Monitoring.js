import React from "react";
import { Button } from "../components/Button";
import TextParagraphs from "../components/TextParagraphs";
import Footer from "../components/Footer";
const Monitoring = () => {
  return (
    <div>
      <div className="hero-container">
        <video src="/videos/video3.mp4" autoPlay loop muted />
        <h1>LAB MONITORING</h1>
        <h3>
          {" "}
          Comprehensive Dashboard / Real-time Metrics / Monitor Devices Remotely{" "}
        </h3>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            REQUEST INFORMATION
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Monitoring;
