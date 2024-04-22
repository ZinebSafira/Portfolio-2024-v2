import React from 'react';

//import images
import WomanImg from '../img/about/woman.png';
//import Link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions';

const About = () => {
  // Apply overflow-hidden class to the body element
  React.useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <motion.section
      initial={{ scale: 0, y: '100%' }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: '100%' }}
      transition={transition1}
      className='section'
      style={{ paddingTop: 'calc(80px + 3rem)' }} // Adjust paddingTop here
    >
      <div className="container mx-auto h-full relative">
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={WomanImg} alt="" />
          </div>
          {/* text */}
          <motion.div
            initial={{ scale: 0, y: '-80%' }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>About me</h1>
            <p className='mb-12 max-w-sm'>

              My name is <b>Zineb👋</b>, and I'm a 22-year-old student in my final year of ICT <b>Media Design at Fontys Hogeschool.</b>

              With a passion for crafting beautiful websites and solving problems through design and improving user-experience, I'm on a journey to graduate in January 2025 with a Bachelor's in Information and Communication Technology, specializing in Media Design.
              <br></br>
              <br></br>
              Based in Eindhoven, I've delved into various technologies including <b>HTML, CSS, JavaScript, Swift, and ReactNative</b>, and I'm currently expanding my skills into React and other modern tech stacks and for designing I use <b>figma.</b>

            </p>
            <Link to={'/portfolio'} className='btn'>View my work!</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
