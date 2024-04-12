import React from 'react';


//import components
import Header from './components/Header'
import AnimRoutes from './components/AnimRoutes'
import MobileNav from './components/MobileNav'
import Socials from './components/Socials'

//import router
import {BrowserRouter as Router} from 'react-router-dom';

//import motion
import {motion} from 'framer-motion';




const App = () => {
  return <>
   <Router>
    <Header/>
    <AnimRoutes/>
   </Router>
   {/*cursor */}
  
  </>
};

export default App;
