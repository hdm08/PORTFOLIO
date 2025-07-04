import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
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
    <div className="min-h-screen bg-background py-16">
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

          {/* Contact Information */}
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
            {/* Contact Form */}
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

            {/* Map/Additional Info */}
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
                
                <div className="mt-8">
                  <h3 className="font-semibold text-text-primary mb-4">Follow Me</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-accent-blue-light rounded-full flex items-center justify-center hover:bg-accent-blue hover:text-white transition-colors"
                    >
                      <span className="text-sm font-bold">Tw</span>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-accent-blue-light rounded-full flex items-center justify-center hover:bg-accent-blue hover:text-white transition-colors"
                    >
                      <span className="text-sm font-bold">Fb</span>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-accent-blue-light rounded-full flex items-center justify-center hover:bg-accent-blue hover:text-white transition-colors"
                    >
                      <span className="text-sm font-bold">Li</span>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-accent-blue-light rounded-full flex items-center justify-center hover:bg-accent-blue hover:text-white transition-colors"
                    >
                      <span className="text-sm font-bold">Ig</span>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;