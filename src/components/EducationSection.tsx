
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

interface EducationProps {
  degree: string;
  institution: string;
  year: string;
  grade: string;
  delay?: number;
}

const Education = ({ degree, institution, year, grade, delay = 0 }: EducationProps) => {
  return (
    <Card className="hover:shadow-md transition-shadow animate-fade-in" style={{animationDelay: `${delay}ms`}}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start flex-wrap gap-2">
          <div>
            <CardTitle className="text-xl flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span>{degree}</span>
            </CardTitle>
            <p className="text-muted-foreground">{institution}</p>
          </div>
          <Badge variant="secondary">{year}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">Grade: {grade}</p>
      </CardContent>
    </Card>
  );
};

export default function EducationSection() {
  const education = [
    {
      degree: "Master's in Advanced Computer Sciences",
      institution: "Cardiff Metropolitan University, UK",
      year: "2018 - 2019",
      grade: "Merit"
    },
    {
      degree: "Bachelor's in Electronics and Communication Engineering",
      institution: "Jawaharlal Nehru Technological University Hyderabad (JNTUH)",
      year: "2013 - 2017",
      grade: "80%"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Education
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              year={edu.year}
              grade={edu.grade}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
