<section className="best_blinds_section">
<Container>
  <Row>
    <Col md={12}>
      <div className="pt-4 pb-3">
        <div className="d-flex align-items-center justify-content-center gap-4">
          <h2 className="primaryHeading">Find ThE Best</h2>

          <div className="heroHeadingImg">
            <img src={heroHeadingImg} alt="hero"></img>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-center gap-4 pt-2 moving_text_further">

          <div className="heroHeadingImg02">
            <img src={heroHeadingFlowerImg} alt="hero"></img>
          </div>

          <h2 className="primaryHeading">BLINDS & SHADES</h2>
        </div>
      </div>
    </Col>
  </Row>
</Container>

<div className='position-relative'>
  <div className="sunFlowerImg">
          <img src={heroHeadingSunImg} alt="sunflower_icon"></img>
        </div>
<div className="hero_section_imgs">
  <Row>
    <Col sm={4} md={4} xs={4} lg={4}>
      <div className="d-flex justify-content-end h-100 flex-column left_hero_img">
        <p className="hero_para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
          mod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali
          quip ex ea commodo consequat uis aute irure dolor in repreh
          enderit in voluptate velit esse.
        </p>

        <div>
          <img src={heroSectionImg01} alt="" className="img-fluid"></img>
        </div>
      </div>
    </Col>

    <Col xs={8} md={8} sm={8} lg={8}>
      <div className="position-relative h-100">
        <div className='h-100'>
          <img src={heroSectionImg02} alt="" className="img-fluid h-100"></img>
        </div>
        {/* <div className="sunFlowerImg">
          <img src={heroHeadingSunImg} alt="sunflower_icon"></img>
        </div> */}
      </div>
    </Col>
  </Row>
</div>
</div>




</section>






















































































































