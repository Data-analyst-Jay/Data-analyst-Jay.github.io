
import React from 'react';
import { ChevronRight } from 'lucide-react';
import CTAButton from './CTAButton';
import ProfileImage from './ProfileImage';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 md:pt-32 relative overflow-hidden pb-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      <div className="container-custom h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                <ProfileImage className="animate-fade-in" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-portfolio-light leading-tight">
                Jaynarayan <span className="text-portfolio-accent">Gehlot</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-portfolio-muted max-w-2xl leading-relaxed">
              An analytical thinker, AI Enthusiast and decisive, undergraduate student at IIT Patna, passionate about leveraging data to drive impactful insights and solve real-world problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <CTAButton href="#projects" variant="primary">
                View My Projects
                <ChevronRight size={18} />
              </CTAButton>
              
              <CTAButton href="/resume.pdf" variant="secondary">
                Download Resume
              </CTAButton>
            </div>
            
            <div className="inline-flex items-center gap-x-2 text-lg md:text-xl text-portfolio-muted pt-6 pb-16 md:pb-8">
              <div className="w-12 h-0.5 bg-portfolio-accent/30"></div>
              <span>Undergraduate @ IIT Patna | Computer Science & Data Analytics</span>
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
