import React from "react";
import { FaAward, FaUsers, FaClock, FaStar } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-16 px-4 md:px-20 text-gray-900 scroll-mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Our <br />
            Creative Studio
          </h2>
          <p className="text-gray-600 mb-6">
            We are a passionate team of multimedia professionals dedicated to bringing your creative vision to life.
            With expertise spanning photography, videography, graphic design, animation, and illustration, we offer
            comprehensive creative solutions under one roof.
          </p>
          <p className="text-gray-600 mb-8">
            Our mission is to deliver exceptional creative services that not only meet but exceed your expectations.
            We believe in the power of visual storytelling and work tirelessly to ensure every project reflects the
            highest standards of quality and creativity.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
            Learn More About Us
          </button>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 border border-zinc-300 rounded-xl text-center shadow-sm">
            <div className="flex justify-center items-center mb-3">
              <FaAward className="text-white bg-zinc-900 p-2 rounded-full w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold">500+</h3>
            <p className="text-gray-600 text-sm">Projects Completed</p>
          </div>
          <div className="p-6 border border-zinc-300 rounded-xl text-center shadow-sm">
            <div className="flex justify-center items-center mb-3">
              <FaUsers className="text-white bg-zinc-900 p-2 rounded-full w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold">200+</h3>
            <p className="text-gray-600 text-sm">Happy Clients</p>
          </div>
          <div className="p-6 border border-zinc-300 rounded-xl text-center shadow-sm">
            <div className="flex justify-center items-center mb-3">
              <FaClock className="text-white bg-zinc-900 p-2 rounded-full w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold">5+</h3>
            <p className="text-gray-600 text-sm">Years Experience</p>
          </div>
          <div className="p-6 border border-zinc-300 rounded-xl text-center shadow-sm">
            <div className="flex justify-center items-center mb-3">
              <FaStar className="text-white bg-zinc-900 p-2 rounded-full w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold">4.9</h3>
            <p className="text-gray-600 text-sm">Client Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
