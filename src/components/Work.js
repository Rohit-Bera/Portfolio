import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "../styles/Projects.css";
import { Link, useNavigate } from "react-router-dom";
import projectImg from "../source/alexandra-diaconu-VuBzplNNi0k-unsplash.jpg";
import projectLogo from "../source/daniil-silantev-9R6NwFop9fs-unsplash.jpg";
import {
  ArrowDownTrayIcon,
  PaperAirplaneIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  ChartPieIcon,
  ArrowTopRightOnSquareIcon,
  ForwardIcon,
} from "@heroicons/react/24/outline";

// logo
import recreatelogo from "../resources/recreateLogo.png";
import taskifylogo from "../resources/taskifyLogo.png";
import medshublogo from "../resources/medshubweblogo.png";
import goldapplogo from "../resources/goldwebLogo.png";

// images
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
import LoaderPage from "./LoaderPage";

const Work = () => {
  const navigation = useNavigate();

  const spinner = document.getElementById("spinner");

  const [isLoading, setLoaded] = useState(true);

  if (spinner) {
    setTimeout(() => {
      setLoaded(false);
    }, 2000);
  }

  const projects = [
    {
      bgColor: "#C9A7EB",
      type: "app",
      projectImg: [recreate1, recreate2, recreate3, recreate4],
      projectLogo: recreatelogo,
      projectTitle: "Recreate",
      projectDescription: "app to book services from local service providers.",
      projectLongDescription:
        "ReCreate is an application which provide services to local people in which we are mediator between a customer/user and a worker. Local workers like Electrician , A.C. repairer , Geyser repairer , Water purifier repairer , painter , Carpenter , Plumber etc will connect to our application for providing their services. Local people before joining our system , had to search for these helpers , workers but , after joining our system , will get the services at the door step.",
      techStack: [
        "figma",
        "react-native",
        "expo-cli",
        "nodejs",
        "expressjs",
        "mongodb",
        "stripe",
      ],
      githubRepoFrontend: "https://github.com/Rohit-Bera/recreate_frontend",
      githubRepoBackend: "https://github.com/Rohit-Bera/recreate_backend",
      projectLink:
        "https://expo.dev/accounts/0verlord/projects/ReCreate/builds/3a118c89-675a-49b8-adae-c3c0eab1f1dd",
    },
    {
      bgColor: "#D4FAFC",
      type: "app",
      projectImg: [taskify1, taskify2, taskify3, taskify4],
      projectLogo: taskifylogo,
      projectTitle: "Taskify",
      projectDescription:
        "app where freelancers complete the tasks provided by the Clients.",
      projectLongDescription:
        "A basic freelancing platform where a client will give the task and the freelancers will bid for the tasks and will complete the task. This System consists of a chat system where freelancer and client can communicate with each other related to tasks. This system also contains payment gateway for client to pay to the freelancer and freelancers to withdraw from there wallet ",
      techStack: [
        "react-native",
        "expo-cli",
        "nodejs",
        "expressjs",
        "mongodb",
        "stripe",
      ],
      githubRepoFrontend: "https://github.com/Montu1302/assignment-frontend",
      githubRepoBackend: "https://github.com/Rohit-Bera/assignment-backend",
      projectLink:
        "https://expo.dev/accounts/0verlord/projects/taskify_frontend/builds/5110b56e-8b65-498d-9935-9d2a62800494",
    },
    {
      bgColor: "",
      type: "web app",
      projectImg: [goldapp1, goldapp2, goldapp3, goldapp4],
      projectLogo: goldapplogo,
      projectTitle: "Gold App",
      projectDescription: "E-commerce platform to buy jwelleries online.",
      projectLongDescription:
        "Gold app built with MERN Stack , an E-commerce web app where user can buy gold jwelleries online . user will get option to add jwelleries to wishlist , add to cart , as well as can place order. " +
        " " +
        "please open this project in laptop!",
      techStack: ["reactjs", "nodejs", "expressjs", "mongodb"],
      githubRepoFrontend: "https://github.com/Rohit-Bera/Frontend-Rohit-Gold",
      githubRepoBackend: "https://github.com/Rohit-Bera/Backend-Rohit-Gold",
      projectLink: "https://rohits-goldapp.vercel.app/",
    },
    {
      bgColor: "",
      type: "web app",
      projectImg: [medshub1, medshub2, medshub3, medshub4],
      projectLogo: medshublogo,
      projectTitle: "Medshub24/7",
      projectDescription:
        "E-commerce platform to buy medicines and health products.",
      projectLongDescription:
        "Pharmacy app built with MERN Stack , an E-commerce web app where user can buy medicinesa and helath product online . user will get option to add medicines to wishlist , add to cart , as well as can place order. User can also upload prescription to order medicines." +
        " " +
        "please open this project in laptop!",
      techStack: ["reactjs", "nodejs", "expressjs", "mongodb"],
      githubRepoFrontend: "https://github.com/Rohit-Bera/medshub-frontend",
      githubRepoBackend: "https://github.com/Rohit-Bera/medshub-server",
      projectLink: "https://medsub24by7.netlify.app/",
    },
  ];

  const viewProject = (item) => {
    console.log("item: ", item);

    navigation("/view-work", {
      state: {
        item,
      },
    });
  };

  if (isLoading) {
    return <LoaderPage />;
  } else {
    return (
      <>
        <Nav />
        <div className="project-container">
          {/* <h3>My Projects</h3> */}
          <div className="project-wrapper">
            {projects.map((item) => {
              return (
                <div className="project-card">
                  <div className="project-img">
                    <img src={item.projectImg[0]} />
                  </div>
                  {/* logo */}
                  <img src={item.projectLogo} className="project-logo" />
                  <div className="project-desc">
                    <div>
                      <section>
                        <label>{item.projectTitle}</label>
                        <span>{item.projectDescription}</span>
                      </section>
                      <button onClick={() => viewProject(item)}>
                        <ArrowTopRightOnSquareIcon className="icon" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default Work;
