// src/components/Projects.tsx
import React, { useState, useEffect, useRef } from 'react';
import './Projects.css'; // Import CSS file for custom transition styles

type Project = {
  image: string;
  title: string;
  description: string;
  link?: string;
};

const projects: Project[] = [
  // Include as many projects as needed
  {
    image: '/projects/json.jpg',
    title: 'JSON Formatter',
    description: 'Compactify and expand JSON',
    link: '#',
  },
  {
    image: '/projects/beamforming.jpg',
    title: 'Beamforming Antenna',
    description: 'Local positioning using WiFI signal',
    link: '#',
  },
  {
    image: '/projects/orca.jpg',
    title: 'ORCA UAV Telemetry',
    description: 'Long-range WiFi UAV telemetry',
    link: '#',
  },
  {
    image: '/projects/psr.jpg',
    title: 'Radar Antenna',
    description: 'Primary surveillance radar for defense',
    link: '#',
  },
  {
    image: '/projects/winglet.jpg',
    title: 'Winglet Antenna',
    description: 'Compact telemetry antenna for UAV',
    link: '#',
  },
  {
    image: '/projects/wpd.jpg',
    title: 'RF Power Divider',
    description: 'Enable spatial diversity',
    link: '#',
  },
  {
    image: '/projects/svc.jpg',
    title: 'Sous Vide Cooker',
    description: 'Cook better steaks with greater control',
    link: '#',
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  const numVisibleProjects = 3; // Number of projects to display at once
  const totalProjects = projects.length;

  const [currentIndex, setCurrentIndex] = useState(numVisibleProjects); // Start from the first original item
  const [isTransitioning, setIsTransitioning] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);

  // Prepare the projects list with clones at the beginning and end for infinite scrolling
  const [projectItems, setProjectItems] = useState<Project[]>([]);

  useEffect(() => {
    // Clone last numVisibleProjects items and prepend
    // Clone first numVisibleProjects items and append
    const clonesBefore = projects.slice(-numVisibleProjects);
    const clonesAfter = projects.slice(0, numVisibleProjects);
    const items = [...clonesBefore, ...projects, ...clonesAfter];
    setProjectItems(items);

    // Set initial position of the track
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${(currentIndex * 100) / numVisibleProjects}%)`;
    }
  }, [currentIndex, numVisibleProjects]);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // After transition ends, adjust index if at clone
  useEffect(() => {
    if (!isTransitioning) return;

    const transitionEndHandler = () => {
      setIsTransitioning(false);

      // If at clone before, jump to original
      if (currentIndex <= 0) {
        setCurrentIndex(totalProjects);
        if (trackRef.current) {
          trackRef.current.style.transition = 'none';
          trackRef.current.style.transform = `translateX(-${(totalProjects * 100) / numVisibleProjects}%)`;
          // Force reflow to ensure the transition is reset
          void trackRef.current.offsetWidth;
          trackRef.current.style.transition = 'transform 0.5s ease-in-out';
        }
      }
      // If at clone after, jump to original
      else if (currentIndex >= totalProjects + numVisibleProjects) {
        setCurrentIndex(numVisibleProjects);
        if (trackRef.current) {
          trackRef.current.style.transition = 'none';
          trackRef.current.style.transform = `translateX(-${(numVisibleProjects * 100) / numVisibleProjects}%)`;
          // Force reflow to ensure the transition is reset
          void trackRef.current.offsetWidth;
          trackRef.current.style.transition = 'transform 0.5s ease-in-out';
        }
      }
    };

    const timer = setTimeout(transitionEndHandler, 500); // Match transition duration
    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning, totalProjects, numVisibleProjects]);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transition = isTransitioning ? 'transform 0.5s ease-in-out' : 'none';
      trackRef.current.style.transform = `translateX(-${(currentIndex * 100) / numVisibleProjects}%)`;
    }
  }, [currentIndex, isTransitioning, numVisibleProjects]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background px-4">
      <h2 className="text-2xl md:text-3xl mt-20 mb-8 font-semibold text-secondary">
        Projects
      </h2>
      <div className="flex items-center space-x-2 overflow-hidden w-full max-w-4xl">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="text-2xl md:text-3xl p-2 md:p-4 text-text hover:text-secondary transition transform hover:scale-110"
        >
          &lt;
        </button>

        {/* Carousel Container */}
        <div className="carousel-container relative w-full">
          <div className="carousel-track" ref={trackRef}>
            {projectItems.map((project, index) => (
              <div key={index} className="carousel-item px-2">
                <div className="flex flex-col items-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-64 object-cover rounded shadow-lg"
                  />
                  <h3 className="text-center md:text-xl mt-4 text-secondary">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-center max-w-md px-2">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-accent hover:text-secondary"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="text-2xl md:text-3xl p-2 md:p-4 text-text hover:text-secondary transition transform hover:scale-110"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Projects;
