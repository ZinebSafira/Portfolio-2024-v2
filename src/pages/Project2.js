import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import ProjectBannerImg from '../img/projects/tuinexpress.png';
import ProjectBannerVideo from "../video/amwveranda-1.mp4"
import ProjectBannerVideo2 from "../video/amwveranda-2.mp4"
import AgileMethod from '../img/projects/agile-01-1024x568.png'
import Festivalzone from '../img/projects/all-devices-black.png'
import BeforeAfter from '../img/projects/beforeandafter.png'
import Design from '../img/projects/design.jpg'


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
                            <a href='https://amwveranda.nl/' target='_blank' rel='noopener noreferrer'>Festivalzone | Meewerkstage bij tuinexpress |</a>

                        </h1>


                        <p className='text-sm text-gray-500'>Gestart in: september 2022| Duur: sep. 2022 - jan. 2023| Status: Behaald</p>
                        <h2 className='text-xl font-semibold text-gray-600'>
                            Meewerkstage | Onderzoek | Verbeteren van bestaande website
                        </h2>
                        <p>
                            Hierbij een kleine introductie van Tuinexpress.nl BV, het bedrijf waar ik stage heb gelopen.Tuinexpress.nl is een snelgroeiend online tuincentrum dat momenteel meer dan 10.000 unieke artikelen aanbiedt.Artikelen rondom huis en tuin binnen bereik. Tuinexpress.nl is opgericht in 2010, uitgegroeid tot een volwaardig online tuincentrum. met mijn kampAfhaalcentrum Tuinexpress.nl in Newcuik, Noord-Brabant voor snelle orderverwerking kunnen leveren.
                            <br></br>
                            <br></br>
                            Festivalzone is de opdrachtgever voor mijn stageproject. Festivalzone is op dit moment een verkoper op bol.com en is ook afhankelijk van hun algoritme. Festivalzone verkoopt via bol.com festival producten en wil zich graag gaan uitbreiden tot een eigen website en meer klantgericht te werk gaan
                        </p>

                        {/* Image with subtitle aligned to the left */}
                        <div className='flex flex-col md:flex-row items-center gap-4'>
                            <div className='flex-1 text-center'>
                                <img src={AgileMethod} alt="AMW-veranda project banner" className="w-full object-cover" />
                                <p className='text-sm text-gray-500 mt-3'>De methode dat is gebruikt</p>
                            </div>
                            <div className='flex-1'>
                                <h3 className='text-xl font-semibold'>Het idee Festivalzone</h3>
                                <p>
                                    Festivalzone wilt dus een eigen website creëren die past bij hun visie. Festivalzone verkoopt al producten via Bol.com. Op dit moment vinden ze dat niet genoeg en willen ze meer klantgericht gaan werken. Ze willen dat het persoonlijker word en meer flexibiliteit bied voor de klanten. In deze nieuwe website kunnen klanten zoeken naar festivals, ze als favoriet stellen en daarbij ook aankopen doen. De opdracht bevat dus een nieuwe website op basis van onderzoek. Een ander onderdeel van deze opdracht is kijken naar de functionaliteiten van de agenda en daarbij ook kijken naar de concurrenten op deze markt.
                                </p>
                            </div>
                        </div>

                        {/* Project Testing with image on the right */}
                        <div className='flex flex-col md:flex-row items-center gap-4'>
                            <div className='flex-1'>
                                <h3 className='text-xl font-semibold'>Landing page website voor Festivalzone</h3>
                                <p>
                                    Aangezien de opdrachtgevers twijfels hadden over het oorspronkelijke designs, was het mijn taak om een tussentijdse pagina te creëren. Ik ontving uiteindelijk nieuwe designs en gaf aan enkele aanpassingen te zullen maken. De website is uiteindelijk gemaakt met de gewenste eisen.
                                </p>
                                <a href="http://festivalzone.com/#home" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-semibold py-2 px-4 rounded hover:bg-gray-800 mt-3 inline-block">
                                    Naar de website
                                </a>
                            </div>
                            <div className='flex-1 text-center'>
                                <img src={Festivalzone} alt="AMW-veranda project banner" className="w-full object-cover" />
                                <p className='text-sm text-gray-500 mt-2'>De landing page</p>
                            </div>
                        </div>

                        



                        <div className='flex flex-col md:flex-row items-center gap-4'>
                            <div>
                                <h3 className='text-2xl font-semibold'>Stage Reflectie: Ontdekkingen en Leermomenten</h3>
                                <p>
                                    Tijdens mijn stage heb ik verschillende projecten aangepakt, waaronder Festivalzone en diverse taken bij Tuinxpress. Deze ervaringen hebben me niet alleen geholpen mijn programmeervaardigheden te verbeteren, maar ook om beter te leren samenwerken, communiceren en begrijpen hoe het bedrijfsleven werkt. Ik ben dankbaar voor de kans om van mijn collega's te leren en deze waardevolle ervaringen op te doen.
                                </p>
                            </div>
                            <div className="flex justify-start md:justify-end items-center mr-10">
                                <img src={BeforeAfter} alt="AMW-veranda project banner" className="w-full object-cover" />
                            </div>
                            <div className="flex justify-start md:justify-end items-center mr-10">
                                <img src={Design} alt="AMW-veranda project banner" className="w-full object-cover" />
                            </div>
                            {/* Add more divs as needed */}
                        </div>
                    </div>
                </div>
            </section>
        </motion.div >



    );
};

export default ProjectShowcase;
