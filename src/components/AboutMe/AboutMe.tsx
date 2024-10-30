// src/components/AboutMe.tsx
import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20 bg-background bg-circuit-board bg-cover bg-center px-4">
      <img
        src="hero.png"
        alt="Hero"
        className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg border-2 border-secondary"
      />
      <h1 className="text-3xl md:text-4xl mt-6 font-semibold text-secondary">
        hi!
      </h1>
      <p className="mt-4 text-center max-w-md md:max-w-xl px-4">
        I'm Rama, an engineer and tech enthusiast.
      </p>
    </div>
  );
};

export default AboutMe;
