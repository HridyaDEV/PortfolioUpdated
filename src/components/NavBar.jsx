import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-white shadow-md fixed top-0 w-full z-10">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-purple-500">Hridya P V</h1>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <a href="#brief" className="hover:text-purple-500">Home</a>
                    <a href="#about" className="hover:text-purple-500">About</a>
                    <a href="#education" className="hover:text-purple-500">Education</a>
                    <a href="#skills" className="hover:text-purple-500">Skills</a>
                    <a href="#projects" className="hover:text-purple-500">Projects</a>
                    <a href="#contact" className="hover:text-purple-500">Contact</a>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden bg-white shadow-md">
                    <div className="flex flex-col space-y-4 px-4 py-4 text-gray-700 font-medium">
                        <a href="#brief" className="hover:text-purple-500" onClick={toggleMenu}>Home</a>
                        <a href="#about" className="hover:text-purple-500" onClick={toggleMenu}>About</a>
                        <a href="#education" className="hover:text-purple-500" onClick={toggleMenu}>Education</a>
                        <a href="#skills" className="hover:text-purple-500" onClick={toggleMenu}>Skills</a>
                        <a href="#projects" className="hover:text-purple-500" onClick={toggleMenu}>Projects</a>
                        <a href="#contact" className="hover:text-purple-500" onClick={toggleMenu}>Contact</a>
                    </div>
                </nav>
            )}
        </header>
    );
}

export default NavBar;
