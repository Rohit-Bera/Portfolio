import React, { useEffect, useState } from "react";
import "../styles/Footer.css";
import {
  EnvelopeIcon,
  PhoneArrowDownLeftIcon,
  PaperAirplaneIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import rocket from "../resources/rocketLoader.gif";

import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  AOS.init({
    offset: 200,
    duration: 1000,
  });

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
  const [loader, setLoader] = useState(false);

  const [mail, setMail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
  };

  const setMailInputs = (e) => {
    setMail({ ...mail, [e.target.name]: e.target.value });
  };

  const sentMail = async () => {
    console.log("mail: ", mail);

    if (
      mail.email === "" ||
      mail.name === "" ||
      mail.message === "" ||
      mail.subject === ""
    ) {
      return null;
    }

    try {
      setLoader(true);
      const mailSent = await axios.post(
        "https://mail-server-ywy9.onrender.com/sentMail",
        mail
      );
      console.log("mailSent: ", mailSent);

      if (mailSent.data.status === 200) {
        setLoader(false);
        setMail({
          name: "",
          email: "",
          message: "",
          subject: "",
        });
      } else {
        setLoader(false);
        setMail({
          name: "",
          email: "",
          message: "",
          subject: "",
        });
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

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
              {windowSize[0] <= 500 ? (
                <div className="footer-head">
                  <a href="">
                    <section data-aos="fade-up">
                      <button>
                        <i class="fab fa-brands fa-instagram" />
                      </button>
                    </section>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rohit-bera22"
                    target="_blank"
                  >
                    <section data-aos="fade-up">
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
                    <section data-aos="fade-up">
                      <button>
                        <i class="fab fa-brands fa-github-alt" />
                      </button>
                    </section>
                  </a>
                  <a href="">
                    <section data-aos="fade-up">
                      <button>
                        <EnvelopeIcon height={25} width={25} />
                      </button>
                    </section>
                  </a>
                </div>
              ) : (
                <div className="footer-head">
                  <a
                    href="https://www.instagram.com/_lost.semicolon/"
                    target="_blank"
                  >
                    <section data-aos="fade-up">
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
                    <section data-aos="fade-up">
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
                    <section data-aos="fade-up">
                      <button>
                        <i class="fab fa-brands fa-github-alt" />
                      </button>
                      <span>Rohit-Bera</span>
                    </section>
                  </a>
                  <a href="">
                    <section data-aos="fade-up">
                      <button>
                        <EnvelopeIcon height={25} width={25} />
                      </button>
                      <span>rohit.glsica19@gmail.com</span>
                    </section>
                  </a>
                </div>
              )}
              <div className="footer-body">
                <form onSubmit={(e) => submitForm(e)}>
                  <section className="footer-part-1">
                    <input
                      type="text"
                      placeholder="your name"
                      name="name"
                      value={mail.name}
                      onChange={setMailInputs}
                      required
                      data-aos="fade-up"
                    />
                  </section>
                  <section className="footer-part-2">
                    <input
                      type="text"
                      placeholder="your email id"
                      name="email"
                      value={mail.email}
                      onChange={setMailInputs}
                      required
                      data-aos="fade-up"
                    />
                  </section>
                  <section className="footer-part-2">
                    <input
                      type="text"
                      placeholder="subject"
                      name="subject"
                      value={mail.subject}
                      onChange={setMailInputs}
                      required
                      data-aos="fade-up"
                    />
                  </section>
                  <section className="footer-part-3">
                    <textarea
                      placeholder="your message"
                      name="message"
                      value={mail.message}
                      onChange={setMailInputs}
                      required
                      data-aos="fade-up"
                    />
                  </section>
                  <button onClick={() => sentMail()}>
                    {loader ? (
                      <>
                        <img src={rocket} />
                      </>
                    ) : (
                      <>
                        <label>send message</label>
                        <RocketLaunchIcon className="icon" />
                      </>
                    )}
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
