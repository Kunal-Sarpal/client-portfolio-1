import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-20 bg-white text-gray-900 py-16 px-4 md:px-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Let's Create Something Amazing Together
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Ready to bring your creative vision to life? Get in touch with us today and let's discuss your next multimedia project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-5 shadow border border-zinc-300 rounded-xl">
              <div className="border p-2 rounded-full bg-zinc-900">
                <MdEmail size={28} className="text-zinc-100" />
              </div>
              <div>
                <p className="font-bold text-start">Email Us</p>
                <p className="text-sm text-gray-800">eastersiddu@visurastudios.in</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 shadow border border-zinc-300 rounded-xl">
              <div className="border p-2 rounded-full bg-zinc-900">
                <MdPhone size={28} className="text-zinc-100" />
              </div>
              <div>
                <p className="font-bold text-start">Call Us</p>
                <p className="text-sm text-gray-800 text-start">+91-9553337558</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 shadow border border-zinc-300 rounded-xl">
              <div className="border p-2 rounded-full bg-zinc-900">
                <MdLocationOn size={28} className="text-zinc-100" />
              </div>
              <div>
                <p className="font-bold text-start">Visit Us</p>
                <p className="text-sm text-gray-800 text-start">LPU, Phagwara - Delhi G.T. Road, Phagwara, Punjab (India)</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form className="border shadow border-zinc-300 rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <BiMessageSquareDetail size={24} className="text-zinc-900" />
              <h3 className="text-lg font-semibold">Send us a message</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-zinc-300 rounded-md w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-zinc-300 rounded-md w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Project Type (Photography, Videography, etc.)"
              className="p-3 border border-zinc-300 rounded-md w-full"
            />
            <textarea
              rows={5}
              placeholder="Tell us about your project..."
              className="p-3 border border-zinc-300 rounded-md w-full"
            />
            <button
              type="submit"
              className="w-full bg-zinc-800 text-white py-3 rounded-md hover:bg-zinc-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
