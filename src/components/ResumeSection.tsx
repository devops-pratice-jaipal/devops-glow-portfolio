
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ResumeSection() {
  const { theme } = useTheme();
  
  const handlePrint = () => {
    window.print();
  };
  
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title mb-0">Resume</h2>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" onClick={handlePrint} className="hidden md:flex">
              <Printer className="mr-2 h-4 w-4" />
              Print Resume
            </Button>
            <Button size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
        
        <Card className="p-8 shadow print:shadow-none animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 print:mb-4">
              <h1 className="text-3xl font-bold">Jaipal Peddaboina</h1>
              <p className="text-muted-foreground mt-1">DevOps & CI/CD Professional</p>
              <div className="flex flex-wrap justify-center gap-4 mt-2 text-sm">
                <span>07359660531</span>
                <span>•</span>
                <span>jaipaldevops97@gmail.com</span>
                <span>•</span>
                <span>AWS Certified</span>
              </div>
            </div>
            
            <div className="mb-6 print:mb-4">
              <h2 className="text-xl font-semibold border-b pb-1 mb-3">Professional Summary</h2>
              <p className="text-sm leading-relaxed">
                Experienced DevOps and CI/CD professional with expertise in version control, build automation, and container orchestration. Skilled in Jenkins, Docker, Kubernetes, Ansible, and Terraform. Proficient in deploying Java applications on Tomcat and managing end-to-end software configuration. Knowledgeable in secrecy and deployment tools such as HashiCorp Vault and Argo CD.
              </p>
            </div>
            
            <div className="mb-6 print:mb-4">
              <h2 className="text-xl font-semibold border-b pb-1 mb-3">Experience</h2>
              
              <div className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold">Part Time Associate</h3>
                    <p className="text-sm">Amazon Fulfillment Centre</p>
                  </div>
                  <p className="text-sm">Dec 2023 - Present</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold">DevOps Engineer</h3>
                    <p className="text-sm">CREADOR SOLUTIONS PVT LTD</p>
                    <p className="text-sm text-muted-foreground">Client: Quantros Inc., California</p>
                  </div>
                  <p className="text-sm">March 2020 – August 2022</p>
                </div>
                <p className="text-sm font-medium mt-2">Environment:</p>
                <p className="text-xs text-muted-foreground">GitHub, Maven, SonarQube, Tomcat, Jenkins, Docker, Kubernetes, AWS, Ansible, Terraform</p>
                <p className="text-sm font-medium mt-2">Achievements in Cost Reduction and Efficiency:</p>
                <ul className="list-disc text-xs text-muted-foreground pl-5 space-y-1 mt-1">
                  <li>Automated source code management with Jenkins, improving consistency and reducing manual effort.</li>
                  <li>Enhanced project efficiency by adapting Maven files, minimizing build errors and troubleshooting time.</li>
                  <li>Streamlined deployment with automated War/Ear file creation using Maven and Jenkins.</li>
                  <li>Ensured version control by maintaining Jenkins artifacts in Nexus, reducing risks.</li>
                  <li>Customized CI/CD pipeline with necessary Jenkins plugins.</li>
                  <li>Developed a DevOps strategy for mixed environments (Linux, AWS), optimizing resources.</li>
                  <li>Managed AWS EC2 instances, reducing infrastructure costs and improving scalability.</li>
                  <li>Streamlined deployment processes with Docker images and containers.</li>
                  <li>Utilized Kubernetes for scalable and reliable container management.</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-6 print:mb-4">
              <h2 className="text-xl font-semibold border-b pb-1 mb-3">Education</h2>
              
              <div className="mb-3">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold">Master's in Advanced Computer Sciences</h3>
                    <p className="text-sm">Cardiff Metropolitan University, UK</p>
                  </div>
                  <p className="text-sm">Grade: Merit</p>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold">Bachelor's in Electronics and Communication Engineering</h3>
                    <p className="text-sm">Jawaharlal Nehru Technological University Hyderabad (JNTUH)</p>
                  </div>
                  <p className="text-sm">Grade: 80%</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6 print:mb-4">
              <h2 className="text-xl font-semibold border-b pb-1 mb-3">Skills</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-sm">DevOps & CI/CD:</h3>
                  <p className="text-xs text-muted-foreground">Extensive experience with Jenkins for CI/CD pipeline creation, automated builds, and deployments.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Version Control:</h3>
                  <p className="text-xs text-muted-foreground">Proficient in Git, GitHub, and Bitbucket for source code management.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Build & Automation Tools:</h3>
                  <p className="text-xs text-muted-foreground">Expertise in Maven, Ant, and SonarQube for build automation and code quality.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Deployment & Configuration:</h3>
                  <p className="text-xs text-muted-foreground">Skilled in deploying applications on Tomcat, managing artifacts with Nexus, and configuring environments with Ansible.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Container Management:</h3>
                  <p className="text-xs text-muted-foreground">Proficient in Docker for containerization, Docker Compose for workflow improvement, and Kubernetes for orchestration.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Cloud Services:</h3>
                  <p className="text-xs text-muted-foreground">Experienced in managing AWS services, including EC2 instance management and AMI maintenance.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Infrastructure as Code:</h3>
                  <p className="text-xs text-muted-foreground">Skilled in using Terraform for infrastructure management and automation.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Secrecy Management:</h3>
                  <p className="text-xs text-muted-foreground">Knowledgeable in HashiCorp Vault for secrecy management and ArgoCD for deployments.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold border-b pb-1 mb-3">Certifications</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>AWS Certified Cloud Practitioner</li>
                <li>Cisco Certified CyberOps Associate</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
