import { useLocation } from "react-router-dom";
// import bicon from "../../../asserts/images/b-icon.webp";
import { Link } from "react-router-dom";
import apple from '../../../asserts/images/applrstore.png'
import google from '../../../asserts/images/google.png'
// import starticon from "../../../asserts/images/start-icon.webp";
import ticktopicon from '../../../asserts/images/ticktopicon.png'
import flagicon from '../../../asserts/images/flagicon.png'
import notificationicon from '../../../asserts/images/notificationicon.png'
import cemra from '../../../asserts/images/cemra.png'
import twittericon from '../../../asserts/images/twittericon.png'
import logo from "../../../asserts/images/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   Logo,
//   mainSiteLogo,
//   dmca,
//   dmcacomplaint,
//   footerCertificate,
//   playstore,
// } from "../../../asserts/images";
// import partnersbbb from "../../../asserts/images/partners-bbb.webp";
// import arrowicon from "../../../asserts/images/arrow-icon.webp";
// import goodfirms from "../../../asserts/images/good-firms.webp";
// import partnersclutch from "../../../asserts/images/partners-clutch.webp";
// import bluecubelarge from "../../../asserts/images/blue-cube-large.webp";
// import partnerstruspilot from "../../../asserts/images/partners-trus-pilot.webp";

// import contactUslaptop from "../../../asserts/images/contactUs-laptop.webp";
// import SuperToroidOrangeGlossy from "../../../asserts/images/SuperToroid-Orange-Glossy.webp";



// mainSiteLogo

import "./style.css";

export const Footer = (props) => {








  const industries = [
    { key: "real-estate-and-property", name: "Real Estate & Property" },
    { key: "automotive-and-transport", name: "Automotive and Transport" },
    { key: "eCommerse-and-retail", name: "E-commerce & Retails" },
    { key: "advertizing", name: "Advertising" },
    { key: "edu-hr", name: "Education & HR" },
    { key: "health-science", name: "Health and Life Sciences" },
    { key: "software-tech", name: "Software & High Tech" },
    { key: "finance", name: "Finance" },
    { key: "media-entertainment", name: "Media & Entertainment" },
    { key: "sports-leagues", name: "Sports Teams & Leagues" },
    { key: "travel-hospitality", name: "Travel & Hospitality" },
  ];


  return (
    <>
<footer className="custom-footer   ">
  <div className="container">
    <div className="row top-columns">
      <div className="col-md-6 top-column d-flex flex-column flex-md-row">
        <div className="flex-fill me-md-3">
          <h5 className="footer-title" style={{ marginBottom: '0' }}>Join us for an</h5>
          <span className="footer-title">unforgettable experience</span>
        </div>
        <div className="flex-fill footertitle2">
          <h5>Download the Groves App</h5>
          <p><img src={apple} alt="Apple Store" /> <img src={google} alt="Google Play" /></p>
        </div>
      </div>
    </div>
    <div className="row bottom-columns">
      <div className="col-md-4 bottom-column mb-4">
        <p>LOCATION</p>
        <p>Al-hizam Part</p>
        <p>Al-semairi, Uanbu Al Bahr 46455</p>
        <p>Riyadh Saudi Arabia</p>
      </div>
      <div className="col-md-4 bottom-column mb-4">
        <p>WORKING HOURS</p>
        <p>Fri & Sat: 2:30PM</p>
        <p>Gates Close at:</p>
        <p>Sat until Wed: 12:00AM</p>
        <p>Thu & Fri 12:20AM</p>
      </div>
      <div className="col-md-4 bottom-column mb-4">
        <h5>GUEST SERVICES CALL</h5>
        <p>cc@thegroves-sa.com</p>
        <p>+524352345223</p>
      </div>
    </div>

    <div className="container    ">
      <div className="d-flex flex-column  flex-md-row justify-content-between align-items-center">
        <Link className="navbar-brand techVerse_logo" to={"/"}>
          <img src={logo} alt="TechVerse Logo" />
        </Link>

        <div className="d-flex" id="navbarNavDropdown">
        <ul className="navbar-nav d-flex flex-row align-items-center gap-3">
  <li className="nav-item ml-4">
    <Link className="nav-link" to={"/"}>
      <img className="image-icon" src={ticktopicon} alt="Ticktop" />
    </Link>
  </li>
  <li className="nav-item ml-4">
    <Link className="nav-link" to={"/"}>
      <img className="image-icon" src={cemra} alt="Camera" />
    </Link>
  </li>
  <li className="nav-item ml-4">
    <Link className="nav-link" to={"/"}>
      <img className="image-icon" src={twittericon} alt="Twitter" />
    </Link>
  </li>
  <li className="nav-item ml-4">
    <Link className="nav-link" to={"/"}>
      <img className="image-icon" src={notificationicon} alt="Notifications" />
    </Link>
  </li>
</ul>



        </div>
      </div>
    </div>
  </div>
</footer>



    </>
  );
};