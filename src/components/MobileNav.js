import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
import gsap from 'gsap';

//menu variants
const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);

  useEffect(() => {
    if (openMenu) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 0.2 }
      );
      gsap.fromTo(
        menuItemsRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.2, duration: 0.8, delay: 0.4 }
      );
    }
  }, [openMenu]);

  const addToMenuItemsRef = (el) => {
    if (el && !menuItemsRef.current.includes(el)) {
      menuItemsRef.current.push(el);
    }
  };

  return (
    <nav className="text-primary xl:hidden">
      {/* nav open button */}
      <div onClick={() => setOpenMenu(true)} className="text-3xl cursor-pointer">
        <CgMenuRight />
      </div>
      {/* menu */}
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? 'show' : ''}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 h-screen z-20"
        ref={menuRef}
      >
        {/* icon */}
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>
        {/* menu list */}
        <ul
          className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl"
          onClick={() => setOpenMenu(false)}
        >
          <li ref={addToMenuItemsRef}>
            <Link to="/">Home</Link>
          </li>
          <li ref={addToMenuItemsRef}>
            <Link to="/About">About</Link>
          </li>
          <li ref={addToMenuItemsRef}>
            <Link to="/Portfolio">Portfolio</Link>
          </li>
          <li ref={addToMenuItemsRef}>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
