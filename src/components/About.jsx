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
              Hello, I am Diego Carreño, a software developer with knowledge in both frontend and backend development. I have a foundation in creating dynamic web applications using technologies such as React, TailwindCSS, Java, and Spring Boot. As a Systems Development Technologist, graduated from SENA, I continually strive to improve my skills and keep up with the latest industry trends. My experience at Campuslands has pushed the boundaries to consolidate knowledge in the area of ​​web development. I am deeply committed to delivering high-quality, scalable solutions that generate real impact. My problem-solving skills and attention to detail allow me to tackle complex challenges. I am eager to contribute to innovative projects that push the boundaries of what is possible in technology.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
