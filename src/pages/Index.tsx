
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import ContactMe from '@/components/ContactMe';

const Index: React.FC = () => {
  return (
    <div className="gradient-bg min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
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
