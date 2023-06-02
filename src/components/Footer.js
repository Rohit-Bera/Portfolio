import React, { useEffect, useState } from "react";
import "../styles/Footer.css";
import {
  EnvelopeIcon,
  PhoneArrowDownLeftIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
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
      <div className="footer">
        <div className="footer-background">
          <div className="footer-container">
            <div className="footer-section-1">
              <label>Socials</label>
            </div>
            <div className="footer-section-2">
              {windowSize[0] <= 426 ? (
                <div className="footer-head">
                  <a href="">
                    <section>
                      <button>
                        <i class="fab fa-brands fa-instagram" />
                      </button>
                    </section>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rohit-bera22"
                    target="_blank"
                  >
                    <section>
                      <button>
                        <i class="fab fa-brands fa-linkedin-in" />
                      </button>
                    </section>
                  </a>
                  {/* <section>
                <button><i class="fab fa-brands fa-whatsapp" /></button>
                <span>whatsapp</span>
              </section> */}
                  <a href="https://github.com/Rohit-Bera" target="_blank">
                    <section>
                      <button>
                        <i class="fab fa-brands fa-github-alt" />
                      </button>
                    </section>
                  </a>
                  <a href="">
                    <section>
                      <button>
                        <EnvelopeIcon height={25} width={25} />
                      </button>
                    </section>
                  </a>
                </div>
              ) : (
                <div className="footer-head">
                  <a href="">
                    <section>
                      <button>
                        <i class="fab fa-brands fa-instagram" />
                      </button>
                      <span>_lost.semicolon</span>
                    </section>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rohit-bera22"
                    target="_blank"
                  >
                    <section>
                      <button>
                        <i class="fab fa-brands fa-linkedin-in" />
                      </button>
                      <span>/rohit-bera22/</span>
                    </section>
                  </a>
                  {/* <section>
                <button><i class="fab fa-brands fa-whatsapp" /></button>
                <span>whatsapp</span>
              </section> */}
                  <a href="https://github.com/Rohit-Bera" target="_blank">
                    <section>
                      <button>
                        <i class="fab fa-brands fa-github-alt" />
                      </button>
                      <span>Rohit-Bera</span>
                    </section>
                  </a>
                  <a href="">
                    <section>
                      <button>
                        <EnvelopeIcon height={25} width={25} />
                      </button>
                      <span>rohitbusinessdummy@gmail.com</span>
                    </section>
                  </a>
                </div>
              )}
              <div className="footer-body">
                <form>
                  <section className="footer-part-1">
                    <input type="text" placeholder="your name" />
                  </section>
                  <section className="footer-part-2">
                    <input type="text" placeholder="your email" />
                  </section>
                  <section className="footer-part-3">
                    <textarea placeholder="your message" />
                  </section>
                  <button>
                    <span>send message</span>
                    <PaperAirplaneIcon height={25} width={25} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-links">
          <p>copyright @2023 rohit bera</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
