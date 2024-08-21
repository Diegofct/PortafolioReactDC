import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: '2023',
    company: 'Atento',
    role: 'Teleoperator agent Technical support',
    description: `Technical support teleoperator agent at the company Atento; I provided technical support to Spanish clients who had problems with their fixed and mobile telephone lines, internet and TV for Movistar Spain.`
  },
  {
    year: '2023',
    company: 'Ingeotel SAS',
    role: 'FTTH Design Technician',
    description: `I performed mapping functions for open field fiber optic networks, I worked with the AutoCAD tool for the design of FTTH infrastructure, creating coverage areas`
  },
  {
    year: '2019-2020',
    company: 'Avidesa MacPollo',
    role: 'Intern and Systems Assistant',
    description: `I started as an intern in the IT systems area, providing technical support, by telephone, to the company's programs and applications, where I managed the database, making queries and, among other things, using SQLserver as a manager; I also managed the SAP tool that was used as a help desk for some applications in the different areas of the company. After completing the internship, I obtained a contract for two more months, performing the position of systems assistant, performing the same functions.`
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
