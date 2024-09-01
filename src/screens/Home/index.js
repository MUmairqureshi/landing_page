import React, { useEffect, useRef } from "react";
import './style.css'
import Cruteexperience from '../../Components/crute-experience'
import Generalaccess from '../../Components/Generalaccess'
import map from '../../asserts/images/map.png'
import FinestCuisine from '../../Components/FinestCuisine'
import webapplicationhero from '../../asserts/images/hero-bg.png'
import possibilities from '../../asserts/images/possibilities.png'
import playicon from '../../asserts/images/playicon.png'
import HeroSection from '../../Components/herosection'
import { UserLayout } from "../../Components/Layout/UserLayout";
import Yourplace from '../../Components/yourplace/index'
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
import Endlessposibilities from "../../Components/endlessposibilites";
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
          
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        // className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg pagination_custom"
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <HeroSection
              classheroimage={"inner-realEstate-bgColor"}
              title={"The new  "}
              title2="era of luxury"

              tagline={
                "Lere, ispum is simply dummy text of the printing and typeseting industry        Lorem ipsun "
              }


              ctnButtonProps={{

                primaryButtonClass: "btn_with_icon",

                chatenow: "Book reservation now",

              }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <HeroSection
              classheroimage={"inner-realEstate-bgColor"}
              title={"The new era of luxury"}


              tagline={
                "Lere, ispum is simply dummy text of the printing and typeseting industry        Lorem ipsun "
              }


              ctnButtonProps={{

                primaryButtonClass: "btn_with_icon",

                chatenow: "Book reservation now",

              }}
            />
          </SwiperSlide>

          <SwiperSlide>
            <HeroSection
              classheroimage={"inner-realEstate-bgColor"}
              title={"The new era of luxury"}


              tagline={
                "Lere, ispum is simply dummy text of the printing and typeseting industry        Lorem ipsun "
              }


              ctnButtonProps={{

                primaryButtonClass: "btn_with_icon",

                chatenow: "Book reservation now",

              }}
            />
          </SwiperSlide>
        </Swiper>
      </div>

<div className="homebg">
      <Endlessposibilities

        titleclass2="color-darkBlue"
        titleclass="possibilities_title"
        title=" Mall of Endless Possibilities "
        para="Lorem ispum is simply dummy text of the printing and typesetting industary. Loem ispum has been the industry's standard text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a typ specimen book  "
        paraclass="paraclass"
        image={possibilities}
        playicon={playicon}
        playiconclass="playiconclass"


      />

      <Generalaccess/>

      <FinestCuisine
        titleclass2="color-darkBlue"
        titleclass="possibilities_title"
        title=" Experience the Finest Cuisine "
        para="Lorem ispum is simply dummy text of the printing and typesetting industary. Loem ispum has been the industry's standard text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a typ specimen book  "
        paraclass="paraclassfinest"
        image={possibilities}
        playicon={playicon}
        playiconclass="playiconclass"
      />



<Cruteexperience/>
<Yourplace
travelimg={map}
/>

</div>

    </UserLayout>






  );
};
export default Home;