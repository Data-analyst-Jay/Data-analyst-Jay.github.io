import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Database, BarChart3, Brain, TrendingUp } from 'lucide-react';

interface ProjectData {
  id: string;
  title: string;
  summary: string;
  methodology: string;
  tools: string[];
  outcome: string;
  category: string;
}

const Projects: React.FC = () => {
  const projects: ProjectData[] = [
    {
      id: 'datacrux',
      title: 'DataCrux',
      summary: "An analysis of 2 years of Adidas sales data (9649 rows & 15 columns) to extract key trends and three actionable business insights. This project was undertaken as part of the 'Datacrux' competition organized by 'Analytical Arena'.",
      methodology: 'The project involved a detailed analytical process. This included comprehensive Exploratory Data Analysis (EDA), meticulous Data Cleaning of the 9649-row dataset, and the application of Analytical Thinking to identify significant patterns and derive actionable insights from the sales data.',
      tools: ['Excel', 'Power BI', 'AI techniques', 'EDA processes', 'Data Cleaning'],
      outcome: 'Successfully identified key sales trends from the two-year dataset and delivered three actionable business insights designed to inform strategic decision-making.',
      category: 'Data Analytics'
    },
    {
      id: 'agricultural-ml',
      title: 'Machine Learning for Agricultural Optimization using Altair AI Studio',
      summary: 'Developed two distinct machine learning models (Decision Trees) within Altair AI Studio to address critical agricultural optimization challenges. These models focus on predicting crop yield and providing data-driven crop recommendations, aiming to enhance resource management, support food security efforts, and improve farmer profitability. This project was created for the Altair Data Science contest held on Unstop.',
      methodology: 'Leveraged machine learning techniques, specifically Decision Tree algorithms, using the Altair AI Studio platform. The methodology involved comprehensive Exploratory Data Analysis (EDA) of agricultural datasets, statistical analysis to identify influential factors, and robust data analysis practices to build, train, and validate predictive models for both crop recommendation and yield forecasting.',
      tools: ['Altair AI Studio', 'Excel', 'Machine Learning', 'Decision Tree algorithms', 'Data Analysis', 'Statistical Analysis', 'EDA'],
      outcome: 'The crop recommendation model achieved an accuracy of 81.2%, providing reliable, data-driven suggestions for optimal crop selection. The crop yield prediction model demonstrated notable precision with a mean absolute error of 6.548 (±4.413), offering valuable forecasting capabilities for agricultural planning. These models highlight the significant potential of AI in providing actionable insights for the agricultural sector.',
      category: 'Machine Learning'
    },
    {
      id: 'air-quality-sql',
      title: 'SQL-Based Air Quality Analysis for Major Indian Cities',
      summary: "Conducted an in-depth SQL-based analysis of one year's air quality data (2023-24, covering 2191 records and 8 variables) for six major Indian cities. This project aimed to identify crucial pollution trends and extract actionable insights to inform strategies for reducing urban air pollution and addressing its underlying causes.",
      methodology: "Leveraged MySQL for complex data querying, aggregation, and detailed analysis of the extensive air quality database. The methodology involved applying systematic data analysis techniques to explore pollution patterns, identify correlations between variables, and uncover significant anomalies. Core Database Management (DBMS) principles ensured efficient data handling, with Excel used for initial data inspection and supplementary review.",
      tools: ['MySQL', 'SQL', 'Excel', 'Data Analysis', 'DBMS'],
      outcome: "Successfully extracted key trends and actionable insights concerning air quality, providing a data-informed foundation for developing targeted pollution control measures and public health advisories in major Indian urban centers. Future Scope: The project roadmap includes designing and developing a dedicated web UI using Python and Django to enable dynamic querying, visualization, and broader public interaction with the air quality database and its findings.",
      category: 'Database'
    }
  ];

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'Data Analytics':
        return <BarChart3 className="text-portfolio-accent" size={24} />;
      case 'Machine Learning':
        return <Brain className="text-portfolio-accent" size={24} />;
      case 'Database':
        return <Database className="text-portfolio-accent" size={24} />;
      default:
        return <TrendingUp className="text-portfolio-accent" size={24} />;
    }
  };

  const getToolColor = (tool: string) => {
    const toolColors: { [key: string]: string } = {
      'Excel': 'bg-green-500/10 text-green-400 border-green-500/20',
      'Power BI': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      'Python': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      'SQL': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      'AI techniques': 'bg-portfolio-accent/10 text-portfolio-accent border-portfolio-accent/20',
      'EDA processes': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      'Data Cleaning': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
      'Altair AI Studio': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      'Machine Learning': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      'Decision Tree algorithms': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
      'Data Analysis': 'bg-red-500/10 text-red-400 border-red-500/20',
      'Statistical Analysis': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      'EDA': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      'MySQL': 'bg-blue-600/10 text-blue-300 border-blue-600/20',
      'DBMS': 'bg-slate-500/10 text-slate-400 border-slate-500/20'
    };
    return toolColors[tool] || 'bg-portfolio-slate/10 text-portfolio-muted border-portfolio-slate/20';
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      <div className="container-custom">
        <h2 className="section-heading">Projects</h2>
        
        <div className="mt-8 mb-6">
          <p className="text-xl text-portfolio-muted max-w-3xl">
            A showcase of my data science and analytics projects, demonstrating practical applications 
            of data-driven insights and technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-portfolio-navy border-portfolio-slate/10 overflow-hidden group hover:border-portfolio-accent/50 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-2xl"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {getProjectIcon(project.category)}
                    <div>
                      <CardTitle className="text-2xl font-bold text-portfolio-light group-hover:text-portfolio-accent transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className="mt-2 bg-portfolio-accent/10 text-portfolio-accent border-portfolio-accent/20">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <ExternalLink className="text-portfolio-muted group-hover:text-portfolio-accent transition-colors duration-300 cursor-pointer" size={20} />
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Brief Summary */}
                <div>
                  <h4 className="text-lg font-semibold text-portfolio-light mb-2">Brief Summary</h4>
                  <p className="text-portfolio-muted leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Methodology & Approach */}
                <div>
                  <h4 className="text-lg font-semibold text-portfolio-light mb-2">Methodology & Approach</h4>
                  <p className="text-portfolio-muted leading-relaxed">
                    {project.methodology}
                  </p>
                </div>

                {/* Tools & Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-portfolio-light mb-3">Tools & Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className={`${getToolColor(tool)} hover:scale-105 transition-transform duration-200`}
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Outcome or Impact */}
                <div>
                  <h4 className="text-lg font-semibold text-portfolio-light mb-2">Outcome & Impact</h4>
                  <p className="text-portfolio-muted leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Future Projects Placeholder */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-portfolio-muted">
            <div className="w-12 h-0.5 bg-portfolio-accent/30"></div>
            <span className="text-lg">More projects coming soon</span>
            <div className="w-12 h-0.5 bg-portfolio-accent/30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
