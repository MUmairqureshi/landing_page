import React, { useEffect, useRef } from "react";
import { UserLayout } from "../../Components/Layout/UserLayout";
// import Portfolios from "../../Components/portfolios";
// import phoneicon from "../../asserts/images/phone-icon.webp";
// import herophonemockupgroup from "../../asserts/images/hero-phone-mockup-group.webp";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import bluecubelarge from "../../asserts/images/blue-cube-large.webp";
// import Particles from "react-particles";
// import ServiceParticle from "../../Components/ServiceParticle/ServiceParticle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade } from "swiper/modules";
// import Portfolio from "../../Components/Portfolio";
// import { gsap } from "gsap";

// import pinkcapsol from "../../asserts/images/pink-capsol.webp";
// import herowebmockupgroup22 from "../../asserts/images/hero-web-mockup-group22.webp";
// import elevengb from "../../asserts/images/1-eleven-gb.webp";
// import framewithphotobg from "../../asserts/images/frame-with-photo-bg.webp";
// import ryderzvanbg from "../../asserts/images/ryderz-van-bg.webp";
// import elevenimg from "../../asserts/images/1-eleven-img.webp";
// import framewithphotoimg from "../../asserts/images/frame-with-photo-img.webp";
// import ryderzvanimg from "../../asserts/images/ryderz-van-img.webp";
// import { loadSlim } from "tsparticles-slim";
// import clutch from "../../asserts/images/clutch.webp";
// import truspilot from "../../asserts/images/trus-pilot.webp";
// import laptopFrame from "../../asserts/images/laptop-Frame.webp";
// import laptop from "../../asserts/images/laptop.webp";
// import donatorange from "../../asserts/images/donat-orange.webp";
// import greencube from "../../asserts/images/green-cube.webp";
// import bbb from "../../asserts/images/bbb.webp";
import { useCallback } from "react";
// import donatblue from "../../asserts/images/donat-blue.webp";
// import chaticon from "../../asserts/images/chat-icon.webp";
// import ConeBlueGlossy from "../../asserts/images/Cone-Blue-Glossy.webp";
// import PillBlueGlossy from "../../asserts/images/Pill-Blue-Glossy.webp";
// import donateWhite from "../../asserts/images/donate-white.webp";
// import peramidicon from "../../asserts/images/peramid-icon.webp";
// import phoneicongreen from "../../asserts/images/phone-icon-green.webp";
// import chaticonblue from "../../asserts/images/phone-icon-green.webp";
// import orangecircle from "../../asserts/images/orange-circle.webp";
// import donatewhitesmall from "../../asserts/images/donate-white-small.webp";
// import orangehalfcircle from "../../asserts/images/orange-half-circle.webp";
// import bluecube from "../../asserts/images/blue-cube.webp";
// import iosicon from "../../asserts/images/ios-icon.webp";
// import smartcontracticon from "../../asserts/images/smart-contract-icon.webp";
// import andriodicon from "../../asserts/images/andriod-icon.webp";
// import customappicon from "../../asserts/images/custom-app-icon.webp";
// import enterprizeicon from "../../asserts/images/enter-prize-icon.webp";
// import crossplatform from "../../asserts/images/cross-platform.webp";
// import portfoliomockup1 from "../../asserts/images/portfolio-mockup-1.webp";
// import mobileframe from "../../asserts/images/mobile-frame.webp";
// import portfoliomockup5 from "../../asserts/images/portfolio-mockup-5.webp";
// import portfoliomockup2 from "../../asserts/images/portfolio-mockup-2.webp";
// import portfoliomockup3 from "../../asserts/images/portfolio-mockup-3.webp";
// import portfoliomockup4 from "../../asserts/images/portfolio-mockup-4.webp";
// import website1 from "../../asserts/images/website-1.webp";
// import website2 from "../../asserts/images/website-2.webp";
// import website3 from "../../asserts/images/website-3.webp";
// import website4 from "../../asserts/images/website-4.webp";
// import heroslidermockupimg3 from "../../asserts/images/hero-slider-mockup-img-3.webp";
// import Macbook from "../../asserts/images/Macbook.webp";
// import peramidangled from "../../asserts/images/peramid-angled.webp";
// import cms1 from "../../asserts/images/Cms-1.webp";
// import cms2 from "../../asserts/images/CMS-2.webp";
// import cms3 from "../../asserts/images/CMS-3.webp";
// import cms4 from "../../asserts/images/CMS-4.webp";
// import irvingsegalbg from "../../asserts/images/irving-segal-bg.webp";
// import irvingsegalimg from "../../asserts/images/irving-segal-img.webp";
// import braincarlislebg from "../../asserts/images/brain-carlisle-bg.webp";
// import braincarlisleimg from "../../asserts/images/brain-carlisle-img.webp";
// import anglebodybg from "../../asserts/images/angle-body-bg.webp";
// import anglebodyimg from "../../asserts/images/angle-body-img.webp";

