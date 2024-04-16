import React from "react";
import "../styles/Scrollbar.css"; // Import the CSS file for scrollbar styling

// Import images
import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";

// Import motion and transition
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

import Header from "../components/Header";

const projects = [
  {
    id: 1,
    title: "Saunakoning",
    description: "This is Project 1",
    img: Image1,
    link: "/project1",
  },
  {
    id: 2,
    title: "Festivalzone",
    description: "This is Project 2",
    img: Image2,
    link: "/project2",
  },
  {
    id: 3,
    title: "AMW-veranda",
    description: "This is Project 3",
    img: Image3,
    link: "/project3",
  },
  {
    id: 4,
    title: "Europeveranda",
    description: "This is Project 4",
    img: Image4,
    link: "/project4",
  },
  {
    id: 5,
    title: "Dipped by Queen",
    description: "This is Project 4",
    img: Image4,
    link: "/project5",
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <motion.section
      initial={{ scale: 0, y: "100%" }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: "100%" }}
      transition={transition1}
      className="section overflow-auto"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <motion.div
            initial={{ scale: 0, y: "-80%" }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: "-80%" }}
            transition={transition1}
            className="flex flex-col lg:items-start"
          >
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and{" "}
              <b>typesetting industry.</b> Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s.
            </p>
          </motion.div>
          {/*Image grid*/}
          <div className="grid grid-cols-2 lg:gap-2">
            {/*image */}
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                src={Image1}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                src={Image2}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                src={Image3}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover w-full h-full hover:scale-110 transition-all duration-500"
                src={Image4}
                alt=""
              />
            </div>
          </div>

        </div>
        {/* New grid section for projects with increased top margin */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 mt-12">
          {projects.map((project) => (
            <div key={project.id} className="shadow-lg rounded-lg p-4 bg-white">
              <img
                src={project.img}
                alt=""
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-bold mt-2">{project.title}</h2>
              <p>{project.description}</p>
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => (window.location.href = project.link)}
              >
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
