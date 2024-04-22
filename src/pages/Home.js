import React from 'react';

//import images
import WomanImg from '../img/home/woman.png';

// import Link
import { Link } from 'react-router-dom'
//import motion
import { motion } from 'framer-motion'
//import transition 
import { transition1 } from '../transitions'

const Home = () => {
  return <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={transition1}
    className='section '>
    <div className="container mx-auto h-full relative">
      { /*text & img wrapper */}
      <div className='flex flex-col justify-center'>
        {/* text */}
        <motion.div
          initial={{ opacity: 0, y: '-10%' }} // Adjust the y value here
          animate={{ opacity: 1, y: 0 }} // Adjust the y value here
          exit={{ opacity: 0, y: '-10%' }} // Adjust the y value here
          transition={transition1}
          className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 
        lg:w-auto z-10 lg:absolute flex flex-col 
        justify-center items-center lg:items-start'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className='h1 text-4xl lg:text-5xl font-bold mb-4'>UX-researcher<br /> &<br></br> Front-end developer</h1>
          <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Eindhoven, Netherlands</p>
          <Link to={'/Contact'} className='btn mb-[30px]'>Let's connect</Link>
        </motion.div>
        { /* image */}
        <div className='flex justify-end max-h-96
        lg:max-h-max'>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transition1}
            className='relative lg:-right-39
            overflow-hidden'>
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              src={WomanImg} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  </motion.section>;
};

export default Home;