import { useState, useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";

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
    // setindustriesshow(false);
  };

  // console.log("naveshow" , naveshow)

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
            {/* <!-- <span class="navbar-toggler-icon"></span> --> */}
            <i class="fa-solid fa-bars"></i>
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
                  onClick={handleclick}
                  class="nav-link"
                >
                  <span class="dropdown-toggle"></span>  <img className="image-icon" src={flagicon} /> English
                </Link>
              </li>


              {/* <li class="nav-item dropdown">
              <Link
                onClick={handleindustriea}
                type="button"
                class="nav-link dropdown-toggle"
              >
                Industries
              </Link>
              <div class="" aria-labelledby="navbarDropdown"></div>
            </li> */}
              {/* <li class="nav-item">
              <Link class="nav-link" to={"/case-study"}>
                Case study
              </Link>
            </li> */}
              {/* <li className="nav-item">
              <a className="nav-link" href="https://techversellc.com/blogs/">
                Blogs
              </a>
            </li> */}

              {/* <li class="nav-item">
              <Link class="nav-link" to={"/contact"}>
                Contact
              </Link>
            </li> */}
              {/* 
            <li class="nav-item icon_list_item">
              <Link to="/" class="nav-link">
                <span class="icon_list_icon">
                  <i class="fa-solid fa-envelope"></i>
                </span>
                <span class="icon_list_text"> info@techversellc.com </span>
              </Link>
            </li> */}
            </ul>
          </div>


        </div>
      </nav>
{/* 
      {naveshow === true && (
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-9 col-md-8 customDropdown_leftCol">
              <div class="customDropdown_left">
                <div class="dropdown_head">
                  <div class="row align-items-center">
                    <div class="col-lg-3 col-md-12">
                      <div class="dropdown_title">
                        <h3>Services</h3>
                      </div>
                    </div>
                    <div class="col-lg-9 col-md-12">
                      <div class="dropdown_desc">
                        <p>
                          Leading to the next-gen digital solutions that help
                          businesses to fulfill their needs in the digital era.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="dropdown_content">
                  <div class="row">
                    <div class="col-md-6 col-xl-4">
                      <ul class="custom_dropdown_list">
                        <li>
                          <div class="dropdown_linkBox">
                            <Link to={"/mobile-app"}>
                              <h4>Mobile Application Development</h4>
                            </Link>
                            <p>Custom Mobile App Development</p>
                          </div>
                        </li>
                        <li>
                          <div class="dropdown_linkBox">
                            <Link to={"/ecommerse-development"}>
                              <h4>E-Commerce Development</h4>
                            </Link>
                            <p>Top-Of-The-Line Ecommerce Solutions</p>
                          </div>
                        </li>
                        <li>
                          <div class="dropdown_linkBox">
                            <Link to={"/app-store"}>
                              <h4>App Store</h4>
                            </Link>
                            <p>Optimization Development Company</p>
                          </div>
                        </li>
                        <li>
                          <div class="dropdown_linkBox">
                            <Link to={"/business-devlopment"}>
                              <h4>Business Development</h4>
                            </Link>
                            <p>Optimization Development Company</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6 col-xl-4">
                      <ul class="custom_dropdown_list">
                        <li>
                          <div class="dropdown_linkBox">
                            <Link to={"/web-development"}>
                              <h4>Web Development</h4>
                            </Link>
                            <p>Optimization Development Company</p>
                          </div>
                        </li>
                        <li>
                          <div class="dropdown_linkBox">
                            <Link to={"/digital-marketing"}>
                              <h4>Digital Marketing</h4>
                            </Link>
                            <p>Digital Marketing Agency USA</p>
                          </div>
                        </li>
                        <li>
                          <div class="dropdown_linkBox">
                            <Link to={"/web-application"}>
                              <h4>Web Application</h4>
                            </Link>
                            <p>Web Application</p>
                          </div>
                          <div class="dropdown_linkBox">
                            <Link to={"/Devops"}>
                              <h4>DevOps</h4>
                            </Link>
                            <p>DevOps</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 custom_dropdown_sidebar">
              <div class="">
                <h3 class="custom_dropdown_sidebarTitle">How We Work?</h3>
                <ul class="custom_dropdown_list">
                  <li>
                    <div class="dropdown_linkBox">
                      <Link to={"/"}>
                        <h4>Design</h4>
                      </Link>
                      <p>Compelling and Eye-Catching Designs.</p>
                    </div>
                  </li>
                  <li>
                    <div class="dropdown_linkBox">
                      <Link to={"/"}>
                        <h4>Development</h4>
                      </Link>
                      <p>Agile Working Methodologies.</p>
                    </div>
                  </li>
                  <li>
                    <div class="dropdown_linkBox">
                      <Link to={"/"}>
                        <h4>Testing</h4>
                      </Link>
                      <p>Agile Working Methodologies.</p>
                    </div>
                  </li>
                  <li>
                    <div class="dropdown_linkBox">
                      <Link to={"/"}>
                        <h4>Deployment</h4>
                      </Link>
                      <p>Seamless Launch of Product.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
}; 















































































































import { useState, useEffect, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

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
    // setindustriesshow(false);
  };

  // console.log("naveshow" , naveshow)

  const [industries, setindustriesshow] = useState(false);
  const handleindustriea = () => {
    setNavshow(false);
    setindustriesshow(!industries);
  }; 

  return (
    <section class="techVerse_navbar">
      {/* navbar-expand-lg */}
      {/* <nav class="navbar  navbar-expand-lg "> */}
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3"> 
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
            {/* <!-- <span class="navbar-toggler-icon"></span> --> */}
            <i class="fa-solid fa-bars"></i>
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
                  onClick={handleclick}
                  class="nav-link"
                >
                  <span class="dropdown-toggle"></span>  <img className="image-icon" src={flagicon} /> English
                </Link>
              </li>

 
            </ul>
          </div>


        </div>
      {/* </nav> */}
      </Navbar>
      ))}
 
    </section>
  );
};