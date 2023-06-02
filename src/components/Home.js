import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import "../styles/About.css";
import "../styles/Projects.css";
import Footer from "./Footer";
import logo from "../resources/portfolioLogo.png";
import aboutme from "../resources/aboutme.jpg";
import profileImage from "../resources/profileImage.jpg";

import medshub1 from "../resources/medshub1.png";
import medshub2 from "../resources/medshub2.png";
import medshub3 from "../resources/medshub3.png";
import medshub4 from "../resources/medshub4.png";

import goldapp1 from "../resources/goldapp1.png";
import goldapp2 from "../resources/goldapp2.png";
import goldapp3 from "../resources/goldapp3.png";
import goldapp4 from "../resources/goldapp4.png";

import recreate1 from "../resources/recreate1.png";
import recreate2 from "../resources/recreate2.png";
import recreate3 from "../resources/recreate3.png";
import recreate4 from "../resources/recreate4.png";

import taskify1 from "../resources/taskify1.png";
import taskify2 from "../resources/taskify2.png";
import taskify3 from "../resources/taskify3.png";
import taskify4 from "../resources/taskify4.png";

import serviceImg from "../resources/service.png";

import { Link, NavLink } from "react-router-dom";
import Nav from "./Nav";
import {
  ArrowDownTrayIcon,
  PaperAirplaneIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  ChartPieIcon,
  ArrowTopRightOnSquareIcon,
  ForwardIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  console.log("windowSize[0]: ", windowSize[0]);

  return (
    <>
      <Nav />
      {/* home */}
      {/* profile */}
      <div className="profile">
        <div className="profile-avatar">
          <div className="profile-avatar-img">
            <img src={profileImage} />
          </div>
          <div className="profile-whoami">
            <label className="title1">Hello There</label>
            <label className="title2">I am ,</label>
            <label className="title3">Rohit Bera</label>
            <div className="profile-whoami-herotitle">
              <div className="hero1">The</div>
              <label className="hero2">Developer</label>
            </div>
            <span className="hero3">Just a Developer for fun!</span>
            <div className="profile-whoami-buttons">
              <Link to="/aboutMe">
                <div>
                  <label>about me </label>
                  <PaperAirplaneIcon color="white" height={20} width={20} />
                </div>
              </Link>
              <button className="download">
                <ArrowDownTrayIcon color="white" height={20} width={20} />
              </button>
            </div>
          </div>
          <div className="profile-whatidid">
            <Link to="/projectsIdid">
              <div>
                <i class="fab fa-brands fa-slack"></i>
                <h2>Product Planner</h2>
              </div>
            </Link>
            <Link to="/projectsIdid">
              <div>
                <i class="fab fa-brands fa-squarespace"></i>
                <h2>Product Designer</h2>
              </div>
            </Link>
            <Link to="/projectsIdid">
              <div>
                <i class="fab fa-brands fa-twitch"></i>
                <h2>Freelancer</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* about */}
      <div className="about-home">
        <div className="about-home-container">
          <div className="about-home-container-1">
            <label>About</label>
            <span>Myself</span>
          </div>
          <div className="about-home-container-2">
            <div className="about-me">
              <img src={aboutme} />
              <div className="about-me-text">
                <label>About me</label>
                <p>I am just upgrading my version! , without bugs XD</p>
              </div>
            </div>
            <div className="about-education">
              <span>
                <AcademicCapIcon height={40} width={40} />
              </span>
              <div className="about-me-text">
                <label>Education</label>
                <p>Currently pursuing mscit from gls university</p>
              </div>
            </div>
            <div className="about-skills">
              <span>
                <i class="fab fa-brands fa-figma" />
                <i class="fab fa-brands fa-css3" />
                <i class="fab fa-brands fa-react" />
                <i class="fab fa-brands fa-node" />
              </span>
              <div className="about-me-text">
                <label>skills</label>
                <p>frontend + backend</p>
              </div>
            </div>
            <div className="about-experience">
              <span>
                <ChartPieIcon height={40} width={40} />
              </span>
              <div className="about-me-text">
                <label>Experience</label>
                <p>
                  <Link to="/aboutme">
                    <button>
                      know more about myself!
                      <ArrowTopRightOnSquareIcon height={20} width={20} />
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured projects */}
      <div className="featured-project">
        <div className="featured-project-container">
          <div className="featured-project-container-1">
            <label>Featured</label>
            <span>projects</span>
          </div>
          <div className="featured-project-container-2">
            <div className="the-web-project">
              <div className="project-image">
                <img src={medshub1} />
                <img src={medshub2} />
                <img src={medshub3} />
                <img src={medshub4} />
              </div>
              <div className="project-description">
                <div className="project-description-1">
                  <label>medshub24/7 web</label>
                  <span>full stack web app</span>
                </div>
              </div>
            </div>
            <div className="the-web-project">
              <div className="project-image">
                <img src={goldapp1} />
                <img src={goldapp2} />
                <img src={goldapp3} />
                <img src={goldapp4} />
              </div>
              <div className="project-description">
                <div className="project-description-1">
                  <label>gold web</label>
                  <span>full stack web app</span>
                </div>
              </div>
            </div>
            {/* app */}
            <div className="the-app-project first">
              <div className="project-image">
                <div className="project-image-container">
                  <img src={recreate1} />
                  <label>user opening </label>
                </div>
                <div className="project-image-container">
                  <img src={recreate2} />
                  <label>user order & search </label>
                </div>
                <div className="project-image-container">
                  <img src={recreate3} />
                  <label>worker opening </label>
                </div>
                <div className="project-image-container">
                  <img src={recreate4} />
                  <label>worker order & profile </label>
                </div>
              </div>
              <div className="project-description">
                <div className="project-description-1">
                  <label>Recreate app</label>
                  <span>react native app</span>
                </div>
              </div>
            </div>
            <div className="the-app-project second">
              <div className="project-image">
                <div className="project-image-container">
                  <img src={taskify1} />
                  <label>user opening</label>
                </div>
                <div className="project-image-container">
                  <img src={taskify2} />
                  <label>user bid & chat</label>
                </div>
                <div className="project-image-container">
                  <img src={taskify3} />
                  <label>client opening</label>
                </div>
                <div className="project-image-container">
                  <img src={taskify4} />
                  <label>client notification & payment</label>
                </div>
              </div>
              <div className="project-description">
                <div className="project-description-1">
                  <label>Taskify app</label>
                  <span>react native app</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* promotion */}
      <div className="promotion">
        <div className="promotion-container">
          <span>
            you will find some more awesome projects{" "}
            {windowSize[0] <= 426 ? (
              <span>here ...👇</span>
            ) : (
              <span>there ...👉</span>
            )}
          </span>
          <Link to="/projectsIdid">
            <button>
              <label>check out</label>
              <CodeBracketIcon height={25} width={25} />
            </button>
          </Link>
        </div>
      </div>

      {/* Service */}
      <div className="service">
        <div className="service-head">
          <label>Checkout</label>
          <p>Newly Launched Services</p>
          <Link to="/serviceIprovide">
            <button>
              <span>view all services</span>
              <ForwardIcon height={25} width={25} color="#27374D" />
            </button>
          </Link>
        </div>
        <div className="service-body">
          <img src={serviceImg} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
