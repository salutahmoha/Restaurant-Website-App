import React from "react";
import serviceData from "../serviceDetails/serviceData";
import "./Service.css";
function Service() {
  return (
    <section id="service">
      <h2>Our Services</h2>
      <div className="service-container">
        {serviceData.map((serviceData, index) => (
          <div key={index} className="service-info">
            <img src={serviceData.image} alt="" />
            <div className="service-details">
              <h3>{serviceData.title}</h3>
              <p>{serviceData.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
