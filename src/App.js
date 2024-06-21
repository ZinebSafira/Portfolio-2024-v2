import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import emailjs from 'emailjs-com';

emailjs.init('n_i5bgDJXKNnqjEwM');

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Hook to change the document title
  useEffect(() => {
    document.title = "Z's Portfolio";  // Set the document title to "Z's Portfolio"

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <Header isScrolled={isScrolled} />
      <AnimRoutes />
    </Router>
  );
};



export default App;
