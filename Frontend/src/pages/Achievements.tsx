import { Card } from "@/components/ui/card";
import { Award, Trophy, Star, Target } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Best Web Designer 2023",
      organization: "Design Awards NYC",
      description: "Recognized for outstanding creativity and innovation in web design projects.",
      year: "2023",
      color: "text-yellow-500"
    },
    {
      icon: Award,
      title: "UI/UX Excellence Award",
      organization: "Digital Design Institute",
      description: "Awarded for exceptional user interface and user experience design solutions.",
      year: "2022",
      color: "text-blue-500"
    },
    {
      icon: Star,
      title: "Client Satisfaction Rating",
      organization: "Freelancer Platform",
      description: "Achieved 5-star rating with 100% client satisfaction across 50+ projects.",
      year: "2022",
      color: "text-purple-500"
    },
    {
      icon: Target,
      title: "Project Excellence",
      organization: "Tech Startup Award",
      description: "Led the development of award-winning e-commerce platform with innovative features.",
      year: "2021",
      color: "text-green-500"
    }
  ];

  const certifications = [
    {
      name: "Certified React Developer",
      issuer: "React Training",
      date: "2023",
      credential: "RT-2023-001"
    },
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022",
      credential: "AWS-SAA-002"
    },
    {
      name: "Google UX Design Certificate",
      issuer: "Google Career Certificates",
      date: "2021",
      credential: "GUX-2021-045"
    },
    {
      name: "Adobe Certified Expert",
      issuer: "Adobe Inc.",
      date: "2020",
      credential: "ACE-2020-PS"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "4+", label: "Years Experience" },
    { number: "15+", label: "Awards Won" }
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-text-primary mb-4">Achievements</h1>
            <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full"></div>
          </div>
          
          <div className="text-center mb-12">
            <p className="text-lg text-text-secondary leading-relaxed">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. 
              Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-accent-blue mb-2">{stat.number}</div>
                <div className="text-text-secondary">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Awards Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Awards & Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card key={index} className="p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-6">
                      <div className={`p-4 rounded-full bg-opacity-10 ${achievement.color}`}>
                        <Icon className={`w-8 h-8 ${achievement.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-text-primary">{achievement.title}</h3>
                          <span className="text-accent-blue font-semibold bg-accent-blue-light px-3 py-1 rounded-full text-sm">
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-text-secondary font-medium mb-3 italic">{achievement.organization}</p>
                        <p className="text-text-secondary">{achievement.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-text-primary">{cert.name}</h3>
                    <span className="text-accent-blue font-semibold">{cert.date}</span>
                  </div>
                  <p className="text-text-secondary mb-2">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">Credential ID: {cert.credential}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;