
import { Server, Code, Cloud } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in">
            <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
              <Server className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Infrastructure</h3>
            <p className="text-muted-foreground">
              Expertise in managing infrastructure with tools like Terraform, AWS, and Kubernetes for scalable and reliable systems.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in animate-delay-200">
            <div className="p-3 bg-secondary/10 rounded-full w-fit mb-4">
              <Code className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Automation</h3>
            <p className="text-muted-foreground">
              Skilled in automating build and deployment processes using Jenkins, Maven, and other CI/CD tools to improve efficiency.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in animate-delay-300">
            <div className="p-3 bg-accent/10 rounded-full w-fit mb-4">
              <Cloud className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cloud Solutions</h3>
            <p className="text-muted-foreground">
              Experienced in cloud services and containerization with Docker, Kubernetes, and AWS to optimize resource usage.
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-card rounded-lg p-6 shadow-sm animate-fade-in animate-delay-400">
          <p className="text-lg leading-relaxed">
            I'm an experienced DevOps and CI/CD professional with expertise in version control, build automation, and container orchestration. I'm skilled in Jenkins, Docker, Kubernetes, Ansible, and Terraform, focusing on deploying Java applications and managing end-to-end software configurations. 
          </p>
          <p className="text-lg leading-relaxed mt-4">
            My approach emphasizes automation, consistency, and reducing manual effort through tools like Maven and Jenkins. I have a track record of implementing effective DevOps strategies across mixed environments, including Linux and AWS, optimizing resources and improving scalability.
          </p>
        </div>
      </div>
    </section>
  );
}
