import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import ProjectBannerImg from '../img/projects/amw.png';
import ProjectBannerVideo from "../video/amwveranda-1.mp4"
import ProjectBannerVideo2 from "../video/amwveranda-2.mp4"

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
                            <a href='https://amwveranda.nl/' target='_blank' rel='noopener noreferrer'>AMW-veranda   </a>

                        </h1>


                        <p className='text-sm text-gray-500'>Gestart in: december 2022| Duur: dec. 2022 - mrt. 2023 · 4 mnd | Status: nog aan de gang</p>
                        <h2 className='text-xl font-semibold text-gray-600'>
                            Vernieuwing van een vriendelijke website voor een gespecialiseerd bedrijf in verandabouw
                        </h2>
                        <p>
                            We hebben de oude website van een klein bedrijf dat veranda's bouwt en ontwerpt, opgefrist en gebruiksvriendelijker gemaakt. Ons doel was om de site sneller en moderner te maken, zodat klanten gemakkelijker kunnen vinden wat ze zoeken. Samen met een collega hebben we de website opnieuw ontworpen met Bootstrap. We blijven eraan werken om de website nog beter te maken, met handige functies zoals een persoonlijk dashboard, om onze klanten nog beter van dienst te zijn.
                        </p>

                        {/* Image with subtitle aligned to the left */}
                        <div className='flex flex-col md:flex-row items-center gap-4'>
                            <div className='flex-1 text-center'>
                                <video autoPlay loop muted className="w-full object-cover">
                                    <source src={ProjectBannerVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <p className='text-sm text-gray-500 mt-3'>Analysefase</p>
                            </div>
                            <div className='flex-1'>
                                <h3 className='text-xl font-semibold'>Onze Reis naar een Nieuwe Digitale Look: Flexibel Werken van Analyse tot Creatie</h3>
                                <p>
                                    Tijdens ons project hebben we een oudere website nieuw leven ingeblazen, social media beheerd en aantrekkelijke content ontworpen. Terwijl we werkten, heb ik mijn vaardigheden op het gebied van digitale communicatie en grafisch ontwerp verbeterd. We hebben flexibel gewerkt, wat betekent dat we snel en makkelijk konden aanpassen aan veranderingen en nieuwe ideeën.
                                    In de eerste fase hebben we de bestaande website grondig bekeken, waarbij we niet alleen keken naar hoe die gebouwd was, maar ook hoe mensen die gebruikten en wat de klant wilde. Dit vormde de basis voor onze strategie om de website te vernieuwen tot een moderne en klantgerichte ervaring.
                                    Gedurende het proces hebben we nauw samengewerkt met de klant, waarbij we hun feedback hebben geïntegreerd om een oplossing te creëren die perfect aan hun wensen voldeed. Dit resulteerde in een website die niet alleen goed werkt, maar er ook mooi uitziet.
                                    We hebben gebruik gemaakt van tools zoals GitHub voor versiebeheer, Visual Studio Code voor het coderen, Bootstrap voor het ontwerp en GoDaddy voor het hosten van de website. Deze tools hebben ons geholpen om efficiënt en effectief te werken, waardoor we een hoogwaardig eindproduct konden leveren.
                                </p>
                            </div>
                        </div>

                        {/* Project Testing with image on the right */}
                        <div className='flex flex-col md:flex-row items-center gap-4'>
                            <div className='flex-1'>
                                <h3 className='text-xl font-semibold'>Website Testen</h3>
                                <p>
                                    De website is uitvoerig getest om de gebruiksvriendelijkheid te garanderen. We hebben verschillende gebruikstesten uitgevoerd, waarbij we feedback verzamelden van potentiële gebruikers. Uit de resultaten bleek dat er meerdere verbeterpunten zijn, zoals de navigatie en de responsiviteit op mobiele apparaten. Deze bevindingen worden gebruikt om de website te verbeterd.
                                    Uiteindelijk hebben we de website gecreërd en zijn we nogsteeds aan verbeteren.
                                </p>
                            </div>
                            <div className='flex-1 text-center'>
                                <video autoPlay loop muted className="w-full object-cover">
                                    <source src={ProjectBannerVideo2} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <p className='text-sm text-gray-500 mt-2'>De  vernieuwde website</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                            <div>
                                <h3 className='text-2xl font-semibold'>Projectuitdagingen</h3>
                                <p>
                                    De belangrijkste uitdagingen waren het hosten en tijdig implementeren van updates binnen strakke deadlines. Als beginner in websitehosting was dit een intensief leertraject. De technische problemen die we tegenkwamen en de succesvolle samenwerking hebben ons team waardevolle ervaringen opgeleverd.
                                </p>
                            </div>
                            <div className="flex justify-start md:justify-end items-center mr-10">
                                <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                                    <a href='https://amwveranda.nl/' target='_blank' rel='noopener noreferrer'>Bekijk website</a>
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
