import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';

import SignedKits from '../img/projects/SignedKits.png';
import SignedKits1 from '../img/projects/SignedKits - 1.png';
import SignedKits2 from '../img/projects/SignedKits - 2.png';

const ProjectShowcase = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const images = [SignedKits1, SignedKits2];

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
                        <div className='w-full overflow-hidden flex justify-center'>
                            <img src={SignedKits} alt="SignedKits project banner" style={{ marginTop: '10rem' }} />
                        </div>

                        {/* Project Title and Expanded Description */}
                        <h1 className='text-3xl font-bold'>Creatieve Partnerschap met SignedKits</h1>
                        <p className='text-sm text-gray-500'>Gestart in maart 2024 | Status: Actief</p>
                        <h2 className='text-xl font-semibold text-gray-600'>
                            Ontwerp van Social Media Posts voor SignedKits.
                        </h2>
                        <p>
                            Dit project omvat het creëren van aantrekkelijke social media content die de unieke, handgesigneerde voetbalshirts van SignedKits belicht. Mijn rol is het ontwerpen van posts die niet alleen de shirts tonen, maar ook de verhalen erachter vertellen, om zo de aandacht van fans en verzamelaars te trekken.
                        </p>

                        {/* Image Grid */}
                        <div className='grid grid-cols-3 gap-4 mt-4'>
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Gesigneerd Shirt ${index}`}
                                    className="w-full h-100 object-cover rounded-lg shadow-lg cursor-pointer"
                                    onClick={() => setSelectedImg(img)}
                                />
                            ))}
                        </div>

                        {/* Modal for viewing selected image */}
                        {selectedImg && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                                <div className="bg-white p-2 rounded">
                                    <img src={selectedImg} alt="Zoomed in" className="max-w-full max-h-full" />
                                    <button onClick={() => setSelectedImg(null)} className="absolute top-0 right-0 text-white text-2xl p-2">&times;</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default ProjectShowcase;
