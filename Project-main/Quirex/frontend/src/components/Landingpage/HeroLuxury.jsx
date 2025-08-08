import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHome, FaPlay } from "react-icons/fa";
import Typewriter from 'typewriter-effect';

const HeroLuxury = () => {
  const defaultImage = "mainroom.jpg";
  const thumbnails = ["room1.webp", "room2.jpg", "room4.webp"];

  const [hoveredImage, setHoveredImage] = useState(null);
  const [displayImage, setDisplayImage] = useState(defaultImage);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if ((hoveredImage || defaultImage) !== displayImage) {
      setOpacity(0);
      const timeout = setTimeout(() => {
        setDisplayImage(hoveredImage || defaultImage);
        setOpacity(1);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [hoveredImage]);

  return (
    <section className="py-5 bg-white" data-aos="fade-down">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6" data-aos="fade-right" data-aos-delay="100">
            <div className="d-flex align-items-center mb-2 text-danger fw-semibold">
              <FaHome className="me-2" />
              Real Estate Agency
            </div>
            <h1 className="fw-bold">
              <Typewriter
                options={{
                  strings: ['Search and Get Your Dream House'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="text-muted my-3">
              Let us help you find your perfect home. With top listings and great service.
            </p>
            <div className="d-flex align-items-center gap-3">
              <button className="btn btn-danger px-4">Make An Enquiry</button>
              <button className="btn btn-outline-secondary rounded-circle">
                <FaPlay />
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div
            className="col-md-6 mt-4 mt-md-0 d-flex justify-content-center"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            <div
              className="position-relative"
              style={{ width: "100%", height: "370px", maxWidth: "550px", overflow: "hidden" }}
            >
              <img
                src={displayImage}
                alt="Luxury"
                className="position-absolute top-0 start-0 w-100 h-100 rounded"
                style={{
                  objectFit: "cover",
                  transition: "opacity 1s ease-in-out",
                  opacity: opacity,
                  zIndex: 2,
                }}
              />

              {/* Thumbnails */}
              <div
                className="position-absolute"
                style={{ bottom: "20px", left: "20px", display: "flex", gap: "10px", zIndex: 3 }}
              >
                {thumbnails.map((thumb, index) => (
                  <img
                    key={index}
                    src={thumb}
                    alt={thumb}
                    onMouseEnter={() => setHoveredImage(thumb)}
                    onMouseLeave={() => setHoveredImage(null)}
                    className="img-thumbnail border-0"
                    style={{
                      width: "120px",
                      height: "90px",
                      objectFit: "cover",
                      cursor: "pointer",
                      border: hoveredImage === thumb ? "2px solid red" : "none",
                      borderRadius: "6px",
                      transition: "border .3s ease-in-out",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLuxury;