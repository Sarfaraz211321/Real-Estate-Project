import React from "react";
import Typewriter from 'typewriter-effect';
import slider from "../../assets/slider.png";
import { IoHomeOutline } from "react-icons/io5";

const Slider = () => {
  return (
    <section className="slider-section">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <div style={{ maxWidth: "50%" }}>
          <h5 className="text-danger fw-bold d-flex align-items-center gap-2">
            < IoHomeOutline /> Real Estate Agency
          </h5>
          <h1 className="fw-bold mb-3">
            <Typewriter
              options={{
                strings: ['Find Your Dream House here'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="mb-4 text-muted">
            Let us help you find your perfect home. With top listings and great service.
          </p>
          <button className="btn btn-danger fw-bold">Make An Enquiry</button>
        </div>
        <div>
          <img src={slider} alt="house" className="img-fluid rounded" style={{ maxWidth: "550px" }} />
        </div>
      </div>
    </section>
  );
};

export default Slider;