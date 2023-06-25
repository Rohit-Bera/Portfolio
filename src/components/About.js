import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "../styles/About.css";
import phone from "../resources/phone.png";
import aboutme from "../resources/aboutme.jpg";
import firebase from "../resources/firebase.svg";
import mongodb from "../resources/mongodb.svg";
import mysql from "../resources/mysql.svg";
import expo from "../resources/expo.svg";
import react from "../resources/react.svg";
import express from "../resources/express.svg";
import next from "../resources/nextjs.svg";
import redux from "../resources/redux.svg";
import canva from "../resources/canva.svg";
import postman from "../resources/postman.svg";
import flutter from "../resources/flutter.svg";
import hackathon1 from "../resources/hackathon1.png";
import hackathon2 from "../resources/haskathon2.png";
import typlogo from "../resources/typlogo.png";

import {
  BookOpenIcon,
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  ArrowTopRightOnSquareIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "./Footer";

const About = () => {
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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skill = [
    {
      toolName: "html",
      toolPercent: 80,
      toolImg: <i class="fab fa-brands fa-html5" />,
    },
    {
      toolName: "css",
      toolPercent: 70,
      toolImg: <i class="fab fa-brands fa-css3-alt" />,
    },
    {
      toolName: "javascript",
      toolPercent: 40,
      toolImg: <i class="fab fa-brands fa-js" />,
    },
    {
      toolName: "firebase",
      toolPercent: 15,
      toolImg: <img src={firebase} />,
    },
    {
      toolName: "mongodb",
      toolPercent: 60,
      toolImg: <img src={mongodb} />,
    },
    {
      toolName: "flutter",
      toolPercent: 15,
      toolImg: <img src={flutter} />,
    },
    {
      toolName: "mongodb",
      toolPercent: 43,
      toolImg: <img src={expo} />,
    },
    {
      toolName: "react native",
      toolPercent: 65,
      toolImg: <img src={react} />,
    },
    {
      toolName: "express js",
      toolPercent: 63,
      toolImg: <img src={express} />,
    },
    {
      toolName: "laravel",
      toolPercent: 30,
      toolImg: <i class="fab fa-brands fa-laravel" />,
    },
    {
      toolName: "next js",
      toolPercent: 15,
      toolImg: <img src={next} />,
    },
    {
      toolName: "node js",
      toolPercent: 45,
      toolImg: <i class="fab fa-brands fa-node" />,
    },
    {
      toolName: "redux",
      toolPercent: 40,
      toolImg: <img src={redux} />,
    },
    {
      toolName: "canva",
      toolPercent: 75,
      toolImg: <img src={canva} />,
    },
    {
      toolName: "figma",
      toolPercent: 41,
      toolImg: <i class="fab fa-brands fa-figma" />,
    },
    {
      toolName: "postman",
      toolPercent: 50,
      toolImg: <img src={postman} />,
    },
    {
      toolName: "react js",
      toolPercent: 45,
      toolImg: <i class="fab fa-brands fa-react" />,
    },
    {
      toolName: "php",
      toolPercent: 45,
      toolImg: <i class="fab fa-brands fa-php" />,
    },
    {
      toolName: "python",
      toolPercent: 15,
      toolImg: <i class="fab fa-brands fa-python" />,
    },
    {
      toolName: "mysql",
      toolPercent: 30,
      toolImg: <img src={mysql} />,
    },
  ];

  const experience = [
    {
      img: hackathon1,
      role: "frontend Developer",
      projectTitle: "My Fresh Meal Store - web app",
      myperformance:
        "made a webapp , where user can view vegetables and fruits and can login and signup",
      period: "FEB 2020 - 2 weeks",
    },
    {
      img: typlogo,
      role: "QA Engineer",
      projectTitle: "Hire me - react native app",
      myperformance:
        "performed regorous testing on the app and the web app of the development versions and production versions",
      period: "AUG 2021 - JUNE 2022",
    },
    {
      img: hackathon2,
      role: "backend developer",
      projectTitle: "Donation App - react native app",
      myperformance:
        "made connection between the frontend react native app with Firebase database!",
      period: "SEP 2022 - OCT 2022",
    },
  ];

  if (windowSize[0] <= 990) {
    return (
      <>
        <Nav />
        {/* about me */}
        <div className="about-section-990">
          <section className="wrapper-container-1">
            <div className="wrap">
              <div className="about-me">
                <label>
                  I am a designer + developer who has interest in creating and
                  showcasing his artwork through web , app & ui/ux.
                </label>
              </div>

              {/* experience */}
              <div className="about-exp">
                <label>Experience</label>
                <section>
                  {experience.map((item) => {
                    return (
                      <div className="exp-body">
                        <div className="exp-img">
                          <img src={item.img} />
                        </div>
                        <div className="exp-desc">
                          <span className="role">{item.role}</span>
                          <span className="performance">
                            {item.myperformance}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </section>
              </div>
            </div>
            {/* eductaion */}
            <div className="about-edu-1">
              <div className="uni-name">
                <BuildingOffice2Icon className="icon" />
                <label>GLS university</label>
              </div>
              <section className="uni-section">
                <div className="ug-uni">
                  <section className="uni-course">
                    <label>bca</label>
                  </section>
                  <section className="uni-marks">
                    <label>1* 9.37</label>
                    <label>2* 9.23</label>
                    <label>3* 9.29</label>
                    <label>4* 8.76</label>
                    <label>5* 9.14</label>
                    <label>6* 8.58</label>
                  </section>
                </div>
                <div className="pg-uni">
                  <section className="uni-course">
                    <label>mscit</label>
                  </section>
                  <section className="uni-marks">
                    <label>82.5%</label>
                  </section>
                </div>
              </section>
            </div>
          </section>

          {/* skills */}
          <section className="wrapper-container-2">
            {/* skills */}
            {windowSize[0] <= 769 ? (
              <>
                {/* school */}
                <div className="about-edu-2">
                  <section className="school-name">
                    <BuildingLibraryIcon className="icon" />
                    <label>Divine Buds school</label>
                  </section>
                  <section className="school-marks">
                    <div className="th10">
                      <span className="circle">10th</span>
                      <span>70.33%</span>
                    </div>
                    <div className="th12">
                      <span className="circle">12th</span>
                      <span>69.73%</span>
                    </div>
                  </section>
                </div>
                {/* skills */}
                <div className="about-skills">
                  <label>skills</label>
                  <div className="card-body">
                    {skill.map((item) => {
                      return (
                        <div className="skill-card">
                          <div
                            class="pie animate"
                            style={{
                              "--p": item.toolPercent,
                              "--c": "#8BF5FA",
                            }}
                          >
                            {item.toolImg}
                          </div>
                          <span className="title">{item.toolPercent}%</span>
                          <span className="heading">{item.toolName}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* skills */}
                <div className="about-skills">
                  <label>skills</label>
                  <div className="card-body">
                    {skill.map((item) => {
                      return (
                        <div className="skill-card">
                          <div
                            class="pie animate"
                            style={{
                              "--p": item.toolPercent,
                              "--c": "#8BF5FA",
                            }}
                          >
                            {item.toolImg}
                          </div>
                          <span className="title">{item.toolPercent}%</span>
                          <span className="heading">{item.toolName}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* school */}
                <div className="about-edu-2">
                  <section className="school-name">
                    <BuildingLibraryIcon className="icon" />
                    <label>Divine Buds school</label>
                  </section>
                  <section className="school-marks">
                    <div className="th10">
                      <span className="circle">10th</span>
                      <span>70.33%</span>
                    </div>
                    <div className="th12">
                      <span className="circle">12th</span>
                      <span>69.73%</span>
                    </div>
                  </section>
                </div>
              </>
            )}
          </section>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Nav />
        {/* about me */}
        <div className="about-wrapper" id="about-me">
          <div className="about-hero">
            <div className="about-hero-part1">
              <section>
                <p>
                  <span>
                    Trusting the process and keeping my patience on check,
                  </span>
                  <br />I try to explore more and more tech stacks which are
                  helping me in my journey!
                </p>
              </section>
            </div>
            <div className="about-hero-part2">
              <img src={phone} />

              <div className="aboutme-container">
                <section>
                  <img src={aboutme} />
                  <a href="#about-me">
                    <button className="aboutme-btn">About me</button>
                  </a>
                </section>

                <p>
                  I am a{" "}
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: "white",
                    }}
                  >
                    designer + Developer
                  </span>{" "}
                  who has interest in creating and showcasing his artwork
                  through
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: "white",
                    }}
                  >
                    {" "}
                    web , app & ui/ux
                  </span>
                  .
                </p>

                <section>
                  <img src={aboutme} />
                  <a href="#my-education">
                    <button className="edu-btn">Education</button>
                  </a>
                </section>

                <section>
                  <img src={aboutme} />
                  <a href="#my-skills">
                    <button className="skill-btn">Skills</button>
                  </a>
                </section>

                <section>
                  <img src={aboutme} />
                  <a href="#my-experience">
                    <button className="exp-btn">Experience</button>
                  </a>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* eductaion */}
        <div
          className="about-wrapper"
          id="my-education"
          style={{ marginTop: "5rem" }}
        >
          <div className="about-edu">
            <div className="about-hero-part2">
              <img src={phone} />

              <div className="aboutme-container">
                <section>
                  <img src={aboutme} />
                  <a href="#about-me">
                    <button className="aboutme-btn">About me</button>
                  </a>
                </section>

                <section>
                  <img src={aboutme} />
                  <button className="edu-btn">Education</button>
                </section>

                <p>
                  I was not good in my academics but i was{" "}
                  <span style={{ fontSize: "1.2rem", color: "white" }}>
                    {" "}
                    better in understanding the core
                  </span>{" "}
                  and could eventually{" "}
                  <span style={{ fontSize: "1.2rem", color: "white" }}>
                    grasped the concepts
                  </span>{" "}
                  quickly.
                </p>

                <section>
                  <img src={aboutme} />
                  <a href="#my-skills">
                    <button className="skill-btn">Skills</button>
                  </a>
                </section>

                <section>
                  <img src={aboutme} />
                  <a href="#my-experience">
                    <button className="exp-btn">Experience</button>
                  </a>
                </section>
              </div>
            </div>
            <div className="about-hero-part1">
              <section className="edu-1">
                <div className="edu-div-1">
                  <h3>did my school from</h3>
                  <p>
                    <BuildingLibraryIcon height={25} width={25} />
                    <span>
                      10<sup>th</sup>
                    </span>{" "}
                    <span>Divine Buds School</span>{" "}
                  </p>
                  <p>
                    <BuildingOffice2Icon height={25} width={25} />
                    <span>
                      12<sup>th</sup>
                    </span>{" "}
                    <span>Divine Buds School</span>{" "}
                  </p>
                </div>
                <div className="edu-div-2">
                  <section className="tenth">
                    <span>70.33 %</span>
                    <label>10th</label>
                  </section>
                  <section className="twelveth">
                    <span>69.73 %</span>
                    <label>12th commerce</label>
                  </section>
                </div>
              </section>
              <section className="edu-2">
                <div className="edu-div-1">
                  <section className="bachelors-1">
                    <div>
                      <label>Under Graduate</label>
                      <p
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <BuildingOfficeIcon height={25} width={25} />
                        <span style={{ margin: "0px 10px" }}>
                          GLS university
                        </span>{" "}
                        <span>BCA</span>
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        flexDirection: "column",
                        border: "10px solid #27374D",
                        borderRadius: "100%",
                        boxShadow: "0px 0px 20px  #888888",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          flexDirection: "column",
                          border: "8px solid #8BF5FA",
                          borderRadius: "100%",
                          padding: "1.1rem",
                        }}
                      >
                        <label>8.95</label>
                        <span>CGPA</span>
                      </div>
                    </div>
                  </section>
                  <section className="bachelors-2">
                    <div>
                      <span>9.37</span>
                      <label>sem 1</label>
                    </div>
                    <div>
                      <span>9.23</span>
                      <label>sem 2</label>
                    </div>
                    <div>
                      <span>9.29</span>
                      <label>sem 3</label>
                    </div>
                    <div>
                      <span>8.76</span>
                      <label>sem 4</label>
                    </div>
                    <div>
                      <span>9.14</span>
                      <label>sem 5</label>
                    </div>
                    <div>
                      <span>8.58</span>
                      <label>sem 6</label>
                    </div>
                  </section>
                  <section className="bachelors-3">
                    <span>Achievements</span>
                    <div>
                      <label>Participated in INNOVINDIA 2020</label>
                    </div>
                  </section>
                </div>
                <div className="edu-div-2">
                  <section className="masters-1">
                    <div>
                      <label>Post Graduate</label>
                      <p
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <AcademicCapIcon height={25} width={25} />
                        <span style={{ margin: "0px 10px" }}>
                          GLS university
                        </span>{" "}
                        <span>MSCIT</span>
                      </p>
                    </div>
                  </section>
                  <section className="masters-2">
                    <div>
                      <span>82.5%</span>
                      <label>sem 1</label>
                    </div>
                  </section>
                  <section className="masters-3">
                    <span>Achievements</span>
                    <div>
                      <label>
                        Participated in Azadi ka Amrit Mahostsav Hackathon -
                        2022
                      </label>
                    </div>
                  </section>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* skills */}
        <div
          className="about-wrapper"
          id="my-skills"
          style={{ marginTop: "5rem" }}
        >
          <div className="about-skills">
            <div className="about-hero-part1">
              <section>
                <Carousel
                  className="slider"
                  swipeable={true}
                  draggable={true}
                  showDots={false}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={2500}
                  responsive={responsive}
                  keyBoardControl={true}
                  customTransition="all .30s"
                  transitionDuration={200}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={[
                    "tablet",
                    "mobile",
                    "superLargeDesktop",
                    "desktop",
                  ]}
                  itemClass="carousel-item-padding-80-px"
                >
                  <div className="parent">
                    <div className="x3l">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          flexDirection: "column",
                          // backgroundColor: "blanchedalmond",
                          width: "70%",
                          height: "30vh",
                        }}
                      >
                        <span className="i-container">
                          <i class="fab fa-brands fa-html5" />
                        </span>
                        <p>
                          <span>80%</span>
                        </p>
                        <label>HTML</label>
                      </div>
                      <div
                        style={{
                          height: "80%",
                          width: "3px",
                          borderRadius: "5px",
                          backgroundColor: "#8BF5FA",
                        }}
                      ></div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        width: "23vw",
                      }}
                    >
                      <div className="xl">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            flexDirection: "column",
                            width: "60%",
                            height: "26vh",
                          }}
                        >
                          <span className="i-container">
                            <i class="fab fa-brands fa-css3-alt" />
                          </span>
                          <p>
                            <span>70%</span>
                          </p>
                          <label>CSS</label>
                        </div>
                        <div
                          style={{
                            height: "70%",
                            width: "3px",
                            borderRadius: "5px",
                            backgroundColor: "#8BF5FA",
                          }}
                        ></div>
                      </div>
                      <div className="xl">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            flexDirection: "column",
                            width: "60%",
                            height: "26vh",
                          }}
                        >
                          <span className="i-container">
                            <i class="fab fa-brands fa-js" />
                          </span>
                          <p>
                            <span>40%</span>
                          </p>
                          <label>javascript</label>
                        </div>
                        <div
                          style={{
                            height: "80%",
                            width: "3px",
                            borderRadius: "5px",
                            backgroundColor: "#8BF5FA",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="parent">
                    <div className="x2l">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          flexDirection: "column",
                          width: "60%",
                          height: "28vh",
                        }}
                      >
                        <span className="img-container">
                          <img src={firebase} />
                        </span>
                        <p>
                          <span>15%</span>
                        </p>
                        <label>firebase</label>
                      </div>
                      <div
                        style={{
                          height: "15%",
                          width: "3px",
                          borderRadius: "5px",
                          backgroundColor: "#8BF5FA",
                        }}
                      ></div>
                    </div>
                    <div className="x2l">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          flexDirection: "column",
                          width: "60%",
                          height: "28vh",
                        }}
                      >
                        <span className="img-container">
                          <img src={mongodb} />
                        </span>
                        <p>
                          <span>60%</span>
                        </p>
                        <label>mongodb</label>
                      </div>
                      <div
                        style={{
                          height: "60%",
                          width: "3px",
                          borderRadius: "5px",
                          backgroundColor: "#8BF5FA",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="parent">
                    <div className="x3l">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          flexDirection: "column",
                          width: "70%",
                          height: "30vh",
                        }}
                      >
                        <span className="img-container">
                          <img src={flutter} />
                        </span>
                        <p>
                          <span>15%</span>
                        </p>
                        <label>flutter</label>
                      </div>
                      <div
                        style={{
                          height: "15%",
                          width: "3px",
                          borderRadius: "5px",
                          backgroundColor: "#8BF5FA",
                        }}
                      ></div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        width: "23vw",
                      }}
                    >
                      <div className="xl">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            flexDirection: "column",
                            width: "60%",
                            height: "26vh",
                          }}
                        >
                          <span className="img-container">
                            <img src={expo} />
                          </span>
                          <p>
                            <span>43%</span>
                          </p>
                          <label>expo</label>
                        </div>
                        <div
                          style={{
                            height: "43%",
                            width: "3px",
                            borderRadius: "5px",
                            backgroundColor: "#8BF5FA",
                          }}
                        ></div>
                      </div>
                      <div className="xl">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            flexDirection: "column",
                            width: "60%",
                            height: "26vh",
                          }}
                        >
                          <span className="img-container">
                            <img src={react} />
                          </span>
                          <p>
                            <span>65%</span>
                          </p>
                          <label>react native</label>
                        </div>
                        <div
                          style={{
                            height: "65%",
                            width: "3px",
                            borderRadius: "5px",
                            backgroundColor: "#8BF5FA",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="parent">
                    <div className="xl">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          flexDirection: "column",
                          width: "60%",
                          height: "26vh",
                        }}
                      >
                        <span className="img-container">
                          <img src={express} />
                        </span>
                        <p>
                          <span>63%</span>
                        </p>
                        <label>express js</label>
                      </div>
                      <div
                        style={{
                          height: "63%",
                          width: "3px",
                          borderRadius: "5px",
                          backgroundColor: "#8BF5FA",
                        }}
                      ></div>
                    </div>
                    <div className="xl">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          flexDirection: "column",
                          width: "60%",
                          height: "26vh",
                        }}
                      >
                        <span className="i-container">
                          <i class="fab fa-brands fa-laravel" />
                        </span>
                        <p>
                          <span>30%</span>
                        </p>
                        <label>laravel</label>
                      </div>
                      <div
                        style={{
                          height: "30%",
                          width: "3px",
                          borderRadius: "5px",
                          backgroundColor: "#8BF5FA",
                        }}
                      ></div>
                    </div>
                    <div className="xl">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          flexDirection: "column",
                          width: "60%",
                          height: "26vh",
                        }}
                      >
                        <span className="img-container">
                          <img src={next} />
                        </span>
                        <p>
                          <span>15%</span>
                        </p>
                        <label>next js</label>
                      </div>
                      <div
                        style={{
                          height: "15%",
                          width: "3px",
                          borderRadius: "5px",
                          backgroundColor: "#8BF5FA",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="parent">
                    <div className="x2l">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          flexDirection: "column",
                          width: "60%",
                          height: "28vh",
                        }}
                      >
                        <span className="i-container">
                          <i class="fab fa-brands fa-node" />
                        </span>
                        <p>
                          <span>45%</span>
                        </p>
                        <label>node js</label>
                      </div>
                      <div
                        style={{
                          height: "45%",
                          width: "3px",
                          borderRadius: "5px",
                          backgroundColor: "#8BF5FA",
                        }}
                      ></div>
                    </div>
                    <div className="x2l">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          flexDirection: "column",
                          width: "60%",
                          height: "28vh",
                        }}
                      >
                        <span className="img-container">
                          <img src={redux} />
                        </span>
                        <p>
                          <span>40%</span>
                        </p>
                        <label>redux</label>
                      </div>
                      <div
                        style={{
                          height: "40%",
                          width: "3px",
                          borderRadius: "5px",
                          backgroundColor: "#8BF5FA",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="parent">
                    <div className="x3l">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          flexDirection: "column",
                          width: "70%",
                          height: "30vh",
                        }}
                      >
                        <span className="img-container">
                          <img src={canva} />
                        </span>
                        <p>
                          <span>75%</span>
                        </p>
                        <label>canva</label>
                      </div>
                      <div
                        style={{
                          height: "75%",
                          width: "3px",
                          borderRadius: "5px",
                          backgroundColor: "#8BF5FA",
                        }}
                      ></div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        width: "23vw",
                      }}
                    >
                      <div className="xl">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            flexDirection: "column",
                            width: "60%",
                            height: "26vh",
                          }}
                        >
                          <span className="i-container">
                            <i class="fab fa-brands fa-figma" />
                          </span>
                          <p>
                            <span>41%</span>
                          </p>
                          <label>figma</label>
                        </div>
                        <div
                          style={{
                            height: "41%",
                            width: "3px",
                            borderRadius: "5px",
                            backgroundColor: "#8BF5FA",
                          }}
                        ></div>
                      </div>
                      <div className="xl">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            flexDirection: "column",
                            width: "60%",
                            height: "26vh",
                          }}
                        >
                          {" "}
                          <span className="img-container">
                            <img src={postman} />
                          </span>
                          <p>
                            <span>50%</span>
                          </p>
                          <label>postman</label>
                        </div>
                        <div
                          style={{
                            height: "50%",
                            width: "3px",
                            borderRadius: "5px",
                            backgroundColor: "#8BF5FA",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="parent">
                    <div className="xl">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          flexDirection: "column",
                          width: "60%",
                          height: "26vh",
                        }}
                      >
                        <span className="i-container">
                          <i class="fab fa-brands fa-react" />
                        </span>
                        <p>
                          <span>70%</span>
                        </p>
                        <label>react</label>
                      </div>
                      <div
                        style={{
                          height: "70%",
                          width: "3px",
                          borderRadius: "5px",
                          backgroundColor: "#8BF5FA",
                        }}
                      ></div>
                    </div>
                    <div className="xl">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          flexDirection: "column",
                          width: "60%",
                          height: "26vh",
                        }}
                      >
                        <span className="i-container">
                          <i class="fab fa-brands fa-php" />
                        </span>
                        <p>
                          <span>45%</span>
                        </p>
                        <label>php</label>
                      </div>
                      <div
                        style={{
                          height: "45%",
                          width: "3px",
                          borderRadius: "5px",
                          backgroundColor: "#8BF5FA",
                        }}
                      ></div>
                    </div>
                    <div className="xl">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          flexDirection: "column",
                          width: "60%",
                          height: "26vh",
                        }}
                      >
                        <span className="i-container">
                          <i class="fab fa-brands fa-python" />
                        </span>
                        <p>
                          <span>15%</span>
                        </p>
                        <label>python</label>
                      </div>
                      <div
                        style={{
                          height: "15%",
                          width: "3px",
                          borderRadius: "5px",
                          backgroundColor: "#8BF5FA",
                        }}
                      ></div>
                    </div>
                  </div>
                </Carousel>
              </section>
            </div>
            <div className="about-hero-part2">
              <img src={phone} />

              <div className="aboutme-container">
                <section>
                  <img src={aboutme} />
                  <a href="#about-me">
                    <button className="aboutme-btn">About me</button>
                  </a>
                </section>

                <section>
                  <img src={aboutme} />
                  <a href="#my-education">
                    <button className="edu-btn">Education</button>
                  </a>
                </section>

                <section>
                  <img src={aboutme} />
                  <a href="#my-skills">
                    <button className="skill-btn">Skills</button>
                  </a>
                </section>
                <p>
                  Just{" "}
                  <span style={{ fontSize: "1.2rem", color: "white" }}>
                    enjoying the process!
                  </span>{" "}
                  and increasing my capabilities that how ,{" "}
                  <span style={{ fontSize: "1.2rem", color: "white" }}>
                    i can be usefull in solving the problems
                  </span>
                  .
                </p>

                <section>
                  <img src={aboutme} />
                  <a href="#my-experience">
                    <button className="exp-btn">Experience</button>
                  </a>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* experience */}
        <div
          className="about-wrapper"
          id="my-experience"
          style={{
            marginTop: "5rem",
            marginBottom: "5rem",
          }}
        >
          <div className="about-exp">
            <div className="about-hero-part2">
              <img src={phone} />

              <div className="aboutme-container">
                <section>
                  <img src={aboutme} />
                  <a href="#about-me">
                    <button className="aboutme-btn">About me</button>
                  </a>
                </section>

                <section>
                  <img src={aboutme} />
                  <a href="#my-education">
                    <button className="skill-btn">Education</button>
                  </a>
                </section>

                <section>
                  <img src={aboutme} />
                  <a href="#my-skills">
                    <button className="skill-btn">Skills</button>
                  </a>
                </section>

                <section>
                  <img src={aboutme} />
                  <a href="#my-experience">
                    <button className="exp-btn">Experience</button>
                  </a>
                </section>

                <p>
                  i have{" "}
                  <span style={{ fontSize: "1.2rem", color: "white" }}>
                    {" "}
                    This drive ,
                  </span>{" "}
                  to gain knowledge{" "}
                  <span style={{ fontSize: "1.2rem", color: "white" }}>
                    through my trial and error
                  </span>{" "}
                  and my experience
                </p>
              </div>
            </div>
            <div className="about-hero-part1">
              <section>
                <div className="allow-scroll">
                  {experience.map((item, index) => {
                    console.log("index: ", index);
                    if (index === 0) {
                      return (
                        <div className="exp-body">
                          <div className="points">
                            <div className="small-line"></div>
                            <div className="square"></div>
                          </div>
                          <div className="exp-img">
                            <img src={item.img} />
                          </div>
                          <div className="exp-card">
                            <p className="role">{item.role}</p>
                            <label>{item.projectTitle}</label>
                            <p>{item.myperformance}</p>
                            <span>{item.period}</span>
                          </div>
                        </div>
                      );
                    } else if (index === experience.length - 1) {
                      return (
                        <div className="exp-body">
                          <div className="points">
                            <div className="square"></div>
                            <div className="small-line"></div>
                          </div>
                          <div className="exp-img">
                            <img src={item.img} />
                          </div>
                          <div className="exp-card">
                            <p className="role">{item.role}</p>
                            <label>{item.projectTitle}</label>
                            <p>{item.myperformance}</p>
                            <span>{item.period}</span>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div className="exp-body">
                          <div className="points">
                            <div className="line"></div>
                            <div className="square"></div>
                            <div className="line"></div>
                          </div>
                          <div className="exp-img">
                            <img src={item.img} />
                          </div>
                          <div className="exp-card">
                            <p className="role">{item.role}</p>
                            <label>{item.projectTitle}</label>
                            <p>{item.myperformance}</p>
                            <span>{item.period}</span>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
};

export default About;
