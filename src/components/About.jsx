import React from 'react';
import { motion } from 'framer-motion';
import Image from '../assets/coverphoto.png';
import { fadeIn } from '../variants';

const About = () => {

  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center text-white pt-10' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='hidden lg:flex flex-1 max-w-[300px] lg:max-w-[482px]'>
            <motion.img 
              src={Image} 
              alt="Diego Carreño"
              className='rounded-full border-4 border-white bg-black/50 shadow-lg h-[500px]'
              variants={fadeIn('left', 0.5)}
              initial="hidden"
              animate="show"
            />
          </div>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h2 
              className='text-[55px] font-bold leading-[0.8] lg:text-[80px] text-accent'
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              animate="show"
            >
              About Me
            </motion.h2>
            <motion.p 
              className='text-lg mt-4 lg:mt-8'
              variants={fadeIn('right', 0.5)}
              initial="hidden"
              animate="show"
            >
              Hi, I'm Diego Carreño, a passionate software developer with a strong background in both frontend and backend technologies. My journey in coding began with a curiosity for how things work and has evolved into a deep commitment to creating innovative, efficient, and user-friendly applications. 
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
