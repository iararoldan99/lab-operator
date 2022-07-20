import React from "react";
import "../styles/Card.css";
import CardIndividual from "./CardIndividual";
import { Button } from "./Button";

function Cards() {
  return (
    <div className="cards">
      <h1>Unleash your full potential</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardIndividual
              src="images/LAB2.png"
              text="Connect devices and create smart workflows"
              label="LAB AUTOMATION"
              path="/lab-automation"
            />
            <CardIndividual
              src="images/LAB1.png"
              text="All your lab devices in one application"
              label="LAB MONITORING"
              path="/lab-monitoring"
            />
          </ul>
          <div class="container">
            <div class="row">
              <div class="col">
                <h2>Lab Automation</h2>
                <ul>
                  <li>Connect all your laboratory equipment</li>
                  <li>Build your own automated workflows</li>
                  <li>Control laboratory devices remotely</li>
                  <li>Analyze output from several instruments</li>
                  <li>Export data to other software</li>
                </ul>
              </div>
              <div class="col">
                <h2>Lab Monitoring</h2>
                <ul>
                  <li>Monitor your data in real time</li>
                  <li>Combine experiments in one dashboard</li>
                  <li>Get notified when instrument values are out of range</li>
                  <li>Integrate safety protocols and reports</li>
                  <li>Access historical data in a full audit trail</li>
                </ul>
              </div>
              <div class="w-100"></div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="lab-header">SIMPLIFY DATA ACQUISITION</h1>
      <img src="/images/data.png" class="img-fluid" alt="lab" />
      <div class="container">
        <div class="row">
          <div class="col">
            <h2>Free your data from silos</h2>
            <p>
              Too much information in different places? Unify your way of
              research data collection to make data easily accessible.
            </p>
          </div>
          <div class="col">
            <h2>Combine your data in one platform</h2>
            <p>
              Capture large data streams in an organized manner. Integrate
              important information in research documentation systems.
            </p>
          </div>
          <div class="col">
            <h2>Effortless device management</h2>
            <p>
              Get overviews of instrument behaviour and usage. Facilitate the
              maintenance of your lab equipment in a preventive manner.
            </p>
          </div>
          <div class="w-100"></div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
