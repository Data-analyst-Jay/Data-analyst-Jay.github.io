
import React from 'react';
import { ChevronRight } from 'lucide-react';
import CTAButton from './CTAButton';
import ProfileImage from './ProfileImage';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 md:pt-32 relative overflow-hidden pb-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      <div className="container-custom h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="md:col-span-7 space-y-6 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-portfolio-light leading-tight">
              Jaynarayan <span className="text-portfolio-accent">Gehlot</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-portfolio-muted max-w-2xl leading-relaxed">
              An analytical thinker, AI Enthusiast and decisive, undergraduate student at IIT Patna, passionate about leveraging data to drive impactful insights and solve real-world problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <CTAButton href="#projects" variant="primary">
                View My Projects
                <ChevronRight size={18} />
              </CTAButton>
              
              <CTAButton href="https://drive.google.com/uc?export=download&id=1qzZvbrhrQp0KYH-hLu3hn_XRChmvbu3x" variant="secondary">
                Download Resume
              </CTAButton>
            </div>
            
            <div className="inline-flex items-center gap-x-2 text-lg md:text-xl text-portfolio-muted pt-6 pb-8 md:pb-0">
              <div className="w-12 h-0.5 bg-portfolio-accent/30"></div>
              <span>Undergraduate @ IIT Patna | Computer Science & Data Analytics</span>
            </div>
          </div>
          
          <div className="md:col-span-5 order-first md:order-last">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <ProfileImage className="animate-fade-in" />
              
              <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-portfolio-accent/20 to-transparent rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce hidden md:flex">
        <div className="text-portfolio-muted text-base">Scroll down</div>
        <ChevronRight className="rotate-90 text-portfolio-accent mt-1" size={18} />
      </div>
    </section>
  );
};

export default Hero;
