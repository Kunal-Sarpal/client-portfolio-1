import React from "react";
import { FaCamera, FaVideo, FaPaintBrush, FaPlay, FaLeaf } from "react-icons/fa";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const serviceData: ServiceItem[] = [
  {
    title: "Photography",
    description:
      "Professional photography for events, portraits, products, and commercial needs with stunning visual storytelling.",
    icon: <FaCamera size={28} className="text-white" />,
  },
  {
    title: "Videography",
    description:
      "Cinematic video production, documentaries, promotional videos, and event coverage that captures every moment.",
    icon: <FaVideo size={28} className="text-white" />,
  },
  {
    title: "Graphic Design",
    description:
      "Creative visual solutions including branding, logos, marketing materials, and digital design that make impact.",
    icon: <FaPaintBrush size={28} className="text-white" />,
  },
  {
    title: "Animation",
    description:
      "Engaging motion graphics, 2D/3D animations, explainer videos, and interactive content that brings ideas to life.",
    icon: <FaPlay size={28} className="text-white" />,
  },
  {
    title: "Drawing & Illustration",
    description:
      "Custom artwork, digital illustrations, concept art, and hand-drawn designs tailored to your creative vision.",
    icon: <FaLeaf size={28} className="text-white" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="scroll-mt-20 bg-white text-gray-900 py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Creative Services</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer comprehensive multimedia solutions to bring your ideas to life with
          professional quality and creative excellence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="border border-zinc-300 rounded-xl p-6 text-center flex flex-col items-center shadow-sm hover:shadow-md transition"
            >
              <div className="bg-zinc-900 w-12 h-12 p-4 flex items-center justify-center rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* <button className="bg-zinc-800 hover:bg-zinc-900 text-white px-6 py-3 rounded-md transition">
          Get Custom Quote
        </button> */}
      </div>
    </section>
  );
};

export default Services;
