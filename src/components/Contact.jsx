import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const contacts = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hridyapv',
    icon: <FaLinkedin className="text-blue-600 text-4xl" />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/HridyaDEV',
    icon: <FaGithub className="text-gray-800 text-4xl" />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/_hrid_',
    icon: <FaInstagram className="text-pink-500 text-4xl" />,
  },
];

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-800">Contact Me</h3>
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          Feel free to reach out for collaborations or just to say hi!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
              aria-label={contact.name}
            >
              {contact.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
