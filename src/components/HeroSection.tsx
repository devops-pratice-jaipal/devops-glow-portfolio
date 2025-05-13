
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="container mx-auto px-4 py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block">Hi, I'm</span>
            <span className="text-primary block mt-2">Jaipal Peddaboina</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 animate-fade-in animate-delay-200">
            DevOps & CI/CD Professional
          </h2>
          <p className="text-lg mb-8 max-w-xl animate-fade-in animate-delay-300">
            I specialize in automating development workflows, optimizing infrastructure, and implementing robust CI/CD pipelines with tools like Jenkins, Docker, Kubernetes, and Terraform.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8 animate-fade-in animate-delay-400">
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </Button>
            <Button variant="outline" asChild>
              <a href="#" onClick={(e) => {e.preventDefault(); alert("Resume download functionality will be implemented");}}>
                <FileDown className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="flex gap-4 animate-fade-in animate-delay-500">
            <Button variant="ghost" size="icon" className="hover-lift rounded-full" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover-lift rounded-full" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="hover-lift rounded-full" asChild>
              <a href="mailto:jaipaldevops97@gmail.com" aria-label="Email">
                <Mail />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-fade-in">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-xl" />
            <img 
              src="/lovable-uploads/1a708336-5934-4382-8181-b08e39791515.png" 
              alt="Jaipal Peddaboina" 
              className="rounded-full object-cover w-full h-full border-4 border-background shadow-xl z-10 relative"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll down"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </Button>
      </div>
    </section>
  );
}
