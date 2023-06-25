import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "../styles/Service.css";

const Service = () => {
  return (
    <>
      <Nav />
      <div className="service-container">
        <div className="service-title">
          <section className="title-text">
            <div className="title">
              <span>I also provide freelancing services!</span>
              <label>
                If you would want to work together feel free to send me a
                message for any design or developement related services
              </label>
            </div>
          </section>
        </div>
        <div className="service-body">
          <div className="service-card"></div>
          <div className="service-card"></div>
          <div className="service-card"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
