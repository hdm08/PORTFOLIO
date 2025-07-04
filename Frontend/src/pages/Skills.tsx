import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 88 },
    { name: "TypeScript", level: 82 },
    { name: "Node.js", level: 78 },
    { name: "Python", level: 75 },
    { name: "MongoDB", level: 80 }
  ];

  const designSkills = [
    { name: "Adobe Photoshop", level: 92 },
    { name: "Adobe Illustrator", level: 88 },
    { name: "Figma", level: 85 },
    { name: "Adobe XD", level: 80 },
    { name: "Sketch", level: 75 },
    { name: "InVision", level: 70 }
  ];

  const otherSkills = [
    "Project Management",
    "Team Leadership", 
    "Client Communication",
    "Problem Solving",
    "Creative Thinking",
    "Time Management",
    "Agile Methodology",
    "Version Control (Git)"
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-text-primary mb-4">Skills</h1>
            <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full"></div>
          </div>
          
          <div className="text-center mb-12">
            <p className="text-lg text-text-secondary leading-relaxed">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. 
              Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-text-primary mb-6">Technical Skills</h2>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-text-primary">{skill.name}</span>
                      <span className="text-accent-blue font-semibold">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-text-primary mb-6">Design Skills</h2>
              <div className="space-y-6">
                {designSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-text-primary">{skill.name}</span>
                      <span className="text-accent-blue font-semibold">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Other Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {otherSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-accent-blue-light text-accent-blue px-4 py-3 rounded-lg text-center font-medium hover:bg-accent-blue hover:text-white transition-colors cursor-pointer"
                >
                  {skill}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;