
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  skills?: string[];
  client?: string;
  environment?: string;
}

const Experience = ({ title, company, period, achievements, skills, client, environment }: ExperienceProps) => {
  return (
    <Card className="mb-6 hover:shadow-md transition-shadow animate-fade-in">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <p className="text-muted-foreground">{company}</p>
            {client && <p className="text-sm text-muted-foreground">Client: {client}</p>}
          </div>
          <Badge variant="secondary">{period}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        {environment && (
          <div className="mb-4">
            <p className="text-sm font-medium">Environment:</p>
            <p className="text-muted-foreground text-sm">{environment}</p>
          </div>
        )}
        <div className="mb-4">
          <p className="text-sm font-medium">Key Achievements:</p>
          <ul className="list-disc pl-5 text-muted-foreground text-sm space-y-1 mt-1">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Part Time Associate",
      company: "Amazon Fulfilment Centre",
      period: "Dec 2023 - Present",
      achievements: ["Providing warehouse support operations"],
      skills: ["Logistics", "Operations"]
    },
    {
      title: "DevOps Engineer",
      company: "CREADOR SOLUTIONS PVT LTD",
      period: "March 2020 - August 2022",
      client: "Quantros Inc., California",
      environment: "GitHub, Maven, SonarQube, Tomcat, Jenkins, Docker, Kubernetes, AWS, Ansible, Terraform",
      achievements: [
        "Automated source code management with Jenkins, improving consistency and reducing manual effort",
        "Enhanced project efficiency by adapting Maven files, minimizing build errors and troubleshooting time",
        "Streamlined deployment with automated War/Ear file creation using Maven and Jenkins",
        "Ensured version control by maintaining Jenkins artifacts in Nexus, reducing risks",
        "Customized CI/CD pipeline with necessary Jenkins plugins",
        "Developed DevOps strategy for mixed environments (Linux, AWS), optimizing resources",
        "Managed AWS EC2 instances, reducing infrastructure costs and improving scalability",
        "Streamlined deployment processes with Docker images and containers",
        "Utilized Kubernetes for scalable and reliable container management"
      ],
      skills: ["Jenkins", "Docker", "Kubernetes", "AWS", "Maven", "CI/CD", "Terraform", "Ansible"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Experience
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              achievements={exp.achievements}
              skills={exp.skills}
              client={exp.client}
              environment={exp.environment}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
