
import React from 'react';
import { Database, Flask, Code, LightbulbOff, Lightbulb, PieChart, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="container-custom">
        <h2 className="section-heading">About Me</h2>
        
        {/* Mission Statement */}
        <div className="mt-8 mb-12 max-w-3xl">
          <p className="text-xl md:text-2xl font-medium text-portfolio-light leading-relaxed">
            I am driven by the power of data to transform ideas into solutions that create meaningful impact in the real world.
          </p>
        </div>
        
        {/* Academic Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <Database className="text-portfolio-accent" size={24} />
              <h3 className="text-2xl font-bold text-portfolio-light">My Academic Journey</h3>
            </div>
            
            <p className="text-portfolio-light text-lg mb-4">
              I am currently pursuing a Bachelor of Science (BSc) in Computer Science and Data Analytics.
            </p>
          </div>
          
          <div className="lg:col-span-8">
            <h4 className="text-xl font-semibold text-portfolio-accent mb-4">Key Areas of Study & Specializations:</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-portfolio-navy border-portfolio-slate/10 overflow-hidden group hover:border-portfolio-accent/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 text-portfolio-accent">
                    <BarChart size={28} />
                  </div>
                  <h5 className="text-lg font-semibold text-portfolio-light mb-2">Data Analytics</h5>
                  <p className="text-portfolio-muted">
                    Proficiency in Excel, Power BI, statistical analysis, and SQL for uncovering data-driven insights.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-portfolio-navy border-portfolio-slate/10 overflow-hidden group hover:border-portfolio-accent/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 text-portfolio-accent">
                    <Flask size={28} />
                  </div>
                  <h5 className="text-lg font-semibold text-portfolio-light mb-2">Data Science</h5>
                  <p className="text-portfolio-muted">
                    Developing skills in Python, Machine Learning (ML), Deep Learning (DL), and Data Structures & Algorithms (DSA) to build intelligent models.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-portfolio-navy border-portfolio-slate/10 overflow-hidden group hover:border-portfolio-accent/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 text-portfolio-accent">
                    <Code size={28} />
                  </div>
                  <h5 className="text-lg font-semibold text-portfolio-light mb-2">Web Development</h5>
                  <p className="text-portfolio-muted">
                    Experience with Python-based web frameworks like Django and Flask, enabling me to understand full-stack data application potential.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <Separator className="bg-portfolio-slate/10 my-12" />
        
        {/* Interests & Passions in Data */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <Lightbulb className="text-portfolio-accent" size={24} />
              <h3 className="text-2xl font-bold text-portfolio-light">My Spark: Interests in Data Science & AI</h3>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="bg-gradient-to-br from-portfolio-navy to-portfolio-midnight p-6 rounded-lg border border-portfolio-slate/10">
              <p className="text-lg text-portfolio-light leading-relaxed">
                Within the vast field of Data Science, I'm particularly captivated by Artificial Intelligence (AI) and its 
                transformative potential as a productivity tool. I'm also keenly exploring the art and science of prompt 
                engineering. My curiosity drives me to continuously learn and adapt to new tools and emerging technologies 
                in the data ecosystem.
              </p>
            </div>
          </div>
        </div>
        
        {/* Career Aspirations & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <LightbulbOff className="text-portfolio-accent" size={24} />
              <h3 className="text-2xl font-bold text-portfolio-light">My Career Path & Future Vision</h3>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="bg-gradient-to-br from-portfolio-navy to-portfolio-midnight p-6 rounded-lg border border-portfolio-slate/10">
              <p className="text-lg text-portfolio-light leading-relaxed">
                My immediate career objective is to immerse myself in the corporate world, applying my skills and 
                gaining invaluable industry experience for a few years. Looking towards the long term, my aspiration 
                is to channel this experience into founding a startup. I am passionate about leveraging technology 
                to revolutionize Indian agriculture, a sector I believe is ripe with opportunities for innovation 
                and positive impact.
              </p>
            </div>
          </div>
        </div>
        
        {/* My "Why": Motivation for Data */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <PieChart className="text-portfolio-accent" size={24} />
              <h3 className="text-2xl font-bold text-portfolio-light">Why Data? My Motivation</h3>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="bg-gradient-to-br from-portfolio-navy to-portfolio-midnight p-6 rounded-lg border border-portfolio-slate/10">
              <p className="text-lg text-portfolio-light leading-relaxed">
                My passion for the data domain is rooted in an inherent curiosity to discern patterns, extract meaningful 
                insights, and make sense of complex datasets. I thrive on practical, evidence-based problem-solving, a 
                core tenet of any data scientist or analyst. While the broader field of data science is fascinating, 
                I find a particular affinity for Data Analytics, especially the art of crafting compelling data 
                visualizations and intuitive dashboards that effectively communicate data-driven narratives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
