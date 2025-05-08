
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import ContactMe from '@/components/ContactMe';

const Index: React.FC = () => {
  return (
    <div className="gradient-bg min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      
      {/* Placeholder for future sections */}
      <div id="skills" className="py-20 container-custom bg-portfolio-navy/50">
        <h2 className="section-heading">Skills</h2>
        <p className="text-portfolio-muted">
          This section will be implemented in the future.
        </p>
      </div>
      
      <div id="projects" className="py-20 container-custom">
        <h2 className="section-heading">Projects</h2>
        <p className="text-portfolio-muted">
          This section will be implemented in the future.
        </p>
      </div>
      
      <div id="experience" className="py-20 container-custom bg-portfolio-navy/50">
        <h2 className="section-heading">Experience</h2>
        <p className="text-portfolio-muted">
          This section will be implemented in the future.
        </p>
      </div>
      
      <ContactMe />
      
      <footer className="py-6 text-center text-portfolio-muted text-sm border-t border-portfolio-slate/10">
        <div className="container-custom">
          © {new Date().getFullYear()} Jaynarayan Gehlot. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
