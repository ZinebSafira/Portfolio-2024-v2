import React from 'react';
//import components

import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';


//import link
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <header className='bg-pink-200 fixed w-full px-[30px]
    lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex 
    items-center'>
      <div className='flex flex-col lg:flex-row
      lg:items-center w-full justify-between'>
        {/* {logo} */}
        <Link to={'/'}>
          <img src={Logo} alt="" />
        </Link>
      </div>
    </header>


  );
};

export default Header;
