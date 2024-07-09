import React from "react";

import BackgroudImage from "../assets/images/bg/4.jpg";

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

export default function IndexThree() {

    return (
        <>
        <Navbar/>
        <section
            style={{ backgroundImage: `url(${BackgroudImage})` }}
            className="py-36 md:py-72 w-full table relative bg-center bg-cover jarallax" data-jarallax data-speed="0.5" id="home">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="container relative">
                <div className="grid grid-cols-1 text-center">
                    <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">Do you want to change the world?</h4>

                    <p className="text-white opacity-50 mb-0 max-w-2xl text-lg mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>

                    <div className="text-center subcribe-form mt-4 pt-2">
                        <form className="relative mx-auto">
                            <input type="email" id="subemail" name="email" className="rounded-full bg-white opacity-70 border" placeholder="E-mail :" />
                            <button type="submit" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-full">Submit <i className="uil uil-arrow-right"></i></button>
                        </form>
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
