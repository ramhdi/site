// src/components/Contact.tsx
import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
      <h2 className="text-2xl md:text-3xl mt-20 mb-8 font-semibold text-secondary">
        Contact Me
      </h2>
      <div className="space-y-4 text-text">
        <p className="flex items-center">
          <FaEnvelope className="mr-2 text-accent" />
          <a href="mailto:rahardi6699@gmail.com" className="hover:text-secondary">
            rahardi6699@gmail.com
          </a>
        </p>
        {/* <p className="flex items-center">
          <FaPhone className="mr-2 text-accent" />
          <a href="tel:+1234567890" className="hover:text-secondary">
            (123) 456-7890
          </a>
        </p> */}
        <p className="flex items-center">
          <FaGithub className="mr-2 text-accent" />
          <a
            href="https://github.com/ramhdi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary"
          >
            GitHub
          </a>
        </p>
        <p className="flex items-center">
          <FaLinkedin className="mr-2 text-accent" />
          <a
            href="https://www.linkedin.com/in/rahardi6699"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
