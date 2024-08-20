import React from 'react';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, 
  SiMysql, SiPostgresql, SiSpring, SiPython 
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Services = () => {
  const skills = [
    { Icon: SiHtml5, color: 'text-orange-600', name: 'HTML', description: 'Web Development' },
    { Icon: SiCss3, color: 'text-blue-500', name: 'CSS', description: 'Styling' },
    { Icon: SiJavascript, color: 'text-yellow-500', name: 'JavaScript', description: 'Interactive Web' },
    { Icon: SiReact, color: 'text-cyan-500', name: 'React', description: 'UI Development' },
    { Icon: SiTailwindcss, color: 'text-teal-400', name: 'TailwindCSS', description: 'Utility-First Styling' },
    { Icon: SiMysql, color: 'text-blue-700', name: 'MySQL', description: 'Database Management' },
    { Icon: SiPostgresql, color: 'text-blue-400', name: 'PostgreSQL', description: 'Relational Database' },
    { Icon: FaJava, color: 'text-red-600', name: 'Java', description: 'Backend Development' },
    { Icon: SiSpring, color: 'text-green-500', name: 'Spring', description: 'Java Framework' },
    { Icon: SiPython, color: 'text-green-300', name: 'Python', description: 'Backend Development' },
  ];

  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center pt-10' id='services'>
      <div className="container mx-auto">
        <div>
          <h2 className='text-3xl font-semibold text-center mb-8'>Skills and Services</h2>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
          {skills.map((skill, index) => (
            <div key={index} className='bg-black/50 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg hover:scale-105 transition-transform'>
              <skill.Icon className={`${skill.color} text-6xl`} />
              <h3 className='text-xl font-bold mt-4'>{skill.name}</h3>
              <p className='text-sm text-gray-300'>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
