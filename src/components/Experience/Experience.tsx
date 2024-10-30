// src/components/Experience.tsx
import React from 'react';
import { FaLaptopCode, FaGraduationCap, FaPaperPlane, FaSatellite, FaShieldAlt, FaBroadcastTower } from 'react-icons/fa';

type ExperienceItem = {
  year: string;
  title: string;
  company?: string;
  description: string;
  icon: JSX.Element;
};

const experiences: ExperienceItem[] = [
  {
    year: 'Aug 2022 - Present',
    title: 'Iot Application Engineer',
    company: 'CADIT Consultants',
    description: 'Providing comprehensive vehicle telematics solutions.',
    icon: <FaLaptopCode className="text-secondary" />,
  },
  {
    year: 'Dec 2021 - Jul 2022',
    title: 'Discovery Software Engineer',
    company: 'Mobileum',
    description: 'Enhanced network signatures classification for mobile traffic analytics software',
    icon: <FaBroadcastTower className="text-secondary" />,
  },
  {
    year: 'Jul 2021 - Dec 2021',
    title: 'Research & Development Engineer',
    company: 'LAPI ITB',
    description: 'Developed novel radar antenna for defense.',
    icon: <FaShieldAlt className="text-secondary" />,
  },
  {
    year: 'Jul 2021',
    title: 'Graduated from ITB',
    description: 'B.Sc in Telecommunication Engineering.',
    icon: <FaGraduationCap className="text-secondary" />,
  },
  {
    year: 'Jun 2020 - Jul 2020',
    title: 'Satellite Payload Engineer Intern',
    company: 'Bank Rakyat Indonesia',
    description: 'Studied VSAT operations for banking.',
    icon: <FaSatellite className="text-secondary" />,
  },
  {
    year: 'Dec 2017 - Jul 2021',
    title: 'Telemetry Staff',
    company: 'Aksantara ITB',
    description: 'Built intelligent drones with reliable telemetry systems.',
    icon: <FaPaperPlane className="text-secondary" />,
  },
  {
    year: 'Aug 2017',
    title: 'Started attending university',
    description: 'Studied Telecommunication Engineering at Bandung Institute of Technology (ITB)',
    icon: <FaGraduationCap className="text-secondary" />,
  },
];

const Experience: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4 py-20">
      <h2 className="text-2xl md:text-3xl mb-8 font-semibold text-secondary">
        Experience
      </h2>
      <div className="ml-10 md:ml-10">
        {experiences.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-start ml-4 md:ml-6 pl-6 border-l-2 border-secondary ${index === experiences.length - 1 ? 'border-none' : 'pb-10'
              }`}
          >
            {/* Icon container with adjusted positioning */}
            <div className="absolute -left-5 md:-left-6 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-primary border-2 border-secondary rounded-full">
              {item.icon}
            </div>
            {/* Content */}
            <div className="ml-6 md:ml-10">
              <p className="flex flex-col md:flex-row md:items-center text-text">
                <span className="font-semibold text-accent">{item.year}</span>
                <span className="hidden md:inline md:mx-2">-</span>
                <span className="font-semibold">{item.title}</span>
              </p>
              {item.company && <p className="italic text-text">{item.company}</p>}
              <p className="text-text mt-2 text-left whitespace-normal break-words max-w-lg">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
