import React from "react";
import { Button } from "../components/Button";
import TextParagraphs from "../components/TextParagraphs";
import "../styles/Automation.css";
import "../styles/MainLabSection.css";
import Footer from '../components/Footer'

const Automation = () => {
  return (
    <>
      <div className="hero-container">
        <video src="/videos/video1.mp4" autoPlay loop muted />
        <h1>LAB AUTOMATION</h1>
        <h3>
          {" "}
          Manage laboratory devices / Automate workflows / Control devices
          remotely{" "}
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
      <TextParagraphs />
      <Footer />
    </>
  );
};

export default Automation;
