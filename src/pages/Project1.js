import React from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import ProjectBannerImg from '../img/projects/saunakoningimg.png'; // Ensure the image path is correct

const ProjectShowcase = () => {
    // Applying overflow-hidden to body
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
                    <div className='flex-1 lg:max-h-max order-2 lg:order-none overflow-hidden'>
                        {/* Adjust marginTop here to push the image up */}
                        <img src={ProjectBannerImg} alt="Saunakoning project visual" style={{ marginBottom: '5rem' }} />
                    </div>
                    {/* Text and button */}
                    <motion.div
                        initial={{ scale: 0, y: '-80%' }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0, y: '-80%' }}
                        transition={transition1}
                        className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
                        <h1 className='text-3xl font-bold'>Saunakoning Herontwerp</h1>
                        <p className='mb-12 max-w-md'>
                            Een volledige herontwerp van de Saunakoning website gericht op moderne esthetiek en gebruikerservaring. In nauwe samenwerking met Saunakoning hebben we een fris, nieuw ontwerp en praktische adviezen voor verbeteringen geleverd.
                        </p>
                        <a href='https://saunakoning.netlify.app/' className='btn bg-black text-white font-bold py-2 px-4 rounded hover:bg-opacity-80 transition duration-300' target="_blank" rel="noopener noreferrer">
                            Bekijk Live Demo
                        </a>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default ProjectShowcase;
