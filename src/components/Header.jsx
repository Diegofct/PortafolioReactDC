import React from 'react';


const Header = () => {
  return(
    <header className='py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <a href="#">
            <h3>Welcome to my Portfolio</h3>
          </a>
          <button className='btn btn-sm'>Download CV</button>
        </div>
      </div>
    </header>
  ) 
};

export default Header;
