import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import WomanImg from '../img/contact/woman.png';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4gkh9qx', 'template_dq72f84', e.target, 'n_i5bgDJXKNnqjEwM')
      .then((result) => {
        setFormSubmitted(true);
        gsap.to('.contact-form', { opacity: 0, duration: 0.5 });
        gsap.to('.success-message', { opacity: 1, y: 0, duration: 0.5, delay: 0.5 });
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <motion.section
      initial={{ scale: 0, y: '100%' }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: '100%' }}
      transition={transition1}
      className='section bg-white min-h-screen overflow-y-auto'
    >
      <div className="container mx-auto h-full px-4">
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
          <motion.div className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top top-72 -z-10'></motion.div>
          <div className='lg:flex-1 lg:pt-32 px-4 relative'>
            <h1 className='h1 mb-15'>Contact me</h1>
            <p className='mb-12'>I would love to grab a coffee with you!</p>
            <form className='contact-form flex flex-col gap-y-4' onSubmit={sendEmail}>
              <div className='flex flex-col lg:flex-row gap-y-4 gap-x-10'>
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='text' placeholder='Your name' name='from_name' required />
                <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type='email' placeholder='Your e-mail address' name='reply_to' required />
              </div>
              <textarea className='outline-none border-b border-b-primary bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' rows='5' placeholder='Your message' name='message' required></textarea>
              <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Send it</button>
            </form>
            <div className='success-message opacity-0 absolute top-1/2 transform -translate-y-1/2 w-full text-center'>
              <p>Your message is sent and I hope I can answer you shortly!</p>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0, y: '100%' }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: '100%' }}
            transition={{
              transition: transition1,
              duration: 1.5
            }}
            className='lg:flex-1 flex justify-center items-center'
          >
            <img src={WomanImg} alt='' className='w-full h-auto max-h-96 lg:max-h-full object-cover lg:object-contain' />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
