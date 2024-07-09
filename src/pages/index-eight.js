import React, { useState } from "react";
import { Link as Link2 } from "react-router-dom";
import ModalVideo from "react-modal-video";

import BackgroudImage from "../assets/images/bg/bg4.png";
import About1 from "../assets/images/ab01.jpg";
import About2 from "../assets/images/ab02.jpg";

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
 * Index eight 
 */
export default function IndexEight() {
    const [videoModal, setModal] = useState(false);

    return (
        <>
            <div>
                <Navbar navdark={true}/>
                <section
                    style={{ backgroundImage: `url(${BackgroudImage})` }}

                    className="py-36 md:h-screen h-auto items-center flex relative bg-bottom bg-cover active" id="home">
                    <div className="absolute inset-0 -z-1 bg-gradient-to-b from-orange-600/20 dark:from-orange-600/40 via-orange-600/10 dark:via-orange-600/20 to-transparent"></div>
                    <div className="container relative">
                        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                            <div className="lg:col-span-7 md:col-span-6 mt-14 md:mt-0">
                                <h4 className="lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative dark:text-white">Give your users <br /> privacy choices.</h4>

                                <p className="text-slate-400 dark:text-white/70 mb-0 max-w-2xl text-lg">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>

                                <div className="subcribe-form mt-10">
                                    <form className="relative">
                                        <input type="email" id="subemail" name="email" className="rounded-full bg-white opacity-70 border" placeholder="E-mail :" />
                                        <button type="submit" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-full">Submit <i className="uil uil-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div className="lg:col-span-5 md:col-span-6">
                                <div className="relative">
                                    <div className="relative flex justify-end">
                                        <img src={About1} className="lg:w-[400px] w-[280px] rounded-xl shadow dark:shadow-gray-700" alt="" />
                                        <div className="absolute top-0 translate-y-2/4 start-0 text-center">
                                            <Link2 to="#" onClick={() => setModal(true)} data-type="youtube" data-id="yba7hPeTSjk" className="lightbox h-20 w-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-orange-600">
                                                <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                            </Link2>
                                        </div>
                                    </div>
                                    <div className="absolute md:-start-5 start-0 -bottom-16">
                                        <img src={About2} className="lg:w-[280px] w-[200px] border-8 border-white dark:border-slate-900 rounded-xl" alt="" />
                                    </div>
                                </div>
                            </div>
                            <ModalVideo
                                channel="youtube"
                                isOpen={videoModal}
                                videoId="yba7hPeTSjk"
                                onClose={() => setModal(false)}
                            />
                        </div>
                    </div>
                </section>

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
