import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import WomanImg from '../img/contact/woman.png';
import { transition1 } from '../transitions';

const Contact = () => {
  const [formData, setFormData] = useState({ to_name: '', from_name: '', message: '', reply_to: '' });
  const [isEmailSent, setIsEmailSent] = useState(false);
  const formRef = useRef(null);
  const successMessageRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.reply_to)) {
      alert('Please enter a valid email address');
      return;
    }
    emailjs.send("service_4gkh9qx", "template_dq72f84", formData)
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setIsEmailSent(true);
        gsap.to(formRef.current, {
          opacity: 0, y: -50, duration: 0.5, onComplete: () => {
            gsap.to(successMessageRef.current, { opacity: 1, y: 0, duration: 0.5 });
          }
        });
      }, (error) => {
        console.error('Error sending email:', error.text);
        setIsEmailSent(false);
      });
  };

  return (
    <motion.section
      initial={{ scale: 0, y: '100%' }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: '100%' }}
      transition={transition1}
      className='section bg-white'>
      <div className="container mx-auto h-full">
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
          <motion.div className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top top-72 -z-10'></motion.div>
          <div className='lg:flex-1 lg:pt-32 px-4'>
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12'>I would love to grab a coffee with you!</p>
            <form ref={formRef} className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
              <div className='flex gap-x-10'>
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='text'
                  name='to_name'
                  placeholder='Your name'
                  value={formData.to_name}
                  onChange={handleChange}
                />
                <input
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                  type='email'
                  name='reply_to'
                  placeholder='Your e-mail address'
                  value={formData.reply_to}
                  onChange={handleChange}
                />
              </div>
              <input
                className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                type='text'
                name='message'
                placeholder='Your message'
                value={formData.message}
                onChange={handleChange}
              />
              <button className='btn mb-[30px] mx-auto lg:mx-0 self-start' type='submit'>Send it</button>
            </form>
            <div ref={successMessageRef} className={`${isEmailSent ? 'block' : 'hidden'}`} style={{ opacity: 0, transform: 'translateY(50px)' }}>
              <p>Your message is sent and I hope I can answer you shortly!</p>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0, y: '100%' }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: '100%' }}
            transition={{
              transition: transition1,
              duration: 1.5,
            }}
            className='lg:flex-1'>
            <img src={WomanImg} alt='' className='w-3/4 h-auto' />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
