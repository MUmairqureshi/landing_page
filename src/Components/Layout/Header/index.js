import { useState, useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
// import { FaBars } from 'react-icons/fa'; // Using react-icons for Font Awesome

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ticktopicon from '../../../asserts/images/ticktopicon.png'
import flagicon from '../../../asserts/images/flagicon.png'
import notificationicon from '../../../asserts/images/notificationicon.png'
import cemra from '../../../asserts/images/cemra.png'
import twittericon from '../../../asserts/images/twittericon.png'
import logo from "../../../asserts/images/logo.png";
import "./style.css";

import { Link } from "react-router-dom";
import { Dropdown } from "bootstrap";

export const Header = (props) => {
  const navigate = useNavigate();
  const [mana, setMana] = useState("");
  console.log("mana", mana);




  const [naveshow, setNavshow] = useState(false);
  const handleclick = () => {
    setNavshow((prevState) => !prevState);
 
  };

  

  const [industries, setindustriesshow] = useState(false);
  const handleindustriea = () => {
    setNavshow(false);
    setindustriesshow(!industries);
  };

  return (
    <section class="techVerse_navbar">
      {/* navbar-expand-lg */}
      <nav class="navbar  navbar-expand-lg ">
        <div className="container">
          <Link class="navbar-brand techVerse_logo" to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
             <i class="fa-solid fa-bars" type="button "                   onClick={handleclick} ></i>
            </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link class="nav-link" to={"/"}>

                  <img className="image-icon" src={ticktopicon} />
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/"}>

                  <img className="image-icon" src={cemra} />
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/"}>

                  <img className="image-icon" src={twittericon} />
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/"}>

                  <img className="image-icon" src={notificationicon} />
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to={"/"}>

                  {/* <img className="image-icon" src={flagicon} /> */}
                  <span className="login-btn">Log in </span>
                </Link>
              </li>

              <li class="nav-item dropstart">
                <Link
                  type="button"
 
                  class="nav-link"
                >
                  <span class="dropdown-toggle"></span>  <img className="image-icon" src={flagicon} /> English
                </Link>
              </li>



            </ul>
          </div>


        </div>
      </nav>










{naveshow === true && (



      <ul class="responsivenavbar-nav me-auto mb-2 mb-lg-0">
       <div className="responsiveheader">  <span>    <Link class="navbar-brand techVerse_logo" to={"/"}>
          <img src={logo} alt="" />
        </Link ></span>
        <span>  <i class="fa-solid fa-times menu-icon" id="close-icon" type="button "                   onClick={handleclick} ></i></span></div>
        <div className="dropdown_menu_divider"></div>
        <li class="main-navbar-list"><Link class="new_main-navbar-list" to="/">DINE WITH US</Link></li> <div className="dropdown_menu_divider"></div>
        <li class="main-navbar-list"><Link class="new_main-navbar-list" to="/ ">PLAN YOUR VISIT</Link></li> <div className="dropdown_menu_divider"></div>
        <li class="main-navbar-list"><Link class="new_main-navbar-list" to="/ ">EVENTS</Link></li> <div className="dropdown_menu_divider"></div>
        <li class="main-navbar-list"><Link class="new_main-navbar-list" to="/ ">VIEW GROVES MAP</Link></li> <div className="dropdown_menu_divider"></div>
        <li class="main-navbar-list"><Link class="new_main-navbar-list" to="/ ">OUT STORY</Link></li> <div className="dropdown_menu_divider"></div>
        <li class="main-navbar-list"><Link class="new_main-navbar-list" to="/">CONTACT</Link></li> <div className="dropdown_menu_divider"></div>

        <li class="main-navbar-list">
          <Link
            type="button"
            onClick={handleclick}
            class="new_main-navbar-list"
          >
            <span class="dropdown-toggle"></span>  <img className="image-icon" src={flagicon} /> English
          </Link>
        </li>
        <div className="dropdown_menu_divider"></div>
        <li class="main-navbar-list">
          <Link class="new_main-navbar-list" to={"/"}>

            {/* <img className="image-icon" src={flagicon} /> */}
            <span className="login-btn">Log in </span>
          </Link>
        </li>
        <div className="dropdown_menu_divider"></div></ul>)}












    </section>
  );
};