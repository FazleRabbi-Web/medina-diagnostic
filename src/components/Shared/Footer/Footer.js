import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FooterQuickLinks from "../FooterQuickLinks/FooterQuickLinks";

const Footer = () => {
  return (
    <footer className="py-5" style={{ backgroundColor: "#2a93c9" }}>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center text-white">
          <div className="col-md-4 d-flex">
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{ fontSize: "40px" }}
            />
            <p className="ms-2 fw-bolder">
              2130 Fulton Street San Diego, CA 94117-1080 USA
            </p>
          </div>
          <div className="col-md-4 ">
            <h4>Quick Links</h4>
            <div>
              <FooterQuickLinks></FooterQuickLinks>
            </div>
          </div>
          <div className="col-md-4">
            <h4>NEWSLETTER</h4>
            <p>
              Enter your email address to receive up-to-date news, new patient
              information and other useful stuff, delivered right to your inbox.
            </p>
            <div>
              <input
                className="mb-2 p-1"
                type="email"
                placeholder="enter your email"
              />
              <button className="ms-1 fw-bold p-1 bg-danger text-white border-0 px-3">
                Subscribe
              </button>
            </div>
            <div
              className="d-flex justify-content-between me-3 pe-3"
              style={{ fontSize: "2em" }}
            >
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
