import React, { useState } from "react";
import Nav from "./Nav";
import "../styles/Contact.css";
import {
  EnvelopeOpenIcon,
  EnvelopeIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

const ContactMe = () => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <>
      <Nav />

      <div className="contact-parent">
        <div className="contact-title">
          <label>Hey👋 , You can find me from here!</label>
        </div>
        <div className="contacts">
          <section className="contacts-item">
            <a
              href="/"
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
          <section className="contacts-item">
            <a href="/">
              <div className="contact-icon">
                <i class="fab fa-brands fa-whatsapp" />
              </div>
              <span>+91-9664605041</span>
            </a>
          </section>
        </div>

        <div className="contact-message">
          <form>
            <section>
              <input type="text" placeholder="your name" />
              <input type="text" placeholder="your email id" />
              <input type="text" placeholder="subject" />
              <textarea placeholder="your message" />
            </section>
            <button>
              <label>send message</label>
              <RocketLaunchIcon className="icon" />
            </button>
          </form>
        </div>

        <div className="contact-socials">
          <a href="">
            <section>
              <span>
                <i class="fab fa-brands fa-instagram" />
              </span>
            </section>
          </a>

          <a href="">
            <section>
              <span>
                <i class="fab fa-brands fa-linkedin-in" />
              </span>
            </section>
          </a>

          <a href="">
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
};

export default ContactMe;
