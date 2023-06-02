import React, { useRef, useState, useEffect } from "react";
import "../styles/Nav.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ForwardIcon,
  BackwardIcon,
  BarsArrowDownIcon,
} from "@heroicons/react/24/solid";

const Nav = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const navigate = useNavigate();
  // navigate("/contactme");

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an option");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  if (windowSize[0] <= 780) {
    return (
      <>
        <div className="nav">
          <div className="nav-logo">
            <label>Rohit Bera</label>
            <p>developer</p>
            {/* <img src={logo} /> */}
          </div>

          <div className="nav-dropdown">
            <button className="dropbtn">
              <BarsArrowDownIcon height={25} width={25} />
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="nav">
          <div className="nav-logo">
            <label>Rohit Bera</label>
            <p>developer</p>
            {/* <img src={logo} /> */}
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/aboutMe">About</Link>
            <Link to="/projectsIdid">Projects</Link>
            <Link to="/serviceIprovide">Service</Link>
            <Link to="/contactme">Contact</Link>
          </div>
          <div className="nav-app">
            <a href="">
              <div className="nav-app-link">
                <i class="fab fa-github" />
              </div>
            </a>
            <a href="">
              <div className="nav-app-link">
                <i class="fab fa-linkedin-in" />
              </div>
            </a>
          </div>
        </div>
      </>
    );
  }
};

export default Nav;
