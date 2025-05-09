
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Activity, BarChart, Layers, Calculator } from 'lucide-react';

interface SkillProps {
  name: string;
  proficiency: number;
  description?: string;
  additionalInfo?: string[];
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  // Technical skills categories
  const programmingLanguages: SkillProps[] = [
    { name: 'Python', proficiency: 8, icon: <Code className="h-5 w-5" /> }
  ];
  
  const machineLearning: SkillProps[] = [
    { 
      name: 'Machine Learning & Deep Learning', 
      proficiency: 6, 
      additionalInfo: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
      icon: <Layers className="h-5 w-5" /> 
    }
  ];
  
  const databaseManagement: SkillProps[] = [
    { name: 'SQL', proficiency: 8, icon: <Database className="h-5 w-5" /> }
  ];
  
  const mathematics: SkillProps[] = [
    { 
      name: 'Mathematics for Data Science', 
      proficiency: 7, 
      description: 'Core Concepts: Probability, Linear Algebra, Statistics',
      icon: <Calculator className="h-5 w-5" />
    }
  ];
  
  const dataAnalytics: SkillProps[] = [
    { 
      name: 'Data Analytics & Visualization', 
      proficiency: 8, 
      description: 'Tools: Excel, Power BI, SQL',
      icon: <BarChart className="h-5 w-5" />
    }
  ];
  
  const aiTools: SkillProps[] = [
    { name: 'AI Tools & Prompt Engineering', proficiency: 9, icon: <Brain className="h-5 w-5" /> }
  ];
  
  // Professional skills
  const professionalSkills: SkillProps[] = [
    { name: 'Communication', proficiency: 7, icon: <Activity className="h-5 w-5" /> },
    { name: 'Continuous Learning & Adaptability', proficiency: 9, icon: <Activity className="h-5 w-5" /> },
    { name: 'Time Management', proficiency: 7, icon: <Activity className="h-5 w-5" /> },
    { name: 'Critical Thinking', proficiency: 8, icon: <Activity className="h-5 w-5" /> },
    { name: 'Problem Solving', proficiency: 9, icon: <Activity className="h-5 w-5" /> }
  ];
  
  // Render a skill with progress bar
  const renderSkill = (skill: SkillProps) => (
    <HoverCard key={skill.name}>
      <HoverCardTrigger asChild>
        <div className="skill-item mb-6 group transition-all duration-300">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <span className="text-portfolio-accent group-hover:text-portfolio-accent-hover transition-colors duration-300">
                {skill.icon}
              </span>
              <h3 className="font-medium text-portfolio-light group-hover:text-portfolio-accent transition-colors duration-300">
                {skill.name}
              </h3>
            </div>
            <span className="text-portfolio-muted text-sm">
              {skill.proficiency}/10
            </span>
          </div>
          
          <div className="relative">
            <Progress 
              value={skill.proficiency * 10} 
              className="h-2 bg-portfolio-navy transition-all duration-500 ease-in-out group-hover:h-3"
            />
          </div>
          
          {skill.description && (
            <p className="text-portfolio-muted text-sm mt-1">{skill.description}</p>
          )}
          
          {skill.additionalInfo && (
            <div className="flex flex-wrap gap-2 mt-2">
              {skill.additionalInfo.map((info) => (
                <Badge key={info} variant="outline" className="bg-portfolio-navy/50 text-xs">
                  {info}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 bg-portfolio-navy border-portfolio-accent/20">
        <div className="flex justify-between">
          <div>
            <h4 className="font-semibold flex items-center gap-2">
              {skill.icon}
              {skill.name}
            </h4>
            <p className="text-sm text-portfolio-muted mt-2">
              Proficiency: {skill.proficiency}/10
            </p>
            {skill.description && (
              <p className="text-sm text-portfolio-muted mt-1">{skill.description}</p>
            )}
          </div>
        </div>
        {skill.additionalInfo && (
          <div className="mt-3">
            <h5 className="text-sm font-medium mb-2">Technologies:</h5>
            <div className="flex flex-wrap gap-1">
              {skill.additionalInfo.map((info) => (
                <Badge key={info} variant="outline" className="bg-portfolio-navy/80">
                  {info}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </HoverCardContent>
    </HoverCard>
  );
  
  return (
    <section id="skills" className="py-20 container-custom bg-portfolio-navy/50">
      <h2 className="section-heading">Skills</h2>
      
      <p className="text-portfolio-muted mb-10 max-w-2xl">
        A snapshot of the key technologies I work with and the professional strengths I bring to the table.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {/* Technical Skills Section */}
        <Card className="bg-portfolio-dark-blue/40 border-portfolio-slate/10 backdrop-blur-sm">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-portfolio-light mb-4 border-b border-portfolio-slate/10 pb-2">
              Technical Skills
            </h3>
            <CardContent className="p-0">
              {programmingLanguages.map(renderSkill)}
              {machineLearning.map(renderSkill)}
              {databaseManagement.map(renderSkill)}
              {mathematics.map(renderSkill)}
              {dataAnalytics.map(renderSkill)}
              {aiTools.map(renderSkill)}
            </CardContent>
          </div>
        </Card>

        {/* Professional Skills Section */}
        <Card className="bg-portfolio-dark-blue/40 border-portfolio-slate/10 backdrop-blur-sm">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-portfolio-light mb-4 border-b border-portfolio-slate/10 pb-2">
              Professional Skills
            </h3>
            <CardContent className="p-0">
              {professionalSkills.map(renderSkill)}
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
