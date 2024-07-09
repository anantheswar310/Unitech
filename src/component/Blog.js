import React from "react";
import { Link as Link2 } from 'react-router-dom';
import { blogData } from "../data/data";

export default function Blog() {

  return (
    <>
      <section className="relative md:py-24 py-16" id="blog">
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-orange-600 text-base font-medium uppercase mb-2">Blogs</h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">Latest News</h3>

            <p className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered Tailwind CSS html page.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8">
            {blogData.map((item, key) => (
              <div key={key} className="blog relative rounded-md shadow shadow-slate-200 dark:shadow-slate-800 overflow-hidden">
                <img src={item.image} alt="" />
                <div className="content p-6">
                  <Link2 to={`/blog-detail/${item.id}`} className="text-lg hover:text-orange-600 dark:text-white dark:hover:text-orange-600 transition-all duration-500 ease-in-out font-medium">{item.title}</Link2>
                  <p className="text-slate-400 mt-3">{item.description}</p>

                  <div className="mt-5">
                    <Link2 to={`/blog-detail/${item.id}`} className="btn btn-link hover:text-orange-600 dark:hover:text-orange-600 after:bg-orange-600 dark:text-white transition duration-500">Read More <i className="uil uil-arrow-right"></i></Link2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

}

