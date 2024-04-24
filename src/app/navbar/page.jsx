"use client"

import React, { useState } from 'react';
import { MagnifyingGlassIcon, SunIcon,Bars3Icon,XMarkIcon} from '@heroicons/react/24/outline';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setShowMenu(false);
    }
  };

  return (
    <div>
      <div className='bg-blue-default flex p-4 '>
        <div className='title text-white font-bold text-2xl md:ml-20 lg:ml-20 '>
          Flex.IT
        </div>
        <div className='lg:hidden ml-40 md:ml-96 mt-1'>
          {showMenu ? (
            <XMarkIcon
              className='w-6 text-white cursor-pointer'
              onClick={() => setShowMenu(false)}
            />
          ) : (
            <Bars3Icon
              className='w-6 text-white cursor-pointer'
              onClick={() => setShowMenu(true)}
            />
          )}
        </div>
        <ul className={`lg:flex lg:gap-8 text-sm text-white lg:ml-56 lg:mt-2 ${showMenu ? '' : 'hidden'}`}>
          <li>
            <button onClick={() => scrollToSection('home')}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('services')}>Services</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('portfolio')}>Portfolio</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('testimonial')}>Testimonials</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('pricing')}>Pricing</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </li>
        </ul>
        <div className='flex gap-5 lg:ml-20 md:mr-40 lg:ml-20 ml-5'>
          <MagnifyingGlassIcon className='w-6 text-white' />
          <SunIcon className='w-6 text-white' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
