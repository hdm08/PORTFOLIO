import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, MessageCircle } from "lucide-react";

const Blog = () => {
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
    },
    {
      title: "The Psychology of Color in Web Design",
      excerpt: "Understanding how color choices impact user behavior and conversion rates in digital products.",
      category: "Design",
      date: "Nov 28, 2023",
      author: "Brandon Johnson",
      comments: 6,
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500&h=300&fit=crop"
    },
    {
      title: "TypeScript Best Practices for 2024",
      excerpt: "Essential TypeScript patterns and practices every developer should know to write better code.",
      category: "TypeScript",
      date: "Nov 20, 2023",
      author: "Brandon Johnson",
      comments: 20,
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&h=300&fit=crop"
    },
    {
      title: "Freelancing in Tech: A Complete Guide",
      excerpt: "Everything you need to know about starting and maintaining a successful freelance career in technology.",
      category: "Career",
      date: "Nov 15, 2023",
      author: "Brandon Johnson",
      comments: 25,
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
    }
  ];

  const categories = ["All", "Web Development", "Design", "React", "TypeScript", "Career"];

  return (
    <div className="min-h-screen bg-background py-16">
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

          <div className="text-center mt-12">
            <Button size="lg" className="px-8">
              Load More Posts
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;