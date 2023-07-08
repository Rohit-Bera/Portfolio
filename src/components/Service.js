import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "../styles/Service.css";
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/solid";

const Service = () => {
  const myService = [
    {
      icon: <PuzzlePieceIcon height={30} width={30} />,
      serviceName: "ui ux",
      description:
        "top-notch UI/UX📱services to solve your digital challenges. Interfaces💻that ensure seamless navigation and enhance user satisfaction😋.",
      includes: ["webapp design", "webapp prototype"],
    },
    {
      icon: <ComputerDesktopIcon height={30} width={30} />,
      serviceName: "web dev.",
      description:
        "websites that are not only visually appealing🍀 but also , ensuring a seamless user experience🌔. Whether you need a responsive design📱 , e-commerce functionality🛒, or robust backend development☁️ everything is availble!",
      includes: ["Frontend", "Backend", "Webapp testing"],
    },
    {
      icon: <DevicePhoneMobileIcon height={30} width={30} />,
      serviceName: "app dev.",
      description:
        "Apps that seamlessly run on both iOS and Android platforms📱. Proper utilization of frameworks like React Native , Flutter to create efficient and faster applications.",
      includes: ["Frontend", "Backend", "app testing"],
    },
  ];

  return (
    <>
      <Nav />
      <div className="service-container">
        <div className="service-title">
          <section className="title-text">
            <div className="title">
              <span>I also provide freelancing services!</span>
              <label>
                Let's collaborate🤝 and transform your ideas ✍️ into engaging
                and user-friendly designs⛩️.
              </label>
            </div>
          </section>
        </div>
        <div className="service-body">
          {myService.map((item) => {
            return (
              <div className="service-card">
                <div className="service-header">
                  <div className="service-icon">{item.icon}</div>
                  <div className="service-name">{item.serviceName}</div>
                </div>
                <div className="service-content">
                  <label className="label-25">{item.description}</label>
                  <label className="label-15">
                    {item.includes.map((items) => {
                      return <span>{items}</span>;
                    })}
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Service;
