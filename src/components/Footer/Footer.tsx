// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-center p-4 text-text">
      © {new Date().getFullYear()} Your Name. All rights reserved.
    </footer>
  );
};

export default Footer;
