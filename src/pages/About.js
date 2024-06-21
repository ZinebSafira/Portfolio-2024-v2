import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import WomanImg from '../img/about/woman.png';
import AlbertHeijnLogo from '../img/about/albert-heijn.png';
import TuinexpressLogo from '../img/about/tuinexpress.png';


const About = () => {
  const aboutRef = useRef(null);
  const logoRefs = useRef([]);
  logoRefs.current = [];

  useEffect(() => {
    document.body.classList.add('overflow-x-hidden');
    gsap.fromTo(aboutRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.4 });
    return () => {
      document.body.classList.remove('overflow-x-hidden');
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !logoRefs.current.includes(el)) {
      logoRefs.current.push(el);
    }
  };

  const handleMouseEnter = (index) => {
    gsap.to(logoRefs.current[index], { opacity: 1, scale: 1, duration: 0.5 });
  };

  const handleMouseLeave = (index) => {
    gsap.to(logoRefs.current[index], { opacity: 0, scale: 0.5, duration: 0.5 });
  };

  return (
    <section className="section min-h-screen overflow-x-hidden" style={{ paddingTop: 'calc(80px + 3rem)' }} ref={aboutRef}>
      <div className="container mx-auto h-full relative px-4 md:px-0">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-8 text-center lg:text-left lg:pt-16">
          <div className="flex-1 order-2 lg:order-none overflow-hidden">
            <img src={WomanImg} alt="Woman" className="w-full h-auto max-h-96 lg:max-h-full" />
          </div>
          <div className="flex-1 pt-16 pb-8 lg:pt-0 lg:pb-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
            <h1 className="h1 text-2xl md:text-3xl lg:text-4xl mb-6">About me</h1>
            <p className="mb-8 max-w-md lg:max-w-lg text-base md:text-lg lg:text-xl leading-relaxed">
              My name is <b>Zineb</b>, and I'm a 22-year-old student in my final year of ICT <b>Media Design at Fontys Hogeschool.</b> With a passion for crafting beautiful websites and solving problems through design and improving user-experience, I'm on a journey to graduate in January 2025 with a Bachelor's in Information and Communication Technology, specializing in Media Design.
              <br /><br />
              Based in Eindhoven, I've delved into various technologies including <b>HTML, CSS, JavaScript, Swift, and ReactNative</b>, and I'm currently expanding my skills into React and other modern tech stacks and for designing I use <b>figma.</b>
            </p>
            <Link to="/portfolio" className="btn text-sm md:text-base lg:text-lg">View my work!</Link>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="container mx-auto px-4 md:px-0 pt-32 pb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 text-center lg:text-left">Experience</h2>
        <div className="relative">
          <div className="border-l-2 border-black absolute h-full left-1/2 transform -translate-x-1/2 lg:left-1/2 lg:translate-x-0"></div>
          <div className="flex flex-col gap-y-12">
            <div className="relative lg:flex lg:justify-between lg:items-center" onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}>
              <div className="order-2 lg:order-none lg:w-1/2 lg:pr-8">
                <div className="w-6 h-6 bg-black rounded-full absolute left-1/2 top-0 lg:top-[calc(50%-4rem)] transform -translate-x-1/2"></div>
                <div className="mt-2 lg:text-right">
                  <h3 className="text-xl font-semibold">2017-2021</h3>
                  <h4 className="text-lg font-bold">Stock Clerk at Albert Heijn</h4>
                  <p className="text-sm md:text-base text-gray-700">Responsible for stocking shelves, assisting customers, and maintaining store cleanliness and organization.</p>
                  <div className="absolute left-1/2 top-[calc(50%-4rem)] transform -translate-x-1/2 opacity-0 scale-0" ref={addToRefs}>
                    <img src={AlbertHeijnLogo} alt="Albert Heijn Logo" className="w-20 h-auto" />
                  </div>
                </div>
              </div>
              <div className="hidden lg:block lg:w-1/2"></div>
            </div>
            <div className="relative lg:flex lg:justify-between lg:items-center" onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
              <div className="hidden lg:block lg:w-1/2"></div>
              <div className="order-2 lg:order-none lg:w-1/2 lg:pl-8">
                <div className="w-6 h-6 bg-black rounded-full absolute left-1/2 top-0 lg:top-[calc(50%-4rem)] transform -translate-x-1/2"></div>
                <div className="mt-2">
                  <h3 className="text-xl font-semibold">2021 - Present</h3>
                  <h4 className="text-lg font-bold">Fresh Food Employee at Albert Heijn</h4>
                  <p className="text-sm md:text-base text-gray-700">Since 2021, I've been working as a fresh food employee at Albert Heijn, responsible for handling fresh produce and ensuring top quality service.</p>
                  <div className="absolute left-1/2 top-[calc(50%-4rem)] transform -translate-x-1/2 opacity-0 scale-0" ref={addToRefs}>
                    <img src={AlbertHeijnLogo} alt="Albert Heijn Logo" className="w-20 h-auto" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative lg:flex lg:justify-between lg:items-center" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
              <div className="order-2 lg:order-none lg:w-1/2 lg:pr-8">
                <div className="w-6 h-6 bg-black rounded-full absolute left-1/2 top-0 lg:top-[calc(50%-4rem)] transform -translate-x-1/2"></div>
                <div className="mt-2 lg:text-right">
                  <h3 className="text-xl font-semibold">Sep. 2022 - Jan. 2023</h3>
                  <h4 className="text-lg font-bold">Tuinexpress.nl B.V - Intern - Front-end Developer</h4>
                  <p className="text-sm md:text-base text-gray-700">Interned as a Front-end Developer and UX/UI Designer at Tuinexpress.nl, creating a landing page and exploring project possibilities for Festivalzone.</p>
                  <div className="absolute left-1/2 top-[calc(50%-4rem)] transform -translate-x-1/2 opacity-0 scale-0" ref={addToRefs}>
                    <img src={TuinexpressLogo} alt="Tuinexpress Logo" className="w-20 h-auto" />
                  </div>
                </div>
              </div>
              <div className="hidden lg:block lg:w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
