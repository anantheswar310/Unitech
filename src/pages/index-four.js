import React, { useState } from "react";
import { Link as Link2 } from "react-router-dom";
import HeroImage from "../assets/images/hero4.png";

import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

import Services from "../component/Services";
import About from "../component/About";
import Pricing from "../component/Pricing";
import Blog from "../component/Blog";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Portfolio from "../component/Portfolio";
import Review from "../component/Testimonial";
import Switcher from "../component/Switcher";
import Navbar from "../component/navbar";

/**
 * Index four 
 */
export default function IndexFour() {
    const [videoModal, setModal] = useState(false);
    return (
        <>
            <div>
                <Navbar navdark={true}/>
                <section className="relative table w-full py-36 pb-0 lg:py-44 lg:pb-0 bg-gradient-to-b from-orange-600/20 dark:from-orange-600/40 via-orange-600/10 dark:via-orange-600/20 to-gray-50 dark:bg-slate-800" id="home">
                    <div className="container">
                        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                            <div className="lg:col-span-7">

                                <div className="md:me-6 md:mb-20">
                                    <h4 className="lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative dark:text-white">Business Growth <br /> Makes Your Company</h4>

                                    <p className="text-slate-400 dark:text-white/70 mb-0 max-w-2xl text-lg">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>

                                    <div className="relative mt-10">
                                        <Link2 to="#" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-full me-1">Get Started</Link2>
                                        <Link2 to="#" onClick={() => setModal(true)} data-type="youtube" data-id="yba7hPeTSjk" className="btn btn-icon btn-lg bg-orange-600/5 hover:bg-orange-600 border-orange-600/10 hover:border-orange-600 text-orange-600 hover:text-white rounded-full lightbox"><i className="mdi mdi-play text-xl align-middle"></i></Link2><small className="font-medium text-sm uppercase align-middle ms-2 dark:text-white/70">Watch Now</small>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5 mt-8 md:mt-0">
                                <img src={HeroImage} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <ModalVideo
                    channel="youtube"
                    isOpen={videoModal}
                    videoId="yba7hPeTSjk"
                    onClose={() => setModal(false)}
                />
                <div className="relative">
                    <div className="shape overflow-hidden text-gray-50 dark:text-slate-800">
                        <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M720 125L2160 0H2880V250H0V125H720Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

                {/* About section */}
                <About />

                {/* Service section */}
                <Services />

                {/* Portfolio section */}
                <Portfolio />

                {/* Review section */}
                <Review />

                {/* Pricing section */}
                <Pricing />

                {/* Blog section */}
                <Blog />

                {/* Contact section */}
                <Contact />

                {/* Footer section */}
                <Footer />

                {/* Switcher section */}
                <Switcher />
            </div>

        </>
    );

}
