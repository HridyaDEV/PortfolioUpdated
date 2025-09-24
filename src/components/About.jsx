import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { IoPersonSharp } from 'react-icons/io5';
import { MdGetApp } from 'react-icons/md';

function About() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true }); // Animate once when scrolled into view
    }, []);

    const profileInfo = {
        name: "Hridya P V",
        resumeLink: "/ResumeHRIDYAPV.pdf",
        profileImage: "/IMG_1288.JPG",
    };

    const details = [
        { label: "Phone", value: "+91 8330822381" },
        { label: "Email", value: "pvhridya31@gmail.com" },
        { label: "Place", value: "Calicut" },
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <div className="flex justify-center items-center gap-3 flex-wrap">
                        <IoPersonSharp className="text-5xl text-purple-500" />
                        <h3 className="text-4xl md:text-5xl font-signika text-gray-800">
                            About <span className="text-purple-500">Me</span>
                        </h3>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    {/* Profile Image */}
                    <div className="relative" data-aos="fade-left">
                        <img
                            src={profileInfo.profileImage}
                            alt="Profile"
                            className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-purple-500 opacity-80 animate-pulse"></div>
                    </div>

                    {/* About Details */}
                    <div className="text-left max-w-lg" data-aos="fade-right">
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                            I'm <span className="font-serif text-purple-600 font-bold">{profileInfo.name}</span>,a B.Tech CSE graduate with a passion for web development and design. I specialize in building responsive and intuitive user experiences using modern technologies like React and Tailwind CSS. My skill set includes HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, MongoDB, and MySQL. I’m continuously exploring new technologies to craft innovative and high-quality digital solutions.
                        </p>

                        {/* Personal Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            {details.map((detail, index) => (
                                <p key={index} className="text-gray-600">
                                    <span className="font-bold text-purple-500">{detail.label}:</span> {detail.value}
                                </p>
                            ))}
                        </div>

                        {/* Resume Button */}
                        <a
                            href={profileInfo.resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-6 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-md px-6 py-3 font-semibold hover:scale-105 transition-transform transform hover:shadow-lg"
                        >
                            <span>Get Resume</span>
                            <MdGetApp className="text-xl animate-bounce" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
