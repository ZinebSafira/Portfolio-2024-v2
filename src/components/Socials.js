import React from 'react';
import { ImLinkedin, ImPhone, ImMail } from 'react-icons/im';

const Socials = () => {
  return (
    <div className='hidden xl:flex ml-24'>
      <ul className='flex gap-x-4'>
        <li>
          <a href='https://www.linkedin.com/in/zenoubagouram/' target='_blank' rel='noopener noreferrer'>
            <ImLinkedin />
          </a>
        </li>
        <li>
          <a href='tel:+31682746880' target='_blank' rel='noopener noreferrer'>
            <ImPhone />
          </a>
        </li>
        <li>
          <a href='mailto:zinebgouram@outlook.com' target='_blank' rel='noopener noreferrer'>
            <ImMail />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
