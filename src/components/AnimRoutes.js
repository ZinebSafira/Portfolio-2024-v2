import React from 'react';
//import  pages
import Home from '../pages/Home'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import Project3 from '../pages/Project3'
import Project4 from '../pages/Project4'
import Project2 from '../pages/Project2'
import Project1 from '../pages/Project1'
import Project6 from '../pages/Project6'


//import routes route  & useLocation hook
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';


const AnimRoutes = () => {
  const location = useLocation ();

  return (
    <AnimatePresence initial={true} mode='wait'>
    <Routes key={location.pathname} location={location}>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Portfolio' element={<Portfolio />} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Project3' element={<Project3/>}/>
      <Route path='/Project4' element={<Project4/>}/>
      <Route path='/Project2' element={<Project2/>}/>
      <Route path='/Project1' element={<Project1/>}/>
      <Route path= '/Project6' element={<Project6/>}/>
    </Routes>
    </AnimatePresence>
  );

};

export default AnimRoutes;
