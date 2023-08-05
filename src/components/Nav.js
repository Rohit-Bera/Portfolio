import React, { useRef, useState, useEffect } from "react";
import "../styles/Nav.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  ForwardIcon,
  BackwardIcon,
  BarsArrowDownIcon,
  QueueListIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
// import Modal from "react-modal/lib/components/Modal";
// Modal.setAppElement("#root");

const Nav = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  // const navigate = useNavigate();
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

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const Modal = () => {
    return (
      <>
        <div className="modal-wrapper"></div>
        <div className="modal-container">
          <div className="modal-head">
            <button
              onClick={() =>
                modalIsOpen === true
                  ? setModalIsOpen(false)
                  : setModalIsOpen(true)
              }
            >
              <XMarkIcon height={25} width={25} />
            </button>
          </div>
          <div className="modal-links">
            <Link to="/">
              <label>Home</label>
            </Link>
            <Link to="/aboutMe">
              <label>About</label>
            </Link>
            <Link to="/myprojects">
              <label>Projects</label>
            </Link>
            <Link to="/myservice">
              <label>Service</label>
            </Link>
            <Link to="/contactme">
              <label>Contact</label>
            </Link>
          </div>
          <div className="nav-app">
            <a href="https://github.com/Rohit-Bera" target="_blank">
              <button className="nav-app-link">
                <i class="fab fa-github" />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/rohit-bera22" target="_blank">
              <button className="nav-app-link">
                <i class="fab fa-linkedin-in" />
              </button>
            </a>
          </div>
        </div>
      </>
    );
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
            <button
              onClick={() =>
                modalIsOpen === true
                  ? setModalIsOpen(false)
                  : setModalIsOpen(true)
              }
            >
              <QueueListIcon height={25} width={25} />
            </button>
          </div>
        </div>

        {modalIsOpen && <Modal />}
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
            <Link to="/myprojects">Projects</Link>
            <Link to="/myservice">Service</Link>
            <Link to="/contactme">Contact</Link>
          </div>
          <div className="nav-app">
            <a href="https://github.com/Rohit-Bera" target="_blank">
              <div className="nav-app-link">
                <i class="fab fa-github" />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/rohit-bera22" target="_blank">
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
