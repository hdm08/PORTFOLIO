import { 
  Home, 
  User, 
  FileText, 
  Award, 
  Briefcase, 
  FolderOpen, 
  Brain, 
  Mail, 
  PenTool 
} from "lucide-react";

const navigationItems = [
  { section: "home", icon: Home, label: "Home" },
  { section: "about", icon: User, label: "About" },
  { section: "experience", icon: Briefcase, label: "Experience" },
  { section: "skills", icon: Brain, label: "Skills" },
  { section: "projects", icon: FolderOpen, label: "Projects" },
  { section: "achievements", icon: Award, label: "Achievements" },
  { section: "resume", icon: FileText, label: "Resume" },
  { section: "blog", icon: PenTool, label: "Blog" },
  { section: "contact", icon: Mail, label: "Contact" },
];

const Sidebar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="fixed left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 bg-sidebar-bg border border-border rounded-2xl flex flex-col items-center py-4 z-10 shadow-lg">
      <div className="flex flex-col space-y-3">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              className="p-2 rounded-xl transition-all duration-200 hover:bg-accent-blue-light text-sidebar-item hover:text-accent-blue group"
              title={item.label}
            >
              <Icon size={20} />
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;