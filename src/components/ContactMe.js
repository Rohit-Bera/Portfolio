import React, { useState } from "react";
import Nav from "./Nav";
import "../styles/Contact.css";
import {
  EnvelopeOpenIcon,
  EnvelopeIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import rocket from "../resources/rocketLoader.gif";
import LoaderPage from "./LoaderPage";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactMe = () => {
  AOS.init({
    offset: 200,
    duration: 1000,
  });

  const [mouseOver, setMouseOver] = useState(false);
  const [loader, setLoader] = useState(false);

  const [mail, setMail] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setLoaded] = useState(true);

  const spinner = document.getElementById("spinner");

  if (spinner) {
    setTimeout(() => {
      setLoaded(false);
    }, 2500);
  }

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

  if (isLoading) {
    return <LoaderPage />;
  } else {
    return (
      <>
        <Nav />

        <div className="contact-parent">
          <div className="contact-title" data-aos="fade-up">
            <label data-aos="fade-up">Hey👋 , You can find me from here!</label>
          </div>
          <div className="contacts" data-aos="fade-up">
            <section className="contacts-item" >
              <a
                href="mailto:rohit.glsica19@gmail.com"
                onMouseOver={() => setMouseOver(true)}
                onMouseOut={() => setMouseOver(false)}
              >
                <div className="contact-icon">
                  {mouseOver ? (
                    <EnvelopeOpenIcon className="icon" />
                  ) : (
                    <EnvelopeIcon className="icon" />
                  )}
                </div>
                <span>rohit.glsica19@gmail.com</span>
              </a>
            </section>
            <section className="contacts-item" >
              <a href="https://wa.me/919664605041">
                <div className="contact-icon">
                  <i class="fab fa-brands fa-whatsapp" />
                </div>
                <span>+91-9664605041</span>
              </a>
            </section>
          </div>

          <div className="contact-message">
            <form onSubmit={(e) => submitForm(e)}>
              <section>
                <input
                  type="text"
                  placeholder="your name"
                  name="name"
                  value={mail.name}
                  onChange={setMailInputs}
                  required
                  data-aos="fade-up"
                />
                <input
                  type="text"
                  placeholder="your email id"
                  name="email"
                  value={mail.email}
                  onChange={setMailInputs}
                  required
                  data-aos="fade-up"
                />
                <input
                  type="text"
                  placeholder="subject"
                  name="subject"
                  value={mail.subject}
                  onChange={setMailInputs}
                  required
                  data-aos="fade-up"
                />
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

          <div className="contact-socials">
            <a
              href="https://www.instagram.com/_lost.semicolon/"
              target="_blank"
            >
              <section>
                <span>
                  <i class="fab fa-brands fa-instagram" />
                </span>
              </section>
            </a>

            <a href="https://www.linkedin.com/in/rohit-bera22" target="_blank">
              <section>
                <span>
                  <i class="fab fa-brands fa-linkedin-in" />
                </span>
              </section>
            </a>

            <a href="https://github.com/Rohit-Bera" target="_blank">
              <section>
                <span>
                  <i class="fab fa-brands fa-github-alt" />
                </span>
              </section>
            </a>
          </div>
        </div>
      </>
    );
  }
};

export default ContactMe;
