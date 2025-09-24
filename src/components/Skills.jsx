import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { CgFigma } from 'react-icons/cg';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDatabase, FaCode, FaJava, FaNodeJs, FaBootstrap
} from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb } from 'react-icons/si';

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    { id: 1, icon: <FaHtml5 className="text-6xl text-orange-500" />, name: 'HTML', description: 'Building the structure of websites' },
    { id: 2, icon: <FaCss3Alt className="text-6xl text-blue-500" />, name: 'CSS', description: 'Styling and designing websites' },
    { id: 3, icon: <FaReact className="text-6xl text-cyan-500" />, name: 'React.js', description: 'Building dynamic and responsive UI' },
    { id: 4, icon: <FaJsSquare className="text-6xl text-yellow-300" />, name: 'JavaScript', description: 'Making websites interactive' },
    { id: 5, icon: <RiTailwindCssFill className="text-6xl text-cyan-500" />, name: 'Tailwind CSS', description: 'CSS framework for fast and custom web design' },
    { id: 6, icon: <FaBootstrap className="text-6xl text-purple-600" />, name: 'Bootstrap', description: 'Responsive and mobile-first framework' },
    { id: 7, icon: <CgFigma className="text-6xl text-black" />, name: 'Figma', description: 'Designing UI/UX prototypes' },
    { id: 8, icon: <SiMongodb className="text-6xl text-green-600" />, name: 'MongoDB', description: 'NoSQL database management' },
    { id: 9, icon: <FaNodeJs className="text-6xl text-green-700" />, name: 'Node.js', description: 'Server-side JavaScript runtime' },
    { id: 10, icon: <SiExpress className="text-6xl text-black" />, name: 'Express.js', description: 'Backend framework for Node.js' },
    { id: 11, icon: <FaCode className="text-6xl text-gray-800" />, name: 'C Programming', description: 'Low-level language for system programming' },
    { id: 12, icon: <GrMysql className="text-6xl text-blue-500" />, name: 'MySQL', description: 'Managing relational databases' },
    { id: 13, icon: <FaJava className="text-6xl text-cyan-600" />, name: 'Java', description: 'Versatile language for applications' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <div className="flex justify-center items-center gap-5 flex-wrap" data-aos="fade-up">
          <FaCode className="text-5xl text-purple-500" />
          <h3 className="text-4xl md:text-5xl font-signika">
            My <span className="text-purple-500">Skills</span>
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center"
              data-aos="fade-up"
            >
              <div className="mb-4">{skill.icon}</div>
              <h4 className="text-xl font-semibold text-gray-700">{skill.name}</h4>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
