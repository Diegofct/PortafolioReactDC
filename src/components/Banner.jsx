import React from 'react';

import Image from '../assets/coverphoto.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[80vh] flex items-center' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              Diego <span>Carreño</span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='mb-6 text-[30px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a </span>
              <TypeAnimation sequence={[
                'Software Developer',
                2000,
                'Front-end Developer',
                2000,
                'Back-end Developer',
                2000
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity} />
            </motion.div>
            <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nobis doloremque corrupti impedit vel porro, nostrum et commodi cum voluptatibus a ipsam tempore magni ab odit ratione officiis harum qui.
            </motion.p>
            <div className='flex text-[40px] gap-x-6 max-w-max mx-auto lg:mx-0 cursor-pointer'>
              <a href="" className='cursor-pointer'>
                <FaGithub />
              </a>
              <a href="" className='cursor-pointer'>
                <FaLinkedin />
              </a>
              <a href="" className='cursor-pointer'>
                <SiGmail />
              </a>
            </div>
          </div>
          <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} className='hidden lg:flex flex-1 max-w-[300px] lg:max-w-[482px]'>
            <img className='rounded-full border-4 border-white shadow-lg h-[500px]' src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default Banner;
