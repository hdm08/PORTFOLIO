import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background py-16">
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
    </div>
  );
};

export default About;