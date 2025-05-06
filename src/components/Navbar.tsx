
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import CTAButton from './CTAButton';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-portfolio-navy/95 backdrop-blur-lg shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="/" className="text-3xl font-bold text-portfolio-light">
          JG<span className="text-portfolio-accent">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="nav-link text-base">About Me</a>
          <a href="#skills" className="nav-link text-base">Skills</a>
          <a href="#projects" className="nav-link text-base">Projects</a>
          <a href="#experience" className="nav-link text-base">Experience</a>
          <a href="#contact" className="nav-link text-base">Contact Me</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-portfolio-light hover:text-portfolio-accent"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute w-full bg-portfolio-navy/95 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <nav className="container-custom flex flex-col gap-4">
          <a 
            href="#about" 
            className="nav-link px-2 py-2 text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Me
          </a>
          <a 
            href="#skills" 
            className="nav-link px-2 py-2 text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className="nav-link px-2 py-2 text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a 
            href="#experience" 
            className="nav-link px-2 py-2 text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Experience
          </a>
          <a 
            href="#contact" 
            className="nav-link px-2 py-2 text-base"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Me
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
