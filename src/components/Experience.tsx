
import React from 'react';
import { Card } from '@/components/ui/card';
import { Compass } from 'lucide-react';
import CTAButton from './CTAButton';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 container-custom bg-portfolio-navy/50">
      <h2 className="section-heading">Experience</h2>
      
      <div className="flex flex-col items-center justify-center mt-10">
        <Card className="relative bg-portfolio-dark-blue/40 border-portfolio-slate/10 backdrop-blur-sm max-w-3xl mx-auto p-8 hover:border-portfolio-accent/30 transition-all duration-300">
          <div className="flex items-start gap-5">
            <div className="hidden sm:flex shrink-0 p-3 bg-portfolio-navy/70 rounded-full border border-portfolio-slate/10">
              <Compass className="h-6 w-6 text-portfolio-accent" />
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-portfolio-light leading-relaxed">
                As an enthusiastic sophomore in Computer Science and Data Analytics, I am building a strong foundation in Machine Learning and Deep Learning and am keen to transition my academic learning into practical industry experience. While I am actively pursuing my first formal internship role, the {' '}
                <CTAButton 
                  href="#projects" 
                  variant="secondary" 
                  className="inline-flex items-center px-2 py-1 hover:bg-portfolio-accent/20 font-medium rounded-md text-portfolio-accent"
                >
                  Projects
                </CTAButton> 
                {' '} section of this portfolio serves as a comprehensive demonstration of my current technical skills, dedication, and potential. I encourage you to review my work there.
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-portfolio-accent/5 via-portfolio-accent to-portfolio-accent/5 w-full"></div>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
