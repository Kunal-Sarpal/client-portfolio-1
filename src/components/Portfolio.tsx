import React from "react";

interface Project {
  title: string;
  subtitle: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Brand Photography",
    subtitle: "Photography",
    image:
      "https://plus.unsplash.com/premium_photo-1667538960104-25726d82a6e5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Product Animation",
    subtitle: "Animation",
    image:
      "https://images.unsplash.com/photo-1584670618308-e88b87710b38?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Creative Illustration",
    subtitle: "Drawing",
    image:
      "https://images.unsplash.com/photo-1527430253228-e93688616381?q=80&w=1170&auto=format&fit=crop",
  },
  {
    title: "Product Package",
    subtitle: "Design",
    image:
      "https://plus.unsplash.com/premium_photo-1732198105292-9a8703450d17?q=80&w=996&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="home" className="scroll-mt-20 bg-white text-gray-900 py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Our Creative Portfolio
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Explore our diverse collection of multimedia projects showcasing our
          expertise across all creative disciplines.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-start font-semibold text-gray-300 uppercase mb-1">
                  {project.subtitle}
                </p>
                <h3 className="text-lg text-start font-bold text-gray-800">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
