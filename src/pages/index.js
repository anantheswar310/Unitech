import React from "react";
import { Link as Link2 } from "react-router-dom";

import Typed from "typed.js";

import BackgroudImage from "../assets/images/bg/1.jpg";
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
 * Index Component
 */
export default function Index() {

  setTimeout(() => {
    new Typed("#typed", {
      strings: [
        "<b>Business</b>",
        "<b>Startups</b>",
        "<b>Digital Agency</b>",
        "<b>Marketing</b>",
      ],
      backDelay: 2000,
      loop: true,
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
    });
  }, 500);



  return (
    <>
      <div>
        <Navbar/>
        <section
          style={{ backgroundImage: `url(${BackgroudImage})` }}
          className="py-36 lg:py-64 w-full table relative bg-center bg-cover"
          id="home"
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="container relative">
            <div className="grid grid-cols-1 mt-12">
              <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
                Providing Brilliant Ideas <br />
                For Your{" "}
                <span
                  className="typewrite relative text-type-element"
                  id="typed"
                  data-period="2000"
                  data-type='[ "Business", "Startups", "Digital Agency", "Marketing" ]'
                ></span>
              </h4>

              <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">
                Launch your campaign and benefit from our expertise on
                designing and managing conversion centered Tailwind CSS html
                page.
              </p>

              <div className="relative mt-10">
                <Link2
                  to="#"
                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md"
                >
                  Get Started
                </Link2>
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
        {/* <Review /> */}

        {/* Pricing section */}
        {/* <Pricing /> */}

        {/* Blog section */}
        {/* <Blog /> */}

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

