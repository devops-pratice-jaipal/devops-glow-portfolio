
import {
  Cloud,
  Code,
  Database,
  Lock,
  Network,
  Server,
  Terminal,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  delay?: number;
}

const SkillCategory = ({ title, skills, icon, delay = 0 }: SkillCategoryProps) => {
  return (
    <Card className={`hover:shadow-md transition-shadow animate-fade-in`} style={{animationDelay: `${delay}ms`}}>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-primary/10 rounded-full mr-3">
            {icon}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">{skill}</span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "DevOps & CI/CD",
      icon: <Terminal className="h-5 w-5 text-primary" />,
      skills: ["Jenkins", "CI/CD Pipelines", "Source Code Management", "Automated Builds", "Deployments"],
    },
    {
      title: "Version Control",
      icon: <Code className="h-5 w-5 text-primary" />,
      skills: ["Git", "GitHub", "Bitbucket", "Source Code Management"],
    },
    {
      title: "Build & Automation",
      icon: <Server className="h-5 w-5 text-primary" />,
      skills: ["Maven", "Ant", "SonarQube", "Build Automation", "Code Quality"],
    },
    {
      title: "Deployment & Configuration",
      icon: <Network className="h-5 w-5 text-primary" />,
      skills: ["Tomcat", "Nexus", "Artifact Management", "End-to-end Configuration"],
    },
    {
      title: "Container Management",
      icon: <Database className="h-5 w-5 text-primary" />,
      skills: ["Docker", "Docker Compose", "Containerization", "Kubernetes", "Orchestration"],
    },
    {
      title: "Cloud Services",
      icon: <Cloud className="h-5 w-5 text-primary" />,
      skills: ["AWS", "EC2", "AMI", "Infrastructure Management", "Scaling"],
    },
    {
      title: "Infrastructure as Code",
      icon: <Terminal className="h-5 w-5 text-primary" />,
      skills: ["Terraform", "Ansible", "Infrastructure Management", "Automation"],
    },
    {
      title: "Secrecy Management",
      icon: <Lock className="h-5 w-5 text-primary" />,
      skills: ["HashiCorp Vault", "ArgoCD", "Secrecy Management"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
