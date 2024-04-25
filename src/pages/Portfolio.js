import React from "react";
import { Link } from 'react-router-dom'; // Import Link for routing
import "../styles/Scrollbar.css"; // Import the CSS file for scrollbar styling

// Import images
import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";
import Saunakoning from '../img/portfolio/Saunakoning2.png'
import Festivalzone from "../img/portfolio/Festivalzone3.png"
import AMWVeranda from "../img/portfolio/amwveranda2.png"
import EuropeVeranda from "../img/portfolio/EuropeVeranda2.png"
import DippedbyQueen from "../img/portfolio/dippedbyqueen.png"
import SignedKits from "../img/portfolio/SignedKits.2.png"
import FontysLectoraat from "../img/portfolio/lectoraat.png"

// Import motion and transition
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

import Header from "../components/Header";

const projects = [
  { id: 1, title: "Saunakoning", description: "Re-design & verbetering van bestaande website", img: Saunakoning, link: "/project1" },
  { id: 2, title: "Festivalzone", description: "Mee-werkstage opdracht", img: Festivalzone, link: "/project2" },
  { id: 3, title: "AMW-veranda", description: "Re-design van een website", img: AMWVeranda, link: "/project3" },
  { id: 4, title: "Europeveranda", description: "Leerwerk-traject website", img: EuropeVeranda, link: "/project4" },
  // Uncomment or add more projects as needed
  // { id: 5, title: "Dipped by Queen", description: "Start-up", img: DippedbyQueen, link: "/project5" },
  { id: 6, title: "Signed Kits", description: "Design van social media posts, creëren van flyers", img: SignedKits, link: "/project6" },
  // { id: 7, title: "Fontys Lectoraat - DIFLA", description: "Verbeteren en onderzoek van een bestaande oplossing", img: FontysLectoraat, link: "/project7" },
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
              Explore my portfolio to see the range of projects I've worked on and get a glimpse of my skills and expertise in action.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 lg:gap-2">
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover w-full h-full hover:scale-110 transition-all duration-500" src={Image1} alt="" />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover w-full h-full hover:scale-110 transition-all duration-500" src={Image2} alt="" />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover w-full h-full hover:scale-110 transition-all duration-500" src={Image3} alt="" />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img className="object-cover w-full h-full hover:scale-110 transition-all duration-500" src={Image4} alt="" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 mt-12">
          {projects.map((project) => (
            <div key={project.id} className="shadow-lg rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
              <img src={project.img} alt="" className="w-full h-48 object-cover" />
              <div className="p-4 bg-white">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
                <Link to={project.link} className="mt-4 bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded inline-block">
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
