 
import arrowimage from '../../asserts/images/arrow.png'
import Vidavida from '../../asserts/images/vidavisa.png'
import zamzulu from '../../asserts/images/zamzulu.png'
import khawajayanni from '../../asserts/images/khawajayamni.png'
import yamagata from '../../asserts/images/yamagata.png'
import './style.css'
const FinestCuisine = (props) => {


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
                                    {props?.para && <span className={` cuisine mb-3 ${props?.paraclass}`}>{props?.para}</span>}
 
                                </div>
                            </div>

                            <div className='col-md-6 mt-4'   >
                                <div className='finest-image' >
                                    <img src={Vidavida} className='finest-images' />

                                    <div className='finest-cuisine' >
                                        <div>
                                            <p className='poss-title'>Vida Vera</p>

                                            <span className='srguest'> 100 SR PER GUEST </span>
                                        </div>
                                        <div className='finestarrow'>
                                            <img src={arrowimage} className='finestarrowimg' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 mt-4'   >
                                <div className='finest-image' >
                                    <img src={zamzulu} className='finest-images' />



                                    <div className='finest-cuisine' >
                                        <div>
                                            <p className='poss-title'>Zam Zulu</p>

                                            <span className='srguest'> 100 SR PER GUEST </span>
                                        </div>
                                        <div className='finestarrow'>
                                            <img src={arrowimage} className='finestarrowimg' />
                                        </div>
                                    </div>
                                </div>
                            </div>







                            <div className='col-md-6 mt-4'   >
                                <div className='finest-image' >
                                    <img src={khawajayanni} className='finest-images' />



                                    <div className='finest-cuisine' >
                                        <div>
                                            <p className='poss-title'>Khawaja Yanni</p>

                                            <span className='srguest'> 100 SR PER GUEST </span>
                                        </div>
                                        <div className='finestarrow'>
                                            <img src={arrowimage} className='finestarrowimg' />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='col-md-6 mt-4 mb-4'   >
                                <div className='finest-image' >
                                    <img src={yamagata} className='finest-images' />



                                    <div className='finest-cuisine' >
                                        <div>
                                            <p className='poss-title'>Yamagata  </p>

                                            <span className='srguest'> 100 SR PER GUEST </span>
                                        </div>
                                        <div className='finestarrow'>
                                            <img src={arrowimage} className='finestarrowimg' />
                                        </div>
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

export default FinestCuisine