// import partnerImg1 from "../../asserts/images/partner-img-1.svg";
// import partnerImg2 from "../../asserts/images/partner-img-2.svg";
// import partnerImg3 from "../../asserts/images/partner-img-3.svg";
// import partnerImg4 from "../../asserts/images/partner-img-4.svg";
// import partnerImg5 from "../../asserts/images/partner-img-5.svg";
// import partnerImg6 from "../../asserts/images/partner-img-6.svg";
// import partnerImg7 from "../../asserts/images/partner-img-7.svg";
// import partnerImg8 from "../../asserts/images/partner-img-8.svg";
// import partnerImg9 from "../../asserts/images/partner-img-9.svg";
// import partnerImg10 from "../../asserts/images/partner-img-10.svg";
// import partnerImg11 from "../../asserts/images/partner-img-11.svg";
// import partnerImg12 from "../../asserts/images/partner-img-12.svg";
// import partnerImg13 from "../../asserts/images/partner-img-13.svg";
// import partnerImg14 from "../../asserts/images/partner-img-14.svg";
// import partnerImg15 from "../../asserts/images/partner-img-15.svg";
// import Helmet from '../../Components/Helmet';
// import partnerImg16 from "../../asserts/images/partner-img-16.svg";

// import Aos from "aos";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
// import Process from "../../Components/Process";
// import Testimonials from "../../Components/Testimonials";
// import Elevateyourbusiness from "../../Components/elevateyourbusiness";

// gsap.registerPlugin(MotionPathPlugin);
const videos = [
  {
    id: 1,
    thumbnail: "path/to/thumbnail1.jpg",
    videoSrc: "path/to/video1.mp4",
  },
  {
    id: 2,
    thumbnail: "path/to/thumbnail2.jpg",
    videoSrc: "path/to/video2.mp4",
  },
];

