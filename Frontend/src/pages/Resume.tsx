import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MapPin, Phone, Mail, Globe } from "lucide-react";

const Resume = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "University of Technology",
      location: "New York, NY",
      period: "2014 - 2016",
      description: "Specialized in Human-Computer Interaction and Software Engineering"
    },
    {
      degree: "Bachelor of Graphic Design",
      institution: "Art Institute of Design",
      location: "New York, NY", 
      period: "2010 - 2014",
      description: "Focus on Digital Media and Interactive Design"
    }
  ];

  const experience = [
    {
      role: "Senior Graphic Design Specialist",
      company: "Experion",
      location: "New York, NY",
      period: "2019 - Present",
      responsibilities: [
        "Lead in the design, development, and implementation of graphic, layout, and production communication materials",
        "Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project",
        "Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design"
      ]
    },
    {
      role: "Graphic Design Specialist", 
      company: "Stepping Stone Advertising",
      location: "New York, NY",
      period: "2017 - 2018",
      responsibilities: [
        "Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements)",
        "Managed up to 5 projects or tasks at a given time while under pressure",
        "Recommended and consulted with clients on the most appropriate graphic design"
      ]
    },
    {
      role: "Junior Graphic Designer",
      company: "Stepping Stone Advertising", 
      location: "New York, NY",
      period: "2016 - 2017",
      responsibilities: [
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
            <h1 className="text-5xl font-bold text-text-primary mb-4">Resume</h1>
            <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full"></div>
          </div>
          
          <div className="text-center mb-12">
            <p className="text-lg text-text-secondary leading-relaxed">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. 
              Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          {/* Header Card */}
          <Card className="p-8 mb-8 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold text-text-primary mb-2">BRANDON JOHNSON</h2>
                <p className="text-xl text-accent-blue font-medium mb-4">
                  Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-text-secondary">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Portland par 127, Orlando, FL</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>(123) 456-7891</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>alice.barkley@example.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <span>www.example.com</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <Button size="lg" className="px-8">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="p-6 shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className="w-4 h-4 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-text-primary">{edu.degree}</h3>
                        <p className="text-accent-blue font-medium">{edu.institution}</p>
                        <div className="flex items-center justify-between text-sm text-text-secondary mt-2">
                          <span>{edu.location}</span>
                          <span className="bg-accent-blue-light text-accent-blue px-2 py-1 rounded">
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-text-secondary mt-3">{edu.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">Professional Experience</h2>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <Card key={index} className="p-6 shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className="w-4 h-4 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-text-primary">{exp.role}</h3>
                        <p className="text-accent-blue font-medium">{exp.company}</p>
                        <div className="flex items-center justify-between text-sm text-text-secondary mt-2">
                          <span>{exp.location}</span>
                          <span className="bg-accent-blue-light text-accent-blue px-2 py-1 rounded">
                            {exp.period}
                          </span>
                        </div>
                        <ul className="mt-3 space-y-2">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="flex items-start space-x-2">
                              <span className="text-accent-blue font-bold mt-1">•</span>
                              <span className="text-text-secondary text-sm">{resp}</span>
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
      </div>
    </div>
  );
};

export default Resume;