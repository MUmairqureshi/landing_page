import React, { useRef, useEffect } from "react";
import './style.css'
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import ParticlesBackground from "../../Components/ParticleBg/ParticlesBackground";
import arrowimage from '../../asserts/images/arrow.png'
const Yourplace = (props) => {
    return (
        <div>

            <section
                class={`techVerse_about techVerse_aboutServices2 ${props?.newClass}`}
            >
                <div className="inner_hover">

                    <div class="techVerse_aboutContent techVerse_aboutContentServices2 width-1600">
                        <div class="container">
                        <div class="row"> 
    <div class="col-md-6 order-2 order-md-1">
        <div class="techVerse_about_img">
            <div class={`mapimg ${props?.portfolioimg}`}>
                <img
                    src={props?.travelimg}
                    class={props?.laptopFrame}
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                />
            </div>
        </div>
    </div> 
    <div class="col-md-6 order-1 order-md-2">
        <div class="techVerse_about_content services-abbout2">
            <div class="sec_title">
                <p className="poss-subtitle">EXPERIENCE THE GROVES</p>
                <p className="place-title">Find Your place</p>
                <p className="youplace-para">Our interactive map will show you the way to the shop and restaurants that you want to see</p>
                <span className="maparrow">Open the Map <img className="maparrowimg" src={arrowimage} /></span>
            </div>
        </div>
    </div>
</div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Yourplace;