const Home = () => {
//   const particlesInit = useCallback(async (engine) => {
//     console.log(engine);

    // await loadSlim(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     await console.log(container);
//   }, []);

//   Aos.init();

//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const sections = sectionRef?.current.querySelectorAll(".hoverEffectSec");

//     sections.forEach((section) => {
//       const container = section.querySelector(".inner_images");

//       const handleMouseMove = (event) => {
//         const rect = section.getBoundingClientRect();
//         const mouseX = event.clientX - rect.left;
//         const mouseY = event.clientY - rect.top;
//         const centerX = rect.width / 2;
//         const centerY = rect.height / 2;
//         const distX = (mouseX - centerX) * 0.1;
//         const distY = (mouseY - centerY) * 0.1;

//         gsap.to(container, {
//           x: distX,
//           y: distY,
//           ease: "power1.out",
//         });
//       };

//       const handleMouseLeave = () => {
//         gsap.to(container, {
//           x: 0,
//           y: 0,
//           ease: "power1.out",
//         });
//       };

//       section.addEventListener("mousemove", handleMouseMove);
//       section.addEventListener("mouseleave", handleMouseLeave);

//       return () => {
//         section.removeEventListener("mousemove", handleMouseMove);
//         section.removeEventListener("mouseleave", handleMouseLeave);
//       };
//     });
//   }, []);

//   const sec2 = useRef(null);

//   useEffect(() => {
//     const sections = sec2?.current.querySelectorAll(".sevices_hover");

//     sections.forEach((section) => {
//       const container = section.querySelector(".services_inner_images");

//       const handleMouseMove = (event) => {
//         const rect = section.getBoundingClientRect();
//         const mouseX = event.clientX - rect.left;
//         const mouseY = event.clientY - rect.top;
//         const centerX = rect.width / 2;
//         const centerY = rect.height / 2;
//         const distX = (mouseX - centerX) * 0.1;
//         const distY = (mouseY - centerY) * 0.1;

//         gsap.to(container, {
//           x: distX,
//           y: distY,
//           ease: "power1.out",
//         });
//       };

//       const handleMouseLeave = () => {
//         gsap.to(container, {
//           x: 0,
//           y: 0,
//           ease: "power1.out",
//         });
//       };

//       section.addEventListener("mousemove", handleMouseMove);
//       section.addEventListener("mouseleave", handleMouseLeave);

//       return () => {
//         section.removeEventListener("mousemove", handleMouseMove);
//         section.removeEventListener("mouseleave", handleMouseLeave);
//       };
//     });
//   }, []);

//   const caseStudies = useRef(null);

//   useEffect(() => {
//     const sections =
//       caseStudies?.current.querySelectorAll(".caseStudies_hover");

//     sections.forEach((section) => {
//       const container = section.querySelector(".caseStudies_inner_images");

//       const handleMouseMove = (event) => {
//         const rect = section.getBoundingClientRect();
//         const mouseX = event.clientX - rect.left;
//         const mouseY = event.clientY - rect.top;
//         const centerX = rect.width / 2;
//         const centerY = rect.height / 2;
//         const distX = (mouseX - centerX) * 0.1;
//         const distY = (mouseY - centerY) * 0.1;

//         gsap.to(container, {
//           x: distX,
//           y: distY,
//           ease: "power1.out",
//         });
//       };

//       const handleMouseLeave = () => {
//         gsap.to(container, {
//           x: 0,
//           y: 0,
//           ease: "power1.out",
//         });
//       };

//       section.addEventListener("mousemove", handleMouseMove);
//       section.addEventListener("mouseleave", handleMouseLeave);

//       return () => {
//         section.removeEventListener("mousemove", handleMouseMove);
//         section.removeEventListener("mouseleave", handleMouseLeave);
//       };
//     });
//   }, []);

//   const website = useRef(null);

//   useEffect(() => {
//     const sections = website?.current.querySelectorAll(
//       ".techVerse_webSolution"
//     );

//     sections.forEach((section) => {
//       const container = section.querySelector(".techVerse_webSolution_hover");

//       const handleMouseMove = (event) => {
//         const rect = section.getBoundingClientRect();
//         const mouseX = event.clientX - rect.left;
//         const mouseY = event.clientY - rect.top;
//         const centerX = rect.width / 2;
//         const centerY = rect.height / 2;
//         const distX = (mouseX - centerX) * 0.1; // Adjust multiplier for desired effect
//         const distY = (mouseY - centerY) * 0.1; // Adjust multiplier for desired effect

//         gsap.to(container, {
//           x: distX,
//           y: distY,
//           zIndex: 10, // Bring to front
//           ease: "power1.out",
//         });
//       };

//       const handleMouseLeave = () => {
//         gsap.to(container, {
//           x: 0,
//           y: 0,
//           zIndex: 1, // Reset to default
//           ease: "power1.out",
//           clearProps: "all",
//         });
//       };

//       section.addEventListener("mousemove", handleMouseMove);
//       section.addEventListener("mouseleave", handleMouseLeave);

//       return () => {
//         section.removeEventListener("mousemove", handleMouseMove);
//         section.removeEventListener("mouseleave", handleMouseLeave);
//       };
//     });
//   }, []);
  return (
  







<UserLayout>





 

<div className="relative"  >
  <Swiper
    style={{
      "--swiper-navigation-color": "#fff",
      "--swiper-pagination-color": "#fff",
    }}
    speed={600}
    parallax={true}
    loop={"true"}
    effect={"fade"}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Pagination, EffectFade, Navigation]}
    className="mySwiper"
  >
    <div
      slot="container-start"
      className="parallax-bg pagination_custom"
      data-swiper-parallax="-23%"
    ></div>
    <SwiperSlide>
      <section class="techVerse_hero hoverEffectSec ">
        <div class="techVerse_heroContent">
          <div class="container-fluid">
            <div class="row">
              <div class="innersec col-md-6">
                <div class="techVerse_hero_content">
                  <h1
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    TECHVERSE LLC Pioneering
                    <span class="color-lightBlue1"> The Future </span>
                    Of Mobile Development Company In USA
                  </h1>
                  <p
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    At Techverse LLC, we are at the forefront of mobile
                    app development, shaping the future with innovation
                    and cutting-edge technology. Our team of expert
                    developers, designers, and organizers work tirelessly
                    to transform visionary ideas into dynamic mobile
                    solutions that meet the needs of an ever-evolving
                    digital landscape.
                  </p>
                  {/* <div
                    class="techVerse_hero_btns"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  >
                    <a href="#" class="btn_with_icon">
                      <img
                        class="btn_with_icon_img"
                        src={phoneicon}
                        alt=""
                      />
                      <span class="btn_with_icon_text">Call Now</span>
                    </a>
                    <a href="#" class="btn_with_icon btn_secondary">
                      <img
                        class="btn_with_icon_img"
                        src={chaticon}
                        alt=""
                      />
                      <span class="btn_with_icon_text">Chat Now</span>
                    </a>
                  </div> */}
                  {/* <div
                    class="hero_brands"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  >
                    <a href="#" class="hero_brands_img">
                      <img src={clutch} alt="" />
                    </a>
                    <a href="#" class="hero_brands_img">
                      <img src={truspilot} alt="" />
                    </a>
                    <a href="#" class="hero_brands_img">
                      <img src={bbb} alt="" />
                    </a>
                  </div> */}
                </div>
              </div>
              <div class="col-md-6">
                {/* <div class="techVerse_hero_img image_hover">
                  <div className="inner_images  ">
                    <img
                      src={donatblue}
                      class="techVerse_hero_icon1 animation11"
                      alt=""
                    />
                    <img
                      src={PillBlueGlossy}
                      class="techVerse_hero_icon2 animation22"
                      alt=""
                    />
                    <img
                      src={ConeBlueGlossy}
                      class="techVerse_hero_icon3 animation22"
                      alt=""
                    />
                  </div>
                  <img
                    src={herophonemockupgroup}
                    width="100%"
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                    alt=""
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SwiperSlide>

    <SwiperSlide>
      <section class="techVerse_hero techVerse_hero_two hoverEffectSec">
        <div class="techVerse_heroContent">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="techVerse_hero_content">
                  <h1
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Creating
                    <span class="color-lightBlue1">
                      {" "}
                      Custom Solutions{" "}
                    </span>
                    For A Digital Age With Techverse LLC
                  </h1>
                  <p
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    In the rapidly evolving digital landscape, staying
                    ahead requires innovative and personalized solutions
                    that cater to unique business needs. At Techverse LLC,
                    we specialize in creating custom digital solutions
                    designed to transform and raise your business
                    presence.
                  </p>
                  {/* <div
                    class="techVerse_hero_btns"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  >
                    <a href="#" class="btn_with_icon">
                      <img
                        class="btn_with_icon_img"
                        src={phoneicon}
                        alt=""
                      />
                      <span class="btn_with_icon_text">Call Now</span>
                    </a>
                    <a href="#" class="btn_with_icon btn_secondary">
                      <img
                        class="btn_with_icon_img"
                        src={chaticon}
                        alt=""
                      />
                      <span class="btn_with_icon_text">Chat Now</span>
                    </a>
                  </div> */}
                  {/* <div
                    class="hero_brands"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  >
                    <a href="#" class="hero_brands_img">
                      <img src={clutch} alt="" />
                    </a>
                    <a href="#" class="hero_brands_img">
                      <img src={truspilot} alt="" />
                    </a>
                    <a href="#" class="hero_brands_img">
                      <img src={bbb} alt="" />
                    </a>
                  </div> */}
                </div>
              </div>
              <div class="col-md-6">
                {/* <div class="techVerse_hero_img">
                  <div className="inner_images">
                    <img
                      src={donatblue}
                      class="techVerse_hero_icon1 animation11"
                      alt=""
                    />
                    <img
                      src={PillBlueGlossy}
                      class="techVerse_hero_icon2 animation22"
                      alt=""
                    />
                    <img
                      src={ConeBlueGlossy}
                      class="techVerse_hero_icon3 animation22"
                      alt=""
                    />
                  </div>
                  <img
                    src={herowebmockupgroup22}
                    width="100%"
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                    alt=""
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SwiperSlide>

    <SwiperSlide>
      <section class="techVerse_hero techVerse_hero_three hoverEffectSec">
        <div class="techVerse_heroContent">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6">
                <div class="techVerse_hero_content">
                  <h1
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                  >
                    Experience
                    <span class="color-lightBlue1"> The Future </span>
                    Of Digital Innovation With Us
                  </h1>
                  <p
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="2000"
                  >
                    We are dedicated to revolutionizing your digital
                    presence through bespoke website designs, intuitive
                    mobile apps, and robust software solutions
                    personalized to your unique business needs. Our team
                    of passionate innovators harnesses the latest
                    technology trends to propel your brand forward in the
                    digital landscape.
                  </p>
                  {/* <div
                    class="techVerse_hero_btns"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  >
                    <a href="#" class="btn_with_icon">
                      <img
                        class="btn_with_icon_img"
                        src={phoneicon}
                        alt=""
                      />
                      <span class="btn_with_icon_text">Call Now</span>
                    </a>
                    <a href="#" class="btn_with_icon btn_secondary">
                      <img
                        class="btn_with_icon_img"
                        src={chaticon}
                        alt=""
                      />
                      <span class="btn_with_icon_text">Chat Now</span>
                    </a>
                  </div> */}
                  {/* <div
                    class="hero_brands"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                  >
                    <a href="#" class="hero_brands_img">
                      <img src={clutch} alt="" />
                    </a>
                    <a href="#" class="hero_brands_img">
                      <img src={truspilot} alt="" />
                    </a>
                    <a href="#" class="hero_brands_img">
                      <img src={bbb} alt="" />
                    </a>
                  </div> */}
                </div>
              </div>
              <div class="col-md-6">
                <div class="techVerse_hero_img">
                  {/* <div className="inner_images">
                    <img
                      src={donatblue}
                      class="techVerse_hero_icon1 animation11"
                      alt=""
                    />
                    <img
                      src={PillBlueGlossy}
                      class="techVerse_hero_icon2 animation22"
                      alt=""
                    />
                    <img
                      src={ConeBlueGlossy}
                      class="techVerse_hero_icon3 animation22"
                      alt=""
                    />
                  </div>
                  <img
                    src={heroslidermockupimg3}
                    width="100%"
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-duration="3000"
                    alt=""
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SwiperSlide>
  </Swiper>
</div>




</UserLayout>
  );
};
export default Home;





































































<div className="relative"  >
<Swiper
   
     style={{
       "--swiper-navigation-color": "#fff",
       "--swiper-pagination-color": "#fff",
     }}
     speed={600}
     // parallax={true}
     loop={"true"}
     effect={"fade"}
     pagination={{
       clickable: true,
     }}
     navigation={true}
     modules={[Pagination, EffectFade, Navigation]}
     className="mySwiper"
   
>
  <div
    slot="container-start"
    className="parallax-bg pagination_custom"
    data-swiper-parallax="-23%"
  ></div>
  <SwiperSlide>
  <HeroSection
classheroimage={"inner-realEstate-bgColor"}
title={"The new era of luxury"}
// subtitle={"With"}
// title2={"  Cutting-Edge Tech "}
tagline={
  "Lere, ispum is simply dummy text of the printing and typeseting industry        Lorem ipsun "
}
// heroimage={webapplicationhero}
// CtnbuttonComponent={Ctnbutton}
ctnButtonProps={{

  primaryButtonClass: "btn_with_icon",
  // chaticon: chaticon,
  chatenow: "Book reservation now",
  // secondaryButtonClass: "btn_with_icon btn_secondary  ",

  // playstore: playstore,
  // appstore: appstore
}}
/>
  </SwiperSlide>

  <SwiperSlide>
  <HeroSection
classheroimage={"inner-realEstate-bgColor"}
title={"The new era of luxury"}
// subtitle={"With"}
// title2={"  Cutting-Edge Tech "}
tagline={
  "Lere, ispum is simply dummy text of the printing and typeseting industry        Lorem ipsun "
}
// heroimage={webapplicationhero}
// CtnbuttonComponent={Ctnbutton}
ctnButtonProps={{

  primaryButtonClass: "btn_with_icon",
  // chaticon: chaticon,
  chatenow: "Book reservation now",
  // secondaryButtonClass: "btn_with_icon btn_secondary  ",

  // playstore: playstore,
  // appstore: appstore
}}
/>
  </SwiperSlide>

  <SwiperSlide>
  <HeroSection
classheroimage={"inner-realEstate-bgColor"}
title={"The new era of luxury"}
// subtitle={"With"}
// title2={"  Cutting-Edge Tech "}
tagline={
  "Lere, ispum is simply dummy text of the printing and typeseting industry        Lorem ipsun "
}
// heroimage={webapplicationhero}
// CtnbuttonComponent={Ctnbutton}
ctnButtonProps={{

  primaryButtonClass: "btn_with_icon",
  // chaticon: chaticon,
  chatenow: "Book reservation now",
  // secondaryButtonClass: "btn_with_icon btn_secondary  ",

  // playstore: playstore,
  // appstore: appstore
}}
/>
  </SwiperSlide>
</Swiper>
</div>
