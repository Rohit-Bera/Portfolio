import React, { useRef, useState, useEffect } from "react";
import "../styles/Nav.css";
import { Link, NavLink } from "react-router-dom";
import { ForwardIcon, BackwardIcon } from "@heroicons/react/24/solid";

const Nav = () => {
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

  // if (windowSize[0] <= 780) {
  //   return (
  //     <>
  //       <div className="nav">
  //         <div className="nav-logo">
  //           <label>Rohit Bera</label>
  //           <p>developer</p>
  //           {/* <img src={logo} /> */}
  //         </div>
  //         <div className="nav-header">
  //           <div className="nav-header-link">
  //             <div className="nav-link-1">
  //               <div className="nav-card">
  //                 <Link>
  //                   <h2>Home</h2>
  //                 </Link>

  //                 <Link to="/about">
  //                   <a href="#about">
  //                     <button>
  //                       <ForwardIcon height={30} width={30} />
  //                     </button>
  //                   </a>
  //                 </Link>
  //               </div>

  //               <div className="nav-card" id="about">
  //                 <a href="">
  //                   <button>
  //                     <BackwardIcon height={30} width={30} />
  //                   </button>
  //                 </a>

  //                 <Link>
  //                   <h2>About</h2>
  //                 </Link>

  //                 <a href="">
  //                   <button>
  //                     <ForwardIcon height={30} width={30} />
  //                   </button>
  //                 </a>
  //               </div>

  //               <div className="nav-card">
  //                 <a href="">
  //                   <button>
  //                     <BackwardIcon height={30} width={30} />
  //                   </button>
  //                 </a>

  //                 <Link>
  //                   <h2>Projects</h2>
  //                 </Link>
  //                 <a href="">
  //                   <button>
  //                     <ForwardIcon height={30} width={30} />
  //                   </button>
  //                 </a>
  //               </div>

  //               <div className="nav-card">
  //                 <a href="">
  //                   <button>
  //                     <BackwardIcon height={30} width={30} />
  //                   </button>
  //                 </a>

  //                 <Link>
  //                   <h2>Services</h2>
  //                 </Link>
  //                 <a href="">
  //                   <button>
  //                     <ForwardIcon height={30} width={30} />
  //                   </button>
  //                 </a>
  //               </div>

  //               <div className="nav-card">
  //                 <a href="">
  //                   <button>
  //                     <BackwardIcon height={30} width={30} />
  //                   </button>
  //                 </a>

  //                 <Link>
  //                   <h2>contact</h2>
  //                 </Link>
  //                 <a href="">
  //                   <button>
  //                     <ForwardIcon height={30} width={30} />
  //                   </button>
  //                 </a>
  //               </div>

  //               <div className="nav-card">
  //                 <a href="">
  //                   <button>
  //                     <BackwardIcon height={30} width={30} />
  //                   </button>
  //                 </a>

  //                 <div className="nav-app">
  //                   <a href="">
  //                     <div className="nav-app-link">
  //                       <i class="fab fa-github" />
  //                     </div>
  //                   </a>
  //                   <a href="">
  //                     <div className="nav-app-link">
  //                       <i class="fab fa-linkedin-in" />
  //                     </div>
  //                   </a>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // } else {
  return (
    <>
      <div className="nav">
        <div className="nav-logo">
          <label>Rohit Bera</label>
          <p>developer</p>
          {/* <img src={logo} /> */}
        </div>
        <div className="nav-links">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Projects</Link>
          <Link>Service</Link>
          <Link>Contact</Link>
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
};
// };

export default Nav;
