
import { CheckCircle } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    "AWS Certified Cloud Practitioner",
    "Cisco Certified CyberOps Associate"
  ];

  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Certifications</h2>
        
        <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-center gap-3 animate-slide-in" style={{animationDelay: `${index * 200}ms`}}>
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
