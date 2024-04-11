import React from 'react';


//import images
import WomanImg from '../img/about/woman.png'

//import link
import { Link } from 'react-router-dom';

const About = () => {
  return <section className='section '>
    <div className="container mx-auto h-full relative">
      {/* text & img wrapper*/}
      <div className=' flex flex-col 
      lg:flex-row h-full items-center justify-center  gap-x-24
      text-center lg:text-left lg:pt-16'>
        { /*image */}
        <div className='flex-1 max-h-96 lg:max-h-max
        order-2 lg:order-none overflow-hidden'>
          <img src={WomanImg} alt="" />
        </div>
        {/* text */}
        <div className='flex-1 pt-36 pb-14 lg:pt-0
        lg:w-auto z-10 flex flex-col justify-center
        items-center lg:items-start'>
          <h1 className='h1'>About me</h1>
          <p className='mb-12 max-w-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            <br />
            <br />
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>


          <Link to={'/portfolio'}>View my work!</Link>
        </div>
      </div>
    </div>
  </section>;
};

export default About;
