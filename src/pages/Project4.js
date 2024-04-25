import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import ProjectBannerImg from '../img/projects/europeverandabanner2.png';
import ProjectBannerVideo from "../video/europeveranda.mp4";


import { transition1 } from '../transitions';

const ProjectShowcase = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition1}
            className='min-h-screen w-full overflow-auto'>
            <section className='section pt-12'>
                <div className="container mx-auto px-4">
                    <div className='flex flex-col gap-y-12 text-left py-12'>
                        {/* Project Banner */}
                        <div className='w-full overflow-hidden'>
                            <img src={ProjectBannerImg} alt="AMW-veranda project banner" className="w-full object-cover" />
                        </div>

                        {/* Project Title and Expanded Description */}
                        <h1 className='text-3xl font-bold'>
                            <a href='https://amwveranda.nl/' target='_blank' rel='noopener noreferrer'>EuropeVeranda</a>
                        </h1>
                        <p className='text-sm text-gray-500'>Gestart in: April 2023| Duur: apr. 2023 - sep. 2023 · 6 mnd | Status: beeindigd</p>
                        <h2 className='text-xl font-semibold text-gray-600'>
                            Ontwikkeling van een vriendelijke website voor een gespecialiseerd bedrijf in verandabouw
                        </h2>
                        <p>
                            Tijdens dit project hebben we een nieuwe website ontwikkeld voor een klein bedrijf dat gespecialiseerd is in het bouwen en ontwerpen van veranda's. Het bedrijf wilde graag zijn online aanwezigheid uitbreiden en gaf ons de vrijheid om een website te creëren die hun bedrijf op de juiste manier vertegenwoordigt. Een van de belangrijkste eisen van de klant was dat het logo ongewijzigd moest blijven en dat we de kleuren van het logo moesten behouden. Samen met een collega hebben we de website ontworpen met behulp van Bootstrap, waarbij we ervoor hebben gezorgd dat het logo en de kleuren consistent blijven met de branding van het bedrijf.
                        </p>

                        {/* Video and Description */}
                       
                        <div className='flex flex-col md:flex-row items-center gap-4'>
                            <div className='flex-1'>
                                <h3 className='text-xl font-semibold'>De bouw van de website</h3>
                                <p>
                                    Tijdens het bouwproces van de website hebben we gebruik gemaakt van Bootstrap om een solide en responsieve structuur te creëren. Het was van essentieel belang om de website zo snel mogelijk te ontwikkelen, rekening houdend met de tijdlijn van het project. Daarnaast hebben we ervoor gezorgd dat we de kleuren van het logo nauwgezet hebben gevolgd om consistentie te behouden in de branding van het bedrijf.
                                </p>
                            </div>
                            <div className='flex-1 text-center'>
                                <video autoPlay loop muted className="w-full object-cover">
                                    <source src={ProjectBannerVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <p className='text-sm text-gray-500 mt-3'>De Website</p>
                            </div>
                        </div>


                        {/* Project Challenges */}
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            <div>
                                <h3 className='text-2xl font-semibold'>Projectuitdagingen</h3>
                                <p>
                                    Het hosten van de website was een uitdaging omdat de gebruikte technologieën nog relatief nieuw waren. Daarnaast hadden we te maken met een strakke deadline, waardoor we geen ruimte hadden om eventuele feedback achteraf te implementeren. Ondanks deze uitdagingen waren we blij om te horen dat de klant tevreden was met het eindresultaat, wat voor ons van het grootste belang is.
                                </p>
                            </div>
                            <div className="flex justify-start md:justify-end items-center mr-10">
                                <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                                    <a href='https://europaveranda.nl/' target='_blank' rel='noopener noreferrer'>Bekijk website</a>
                                </button>
                            </div>
                            {/* Add more divs as needed */}
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default ProjectShowcase;
