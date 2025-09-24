import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { MdKeyboardDoubleArrowDown } from 'react-icons/md';

function Brief() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // Animate once
  }, []);

  return (
    <section
      id="brief"
      className="bg-gradient-to-r from-purple-500 to-violet-600 text-white text-center py-32 md:py-40 flex flex-col justify-center items-center px-4 md:px-12 gap-8"
    >
      <div data-aos="fade-up" className="max-w-xl">
        <h2 className="text-4xl sm:text-5xl font-bold animate-pulse">
          Hi, I'm Hridya!
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-100">

I’m a passionate Computer Science graduate and a fresher, eager to learn, grow, and contribute to meaningful and impactful projects.        </p>

        <a
          href="#about"
          className="mt-6 inline-flex items-center gap-3 px-6 py-3 bg-white text-purple-600 font-medium text-lg rounded shadow-md hover:bg-gray-200 transition transform hover:scale-105"
        >
          About Me
          <MdKeyboardDoubleArrowDown className="text-2xl animate-bounce" />
        </a>
      </div>
    </section>
  );
}

export default Brief;
