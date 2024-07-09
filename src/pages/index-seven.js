import React from "react";
import { Link as Link2 } from "react-router-dom";

import BackgroudImage from "../assets/images/bg/5.jpg";

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
 * Index seven 
 */
export default function IndexSeven() {
    return (
        <>
        <Navbar/>
        <section
            style={{ backgroundImage: `url(${BackgroudImage})` }}
            className="py-36 lg:py-64 w-full table relative bg-no-repeat bg-center bg-cover" id="home">
            <div className="container relative z-1">
                <div className="grid grid-cols-1 mt-12">
                    <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">Everything you need to build <br /> a great company</h4>

                    <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>

                    <div className="relative mt-10">
                        <Link2 to="#" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">Get Started</Link2>
                    </div>
                </div>
            </div>
            <div className="absolute lg:w-1/2 md:w-4/6 w-full h-full bg-gradient-to-t to-orange-600 from-orange-400 md:opacity-100 opacity-80 top-0"></div>
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
