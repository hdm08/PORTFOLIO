import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      category: "Web Development",
      description: "A full-stack e-commerce solution built with React and Node.js, featuring payment integration and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      link: "#"
    },
    {
      title: "Mobile App Design",
      category: "UI/UX Design",
      description: "Complete mobile app design for a fitness tracking application with modern UI and intuitive user experience.",
      technologies: ["Figma", "Adobe XD", "Prototyping"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      link: "#"
    },
    {
      title: "Brand Identity",
      category: "Graphic Design",
      description: "Complete brand identity design including logo, business cards, and marketing materials for a tech startup.",
      technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=500&h=300&fit=crop",
      link: "#"
    },
    {
      title: "Dashboard Analytics",
      category: "Web Development",
      description: "Interactive dashboard for data visualization and analytics with real-time updates and custom charts.",
      technologies: ["React", "D3.js", "TypeScript", "REST API"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      link: "#"
    },
    {
      title: "Portfolio Website",
      category: "Web Development",
      description: "Responsive portfolio website with modern design and smooth animations to showcase creative work.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      link: "#"
    },
    {
      title: "Social Media Campaign",
      category: "Graphic Design",
      description: "Visual content creation for social media marketing campaign including posts, stories, and advertisements.",
      technologies: ["Adobe Creative Suite", "Canva", "After Effects"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      link: "#"
    }
  ];

  const categories = ["All", "Web Development", "UI/UX Design", "Graphic Design"];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-text-primary mb-4">Projects</h1>
            <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full"></div>
          </div>
          
          <div className="text-center mb-12">
            <p className="text-lg text-text-secondary leading-relaxed">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. 
              Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="px-6 py-2"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-accent-blue bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                    <Button 
                      variant="secondary" 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      View Project
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-accent-blue text-sm font-semibold bg-accent-blue-light px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-primary mb-3">{project.title}</h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs bg-muted text-text-secondary px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Projects;