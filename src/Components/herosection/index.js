import React from "react";
import arrowimage from '../../asserts/images/arrow.png'
// import androidiconw from "../../../src/asserts/images/android-icon-w.webp";
// import angularicon from "../../../src/asserts/images/angular-icon.webp";
// import appleicon from "../../../src/asserts/images/apple-icon.webp";

// import fluttericon from "../../../src/asserts/images/flutter-icon.webp";
// import reacticon from "../../../src/asserts/images/react-icon.webp";
import './style.css'
const HeroSection = (props) => {
  const { CtnbuttonComponent, ctnButtonProps } = props;
  return (
    <div>
      <section class="inner_hero">
        <div class={props?.classheroimage}></div>
        {/* <div className=' '> */}
        {/* width-1600 */}
        <div class={props.innerbgclass}></div>
        <div className="width-1600 ">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="inner_hero_content">
                  <h1
                   
                  >
                    {props?.title}
                    <span class="color-lightBlue1">
                      {" "}
                      {props?.subtitle}
                    </span>{" "}
                    {props?.title2}
                    <span class="color-lightBlue1">
                    
                      {props?.subtitle2}
                    </span>{" "}
                    {props?.title3}
                  </h1>
                  <p className="herotextpara"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    // data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    {props?.tagline}{" "}
                  </p>
                  {/* <div class="hero_social-icons">
                    <a href="#" class="hero_social-icon">
                      <img src={androidiconw} alt="" />
                    </a>
                    <a href="#" class="hero_social-icon">
                      <img src={angularicon} alt="" />
                    </a>
                    <a href="#" class="hero_social-icon">
                      <img src={appleicon} alt="" />
                    </a>
                    <a href="#" class="hero_social-icon">
                      <img src={fluttericon} alt="" />
                    </a>
                    <a href="#" class="hero_social-icon">
                      <img src={reacticon} alt="" />
                    </a>
                  </div> */}
              <button className='herobtnpara'>Book reservation row <img className='generalsccessarrow' src={arrowimage} /> </button>
                  {/* {CtnbuttonComponent && (
                    <CtnbuttonComponent {...ctnButtonProps} />
                  )} */}
                </div>
              </div>
              <div class="col-md-6 inner-hero_rightCol">
                <div class="inner_hero_img">
                  <img
                    className={props?.className}
                    src={props?.heroimage}
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default HeroSection;