import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      role: "Senior Graphic Design Specialist",
      company: "Experion, New York, NY",
      period: "2019 - Present",
      description: "Lead in the design, development, and implementation of the graphic, layout, and production communication materials",
      points: [
        "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.",
        "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design"
      ]
    },
    {
      role: "Graphic Design Specialist",
      company: "Stepping Stone Advertising, New York, NY",
      period: "2017 - 2018",
      description: "Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements).",
      points: [
        "Managed up to 5 projects or tasks at a given time while under pressure",
        "Recommended and consulted with clients on the most appropriate graphic design"
      ]
    },
    {
      role: "Junior Graphic Designer",
      company: "Stepping Stone Advertising, New York, NY",
      period: "2016 - 2017",
      description: "Assisted in the design of numerous marketing programs and materials.",
      points: [
        "Created designs, concepts, and sample layouts based on knowledge of layout principles",
        "Coordinated with outside agencies, art services, web designer, marketing, printers, and colleagues"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-text-primary mb-4">Experience</h1>
            <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full"></div>
          </div>
          
          <div className="text-center mb-12">
            <p className="text-lg text-text-secondary leading-relaxed">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. 
              Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 bg-accent-blue rounded-full mt-2"></div>
                    {index < experiences.length - 1 && (
                      <div className="w-0.5 h-32 bg-border ml-1.5 mt-2"></div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-text-primary">{exp.role}</h3>
                      <span className="text-accent-blue font-semibold bg-accent-blue-light px-3 py-1 rounded-full text-sm">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-text-secondary font-medium mb-3 italic">{exp.company}</p>
                    <p className="text-text-secondary mb-4">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start space-x-3">
                          <span className="text-accent-blue font-bold mt-1">•</span>
                          <span className="text-text-secondary">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;