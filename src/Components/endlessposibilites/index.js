import React, { useEffect, useRef } from 'react'
import arrowimage from '../../asserts/images/arrow.png'
import './style.css'
const Endlessposibilities = (props) => {


    return (
        <div  >
            <section
                className={`techVerse_about techVerse_aboutServices2 ${props?.classheroimage}`}
            >
 
                <div class="techVerse_aboutContent techVerse_aboutContentServices2 width-1600">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="sec_title buildStore_sec_title">
                                    <h2 class={`sec_title_head color-lightBlue2 ${props?.title_text_class}`}
                                        data-aos="fade-up" data-aos-offset="0" data-aos-duration="1000">
                                        <span class={props?.titleclass}>{props?.title}</span> {props?.subtitle} <span class={props?.titleclass2}> {props?.title2}    </span>
                                    </h2>
                                    {props?.para && <span className={`endlesspara  mb-3 ${props?.paraclass}`}>{props?.para}</span>}


                              
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="techVerse_about_img">
                                    <div class="techVerse_about_laptop_img driving-2screen">
                                        <img src={props?.image}
                                            class={`about-laptopImg mobileApp_devSec_img 4 ${props?.hrimg}`}
                                            data-aos="fade-right" data-aos-offset="0" data-aos-duration="1000" />

                                    </div>
                                    <span className={props?.playiconclass}>  <img src={props?.playicon} /></span>
                                </div>
                            </div>
                            <div className='col-md-12 mb-4'   >
                                <div className='general-access' >
                                    <div>
                                        <p className='poss-subtitle' >25/ Guest</p>
                                        <p className='poss-title'>Get Your General Access Ticket</p>
                                        <p className='possibilities-para'>Lorem ispum is simply dummy text of the
                                            printing and typesetting industary. Loem ispum has been the industry's standard text  </p>
                                    </div>
                                    <div className='possarrow'>
                                        <img src={arrowimage} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Endlessposibilities