import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Download, MapPin, Phone, Mail, Clock, Calendar, User, MessageCircle } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Index = () => {
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

  const achievements = [
    {
      title: "Best Designer Award",
      organization: "Design Excellence Awards",
      year: "2023",
      description: "Recognized for outstanding creative work in digital design and user experience innovation."
    },
    {
      title: "Project Manager Certification",
      organization: "PMI Institute",
      year: "2022",
      description: "Completed advanced project management certification with focus on agile methodologies."
    },
    {
      title: "Top Freelancer",
      organization: "Freelance Platform",
      year: "2022",
      description: "Achieved top 1% freelancer status with 98% client satisfaction rating."
    },
    {
      title: "Design Thinking Workshop",
      organization: "Stanford University",
      year: "2021",
      description: "Completed intensive design thinking and innovation workshop program."
    }
  ];

  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch",
      excerpt: "Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.",
      category: "Web Development",
      date: "Dec 15, 2023",
      author: "Brandon Johnson",
      comments: 12,
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop"
    },
    {
      title: "Mastering UI/UX Design Principles",
      excerpt: "A comprehensive guide to creating user-centered designs that deliver exceptional user experiences.",
      category: "Design",
      date: "Dec 10, 2023",
      author: "Brandon Johnson",
      comments: 8,
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=300&fit=crop"
    },
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for architecting React applications that can grow with your business needs.",
      category: "React",
      date: "Dec 5, 2023",
      author: "Brandon Johnson",
      comments: 15,
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop"
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["A108 Adam Street", "New York, NY 535022"],
      color: "text-green-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 5589 55488 55", "+1 6678 254445 41"],
      color: "text-blue-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@example.com", "contact@example.com"],
      color: "text-purple-500"
    },
    {
      icon: Clock,
      title: "Open Hours",
      details: ["Monday - Friday", "9:00AM - 05:00PM"],
      color: "text-orange-500"
    }
  ];

  return (
    <div className="scroll-smooth">
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary">
        <div className="container mx-auto px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl font-bold text-text-primary">
                  Brandon Johnson
                </h1>
                <p className="text-2xl text-text-secondary">
                  I'm <span className="text-accent-blue font-semibold underline decoration-accent-blue-light decoration-4">Freelancer</span>
                </p>
              </div>
              
              <div className="flex space-x-6">
                <a 
                  href="https://twitter.com" 
                  className="p-3 bg-muted rounded-full hover:bg-accent-blue hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://facebook.com" 
                  className="p-3 bg-muted rounded-full hover:bg-accent-blue hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  className="p-3 bg-muted rounded-full hover:bg-accent-blue hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.33-1.297C4.198 14.81 3.708 13.659 3.708 12.362s.49-2.448 1.297-3.33c.881-.881 2.033-1.371 3.33-1.371s2.448.49 3.33 1.297c.881.881 1.371 2.033 1.371 3.33s-.49 2.448-1.297 3.33c-.881.881-2.033 1.371-3.33 1.371z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  className="p-3 bg-muted rounded-full hover:bg-accent-blue hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-96 h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img 
                    src={heroPortrait} 
                    alt="Brandon Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-blue rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  B
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-text-primary mb-4">About</h1>
              <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full"></div>
            </div>
            
            <div className="text-center mb-12">
              <p className="text-lg text-text-secondary leading-relaxed">
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. 
                Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-text-primary mb-6">
                  UI/UX Designer & Web Developer.
                </h2>
                <p className="text-text-secondary mb-8 leading-relaxed italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-accent-blue font-semibold">▶</span>
                      <span className="text-text-secondary"><strong>Birthday:</strong> 1 May 1995</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-accent-blue font-semibold">▶</span>
                      <span className="text-text-secondary"><strong>Website:</strong> www.example.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-accent-blue font-semibold">▶</span>
                      <span className="text-text-secondary"><strong>Phone:</strong> +123 456 7890</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-accent-blue font-semibold">▶</span>
                      <span className="text-text-secondary"><strong>City:</strong> New York, USA</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-accent-blue font-semibold">▶</span>
                      <span className="text-text-secondary"><strong>Age:</strong> 30</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-accent-blue font-semibold">▶</span>
                      <span className="text-text-secondary"><strong>Degree:</strong> Master</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-accent-blue font-semibold">▶</span>
                      <span className="text-text-secondary"><strong>Email:</strong> email@example.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-accent-blue font-semibold">▶</span>
                      <span className="text-text-secondary"><strong>Freelance:</strong> Available</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Card className="p-8 shadow-lg">
                  <div className="w-80 h-96 bg-gradient-to-br from-accent-blue-light to-accent-blue rounded-lg flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">BJ</span>
                  </div>
                </Card>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="text-text-secondary leading-relaxed">
                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. 
                Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. 
                Sed et consectetur qui quia repellendus itaque neque.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen bg-secondary py-16">
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
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-background py-16">
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-secondary py-16">
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
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">★</span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-text-primary">{achievement.title}</h3>
                        <span className="text-accent-blue font-semibold bg-accent-blue-light px-3 py-1 rounded-full text-sm">
                          {achievement.year}
                        </span>
                      </div>
                      
                      <p className="text-accent-blue font-medium mb-3">{achievement.organization}</p>
                      <p className="text-text-secondary leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="min-h-screen bg-secondary py-16">
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
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-text-primary mb-4">Blog</h1>
              <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full"></div>
            </div>
            
            <div className="text-center mb-12">
              <p className="text-lg text-text-secondary leading-relaxed">
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. 
                Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-primary mb-3 hover:text-accent-blue cursor-pointer transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-text-secondary mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <span className="text-accent-blue font-medium">{post.readTime}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                      <div className="flex items-center space-x-1 text-text-secondary">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-secondary py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-text-primary mb-4">Contact</h1>
              <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full"></div>
            </div>
            
            <div className="text-center mb-12">
              <p className="text-lg text-text-secondary leading-relaxed">
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. 
                Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`inline-flex p-4 rounded-full bg-opacity-10 mb-4 ${info.color}`}>
                      <Icon className={`w-8 h-8 ${info.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-text-secondary">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-text-primary mb-6">Send Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="Enter your name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Your Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Enter subject" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Enter your message" 
                      className="mt-1 min-h-[120px]" 
                    />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </Card>

              <Card className="p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-text-primary mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <p className="text-text-secondary leading-relaxed">
                    I'm always interested in hearing about new opportunities and exciting projects. 
                    Whether you have a question about my work, want to discuss a potential collaboration, 
                    or just want to say hello, feel free to reach out.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent-blue-light rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-accent-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary">Location</p>
                        <p className="text-text-secondary">New York, United States</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent-blue-light rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-accent-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary">Response Time</p>
                        <p className="text-text-secondary">Usually within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent-blue-light rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-accent-blue" />
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary">Email</p>
                        <p className="text-accent-blue">brandon@example.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
