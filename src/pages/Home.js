import React from 'react';

// Import images
import WomanImg from '../img/home/woman.png';

// Import Link
import { Link } from 'react-router-dom';
// Import motion
import { motion } from 'framer-motion';
// Import transition 
import { transition1 } from '../transitions';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section min-h-screen flex items-center overflow-auto'
    >
      <div className="container mx-auto h-full relative px-4 md:px-0 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Wrapper */}
        <div className='flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2'>
          <motion.div
            initial={{ opacity: 0, y: '-10%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-10%' }}
            transition={transition1}
            className='z-10 flex flex-col justify-center'
          >
            <div className='pt-20 md:pt-32 lg:pt-0 pb-10 lg:pb-0'>
              <h1 className='h1 text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
                UX-Researcher & <br />
                Front-End Developer
              </h1>
              <p className='text-lg md:text-xl lg:text-2xl font-primary mb-6 lg:mb-10'>
                Eindhoven, Netherlands
              </p>
              <Link to={'/Contact'} className='btn mb-8 lg:mb-10 text-base md:text-lg lg:text-xl'>
                Let's connect
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Image Wrapper */}
        <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transition1}
            className='relative w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg'
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              src={WomanImg} alt=""
              className='w-full h-auto'
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
