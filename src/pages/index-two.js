import React, { useState } from "react";
import { Link as Link2 } from "react-router-dom";

import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

import BackgroudImage from "../assets/images/bg/2.jpg";

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
 * Index Two 
 */
export default function IndexTwo() {

    let [videoModal, setModal] = useState(false);

    return (
        <>
        <Navbar/>
        <section
            style={{ backgroundImage: `url(${BackgroudImage})` }}
            className="py-36 lg:py-72 lg:pb-0 md:pb-8 w-full table relative bg-[url('../../assets/images/bg/2.jpg')] bg-center bg-cover" id="home">
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
                <div className="grid lg:grid-cols-12 mt-10 md:grid-cols-2 gap-2">
                    <div className="lg:col-span-7">
                        <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">Bluid your audiance <br /> and sale more</h4>

                        <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>

                        <div className="relative mt-10">
                            <Link2 to="#" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-full me-1">Get Started</Link2>
                            <Link2 to="#" onClick={() => setModal(true)} data-type="youtube" data-id="yba7hPeTSjk" className="btn btn-icon btn-lg bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-full lightbox"><i className="mdi mdi-play text-xl align-middle"></i></Link2><small className="text-white text-sm uppercase align-middle ms-2">Watch Now</small>
                        </div>
                    </div>

                    <div className="lg:col-span-5 mt-8 md:mt-0">
                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow md:p-10 p-6 lg:ms-10 z-10 relative">
                            <h4 className="mb-5 font-medium text-2xl dark:text-white">We are offering 14 <br /> days free trial</h4>

                            <form>
                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <label className="dark:text-white">Name</label>
                                        <input name="name" id="fName" type="text" className="form-input mt-2" placeholder="Name :" />
                                    </div>
                                    <div className="mb-5">
                                        <label className="dark:text-white">Email</label>
                                        <input name="email" id="yEmail" type="email" className="form-input mt-2" placeholder="Email :" />
                                    </div>
                                    <div className="mb-5">
                                        <label className="dark:text-white">Phone No.</label>
                                        <input name="number" id="phNumber" className="form-input mt-2" placeholder="+12 12458 854" />
                                    </div>
                                    <Link2 to="#" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md w-full">Free Trial</Link2>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo
            channel="youtube"
            isOpen={videoModal}
            videoId="yba7hPeTSjk"
            onClose={() => this.setModal(false)}
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

        </>
    );

}

