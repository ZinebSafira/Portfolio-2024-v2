import React from 'react';
import { Link } from 'react-router-dom';
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';

const Header = ({ isScrolled }) => {
  return (
    <header
      className={`fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center ${isScrolled ? 'bg-white' : ''
        }`}
    >
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* {logo} */}
        <Link to={'/'} className="max-w-[200px]">
          <img src={Logo} alt="" />
        </Link>
        {/* { nav - initially hidden - show on desktop mode } */}
        <nav className='hidden xl:flex gap-x-12 font-semibold'>
          <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>Home</Link>
          <Link to={'/About'} className='text-[#696c6d] hover:text-primary transition'>About</Link>
          <Link to={'/Portfolio'} className='text-[#696c6d] hover:text-primary transition'>Portfolio</Link>
          <Link to={'/Contact'} className='text-[#696c6d] hover:text-primary transition'>Contact</Link>
        </nav>
      </div>
      {/* socials */}
      <Socials />
      {/* Mobile Nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
