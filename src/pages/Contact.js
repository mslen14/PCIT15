import React from "react";
import "./Contact.css";

import Navbar from "./Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons/faGlobeEurope";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="contact section" id="contact">
        <div className="container">
          <div className="container">
            <div className="row">
              <h1>Contact Me</h1>
            </div>
          </div>
          <h3 className="contact-title padd-15 fw-bold">
            Have You Any Questions ?
          </h3>
          <h4 className="contact-sub-title padd-15 fw-bold">
            I'M AT YOUR SERVICES
          </h4>
          <div className="row">
            <div className="contact-info-item padd-15">
              <div className="icon">
                <FontAwesomeIcon className="i" icon={faPhone} />
              </div>
              <h4>Call Us On</h4>
              <p>+63 9636 173 142</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <FontAwesomeIcon className="i" icon={faMapMarkedAlt} />
              </div>
              <h4>Office</h4>
              <p>Philippines</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <FontAwesomeIcon className="i" icon={faEnvelope} />
              </div>
              <h4>Email</h4>
              <p>jessielendaguia2001@gmail.com</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <FontAwesomeIcon className="i" icon={faGlobeEurope} />
              </div>
              <h4>Website</h4>
              <p>www.domain.com</p>
            </div>
          </div>
          <h3 className="contact-title padd-15 fw-bold">SEND ME AN EMAIL</h3>
          <h4 className="contact-sub-title padd-15 fw-bold">
            write your message
          </h4>
          <div className="row">
            <div className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; Copyright By:
              <a href="/" className="ms-2">
                <span>Jessielen M. Daguia</span>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
