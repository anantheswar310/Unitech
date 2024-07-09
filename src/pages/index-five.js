import React from "react";
import { Link as Link2 } from "react-router-dom";

import LaptopImage from "../assets/images/bg/laptop.png";

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


export default function IndexFive() {
    return (
        <>
            <Navbar navdark={true} themSocial={true}/>
            <section className="py-36 md:h-auto md:py-0 flex items-center relative bg-orange-600/5 dark:bg-orange-600/10" id="home">
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-0 md:mt-12 pt-0 md:pt-12">
                        <div className="mt-28">
                            <div>
                                <h4 className="lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative dark:text-white">Unique and bold functionality</h4>

                                <p className="text-slate-600 dark:text-white/70 opacity-50 mb-0 max-w-2xl text-lg mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>

                                <div className="relative mt-10">
                                    <Link2 to="#" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">Start Free Trail !</Link2>
                                </div>
                            </div>

                            <img src={LaptopImage} alt="" className="relative mt-16" />
                        </div>
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

        </>
    );

}
