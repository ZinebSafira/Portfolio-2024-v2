import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import ProjectBannerImg from '../img/projects/amw.png';

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
                        <h1 className='text-3xl font-bold'>AMW-veranda</h1>
                        <p className='text-sm text-gray-500'>Gestart in: januari 2024 | Duur: 6 maanden</p>
                        <h2 className='text-xl font-semibold text-gray-600'>
                            Revitalisatie van een klantgerichte website voor een gespecialiseerd verandabouwbedrijf
                        </h2>
                        <p>
                            Dit project betrof de revitalisatie van een verouderde website voor een klein bedrijf gespecialiseerd in de bouw en het ontwerp van veranda's. De klant was op zoek naar een snellere, modernere en meer functionele online aanwezigheid. In samenwerking met een collega hebben we de site herbouwd met behulp van Bootstrap. Het doel is om de site verder te ontwikkelen met aangepaste functies, waaronder een gebruikersdashboard, om de klantenservice te verbeteren.
                        </p>

                        {/* Image with subtitle aligned to the left */}
                        <div className='flex flex-col md:flex-row items-center gap-4'>
                            <div className='flex-1 text-center'>
                                <img
                                    className="object-cover w-full max-w-xs mx-auto h-auto transition-transform duration-300 hover:scale-110"
                                    src={ProjectBannerImg}
                                    alt="Project analysis phase"
                                />
                                <p className='text-sm text-gray-500 mt-2'>Analysefase</p>
                            </div>
                            <div className='flex-1'>
                                <p>
                                    Naast websiteontwikkeling omvat het project plannen voor uitgebreid beheer van social media en het ontwerp van professionele content, waarbij ik mijn vaardigheden in digitale communicatie en grafisch ontwerp verder kan ontwikkelen.
                                </p>
                            </div>
                        </div>

                        {/* Project Testing with image on the right */}
                        <div className='flex flex-col md:flex-row items-center gap-4'>
                            <div className='flex-1'>
                                <h3 className='text-xl font-semibold'>Website Testen</h3>
                                <p>
                                    De website is uitvoerig getest om de gebruiksvriendelijkheid te garanderen. We hebben verschillende gebruikstesten uitgevoerd, waarbij we feedback verzamelden van potentiële gebruikers. Uit de resultaten bleek dat er meerdere verbeterpunten zijn, zoals de navigatie en de responsiviteit op mobiele apparaten. Deze bevindingen worden gebruikt om de website te optimaliseren.
                                </p>
                            </div>
                            <div className='flex-1 text-center'>
                                <img
                                    className="object-cover w-full max-w-xs mx-auto h-auto transition-transform duration-300 hover:scale-110"
                                    src={ProjectBannerImg}
                                    alt="Testing phase"
                                />
                                <p className='text-sm text-gray-500 mt-2'>Testfase</p>
                            </div>
                        </div>

                        {/* Further sections with images and texts */}
                        <div className='space-y-4'>
                            <h3 className='text-2xl font-semibold'>Projectuitdagingen</h3>
                            <p>
                                De belangrijkste uitdagingen waren het hosten en tijdig implementeren van updates binnen strakke deadlines. Als beginner in websitehosting was dit een intensief leertraject. De technische problemen die we tegenkwamen en de succesvolle samenwerking hebben ons team waardevolle ervaringen opgeleverd.
                            </p>
                            <div className='text-center'>
                                <img
                                    className="object-cover w-full max-w-xs mx-auto h-auto transition-transform duration-300 hover:scale-110"
                                    src={ProjectBannerImg}
                                    alt="Challenges faced"
                                />
                                <p className='text-sm text-gray-500 mt-2'>Uitdagingen</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default ProjectShowcase;
