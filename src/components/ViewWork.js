import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import "../styles/ViewProject.css";
import {
  CloudIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  RectangleGroupIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import LoaderPage from "./LoaderPage";
import AOS from "aos";
import "aos/dist/aos.css";

const ViewWork = () => {
  AOS.init({
    offset: 200,
    duration: 1000,
  });

  const location = useLocation();
  console.log("location : ", location.state);

  const [isLoading, setLoaded] = useState(true);

  const spinner = document.getElementById("spinner");

  if (spinner) {
    setTimeout(() => {
      setLoaded(false);
    }, 2000);
  }

  const techStack = location.state.item.techStack;

  const projectImages = location.state.item.projectImg;
  console.log("location.state.item.bgColor: ", location.state.item.bgColor);

  if (isLoading) {
    return <LoaderPage />;
  } else {
    return (
      <>
        <Nav />
        <div className="view-project-container">
          <div className="project-wrapper">
            <div className="project-slider">
              <section>
                <div className="title">
                  {location.state.item.type}
                </div>
                <div className="project-logo">
                  <img src={location.state.item.projectLogo} />
                </div>
                <div className="project-short-description">
                  {location.state.item.projectDescription}
                </div>
                <div className="project-stack" data-aos="fade-up">
                  <div
                    className="tech"
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                    TECH STACK ⛩️{" "}
                  </div>
                  {techStack.map((item) => {
                    return <div className="tech">{item}</div>;
                  })}
                </div>
              </section>
            </div>
            <div
              className="project-img"
              style={
                {
                  //   backgroundColor: location.state.item.bgColor,
                }
              }
            >
              <section>
                {/* <img /> */}
                {projectImages.map((item) => {
                  return (
                    <div className="img-content" data-aos="fade-up">
                      <img src={item} />
                    </div>
                  );
                })}
              </section>
            </div>
            <div className="link-desc-wrapper">
              <div className="project-description" data-aos="fade-up">
                {location.state.item.projectLongDescription}
              </div>
              <div className="project-links" data-aos="fade-up">
                <a href={location.state.item.githubRepoBackend}>
                  <button>
                    <div className="link">
                      <RectangleGroupIcon className="icon" />
                    </div>
                    <div className="icon-text">backend repo</div>
                  </button>
                </a>
                <a href={location.state.item.githubRepoFrontend}>
                  <button>
                    <div className="link">
                      <RocketLaunchIcon className="icon" />
                    </div>
                    <div className="icon-text">frontend repo</div>
                  </button>
                </a>
                <a href={location.state.item.projectLink}>
                  <button>
                    <div className="link">
                      {location.state.item.type === "app" ? (
                        <DevicePhoneMobileIcon className="icon" />
                      ) : (
                        <ComputerDesktopIcon className="icon" />
                      )}
                    </div>
                    <div className="icon-text">visit project</div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ViewWork;
