import React from 'react';
import cv from '../assets/documents/cvDC.pdf'


const Header = () => {
  return(
    <header className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <a href="#">
            <h3 className='h-10'>CoDiegoDev</h3>
          </a>
          <a href={cv} download>
            <button className='btn btn-sm'>Download CV</button>
          </a>
        </div>
      </div>
    </header>
  ) 
};

export default Header;
