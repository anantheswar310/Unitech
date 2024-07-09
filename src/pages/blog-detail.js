import React from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../component/navbar";
import Blog from "../component/Blog";

import blogImg from "../assets/images/blog/3.jpg"
import client from "../assets/images/client/04.jpg"
import { blogData } from "../data/data";
import Footer from "../component/Footer";
import Switcher from "../component/Switcher";
import GetInTouch from "../component/GetInTouch";

export default function BlogDetail(){
    let params = useParams()
    let id = params.id
    console.log(id);
    let data = blogData.find((item) =>item.id === parseInt(id))
    return(
        <>
        <Navbar/>
        <section className="py-28 w-full table relative bg-[url('../../assets/images/bg/auth.jpg')] bg-top bg-no-repeat">
            <div className="absolute inset-0 bg-slate-950/80"></div>

            <div className="container">
                <div className="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 className="mb-3 font-medium leading-normal text-3xl mt-10 text-white">{data?.title ? data.title : 'Introducing new tools for your design.'}</h3>

                    <ul className="list-none mt-6">
                        <li className="inline-block text-white/50 mx-5"> <span className="text-white block">Client :</span> <span className="block">Calvin Carlo</span></li>
                        <li className="inline-block text-white/50 mx-5"> <span className="text-white block">Date :</span> <span className="block">19th June 2024</span></li>
                        <li className="inline-block text-white/50 mx-5"> <span className="text-white block">Time :</span> <span className="block">8 Min Read</span></li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div className="lg:col-span-8 md:col-span-6">
                        <div className="p-6 rounded-md shadow dark:shadow-gray-800">

                            <img src={data?.image ? data.image : blogImg} className="rounded-md" alt=""/>

                            <div className="mt-6">
                                <p className="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.</p>
                                <p className="text-slate-400 italic border-x-4 border-orange-600 rounded-ss-xl rounded-ee-xl mt-3 p-3">" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "</p>
                                <p className="text-slate-400 mt-3">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                            </div>
                        </div>

                        <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                            <h5 className="text-lg font-semibold">Leave A Comment:</h5>

                            <form className="mt-8">
                                <div className="grid lg:grid-cols-12 gap-6">
                                    <div className="lg:col-span-6">
                                        <input name="name" id="name" type="text" className="form-input" placeholder="Name :"/>
                                    </div>
    
                                    <div className="lg:col-span-6">
                                        <input name="email" id="email" type="email" className="form-input" placeholder="Email :"/>
                                    </div>

                                    <div className="lg:col-span-12">
                                        <textarea name="comments" id="comments" className="form-input textarea h-28" placeholder="Message :"></textarea>
                                    </div>

                                    <div className="lg:col-span-12">
                                        <button type="submit" id="submit" name="send" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md h-11 justify-center flex items-center">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="lg:col-span-4 md:col-span-6">
                        <div className="sticky top-20">
                            <h5 className="text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">Author</h5>
                            <div className="text-center mt-8">
                                <img src={client} className="h-24 w-24 mx-auto rounded-full shadow mb-4" alt=""/>

                                <Link to="" className="text-lg font-medium hover:text-orange-600 transition-all duration-500 ease-in-out h5">Cristina Romsey</Link>
                                <p className="text-slate-400">Content Writer</p>
                            </div>

                            <h5 className="text-lg font-medium bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">Social sites</h5>
                            <ul className="list-none text-center mt-8 space-x-1">
                                <li className="inline"><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-orange-600 hover:text-white hover:bg-orange-600"><i className="uil uil-dribbble align-middle"></i></Link></li>
                                <li className="inline"><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-orange-600 hover:text-white hover:bg-orange-600"><i className="uil uil-behance align-middle"></i></Link></li>
                                <li className="inline"><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-orange-600 hover:text-white hover:bg-orange-600"><i className="uil uil-linkedin align-middle"></i></Link></li>
                                <li className="inline"><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-orange-600 hover:text-white hover:bg-orange-600"><i className="uil uil-facebook-f align-middle"></i></Link></li>
                                <li className="inline"><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-orange-600 hover:text-white hover:bg-orange-600"><i className="uil uil-instagram align-middle"></i></Link></li>
                                <li className="inline"><Link to="" className="h-8 w-8 inline-flex items-center text-center justify-center text-base font-normal tracking-wide align-middle transition duration-500 ease-in-out border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-orange-600 hover:text-white hover:bg-orange-600"><i className="uil uil-twitter align-middle"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

           <Blog/>

            <GetInTouch/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}