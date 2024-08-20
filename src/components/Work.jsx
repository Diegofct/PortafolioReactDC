import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: '2023',
    company: 'Tech Company',
    role: 'Software Developer',
    description: 'Worked on developing and maintaining web applications using React and Java.'
  },
  {
    year: '2022',
    company: 'Web Solutions',
    role: 'Frontend Developer',
    description: 'Created responsive and interactive UI components with React and TailwindCSS.'
  },
  {
    year: '2021',
    company: 'Startup Inc.',
    role: 'Junior Developer',
    description: 'Assisted in building backend services with Java and Spring Boot.'
  }
];

const Work = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center text-white pt-10' id='work'>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Work Experience</h2>
        <div className="relative">
          <div className="absolute w-[2px] bg-gray-300 h-full left-[50%] transform -translate-x-1/2"></div>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-x-8 mb-12 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="bg-white dark:bg-black/50 shadow-lg p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-2">{exp.company}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{exp.role}</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
                </div>
              </div>
              <div className="bg-primary text-white py-2 px-4 rounded-full text-lg lg:mt-0 mt-4">
                {exp.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
