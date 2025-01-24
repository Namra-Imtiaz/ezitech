import React from "react";
import image1 from "../assets/images/institute1.webp";
import image2 from "../assets/images/institute2.webp";
import image3 from "../assets/images/institute3.webp";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
    return (
        <div className="bg-gradient-to-r from-white to-gray-100 py-16 px-8 md:px-20 lg:px-32">
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="relative flex-1 flex flex-col items-center md:items-start gap-6">
                    <div className="relative w-48 h-32 md:w-64 md:h-40 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out">
                        <img
                            src={image1}
                            alt="Conference 1"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="relative w-48 h-32 md:w-64 md:h-40 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out md:-ml-10 -mt-6">
                        <img
                            src={image2}
                            alt="Conference 2"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="relative w-48 h-32 md:w-64 md:h-40 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out md:ml-10 -mt-6">
                        <img
                            src={image3}
                            alt="Conference 3"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>


                <div className="flex-1 text-center md:text-left">
                    <span className="text-blue-500 font-semibold uppercase tracking-wide">
                        What we do...?
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
                        Empowering Connections in the{" "}
                        <span className="text-blue-500">Digital World</span>
                    </h2>
                    <p className="text-gray-600 mt-6">
                        We equip future professionals with the essential tools to thrive in
                        both traditional and digital IT landscapes. With years of experience and
                        countless successful placements, Ezitech Institute has perfected a unique
                        learning process that goes beyond theory. We delve deep into practical
                        skills and real-world applications, helping students understand, connect,
                        and excel in the ever-evolving tech market.
                    </p>
                    <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300">
                        <Link to="/about" className="text-white">
                            More About Us
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
