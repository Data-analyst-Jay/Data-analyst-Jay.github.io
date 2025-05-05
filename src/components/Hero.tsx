
import React from 'react';
import { ChevronRight } from 'lucide-react';
import CTAButton from './CTAButton';
import ProfileImage from './ProfileImage';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 md:pt-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      <div className="container-custom h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="md:col-span-7 space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-portfolio-accent/10 text-portfolio-accent text-sm font-medium mb-2">
              IIT Patna
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-portfolio-light leading-tight">
              Jaynarayan <span className="text-portfolio-accent">Gehlot</span>
            </h1>
            
            <p className="text-lg md:text-xl text-portfolio-muted max-w-2xl leading-relaxed">
              Aspiring Data Scientist & AI Enthusiast | Passionate about uncovering insights from data and building intelligent solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <CTAButton href="#projects" variant="primary">
                View My Projects
                <ChevronRight size={16} />
              </CTAButton>
              
              <CTAButton href="/resume.pdf" variant="secondary">
                Download Resume
              </CTAButton>
            </div>
            
            <div className="inline-flex items-center gap-x-2 text-sm text-portfolio-muted pt-6">
              <div className="w-12 h-0.5 bg-portfolio-accent/30"></div>
              <span>Sophomore | Computer Science & Data Analytics</span>
            </div>
          </div>
          
          <div className="md:col-span-5 order-first md:order-last">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <ProfileImage className="animate-fade-in" />
              
              <div className="absolute bottom-4 left-0 z-30">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-portfolio-navy/80 backdrop-blur-sm rounded-lg border border-portfolio-accent/20">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-xs font-medium">CGPA: 8.42</span>
                </div>
              </div>
              
              <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-portfolio-accent/20 to-transparent rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="text-portfolio-muted text-sm">Scroll down</div>
        <ChevronRight className="rotate-90 text-portfolio-accent mt-1" size={16} />
      </div>
    </section>
  );
};

export default Hero;
