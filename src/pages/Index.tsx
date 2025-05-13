
import { useEffect } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundSlider from "@/components/BackgroundSlider";

const Index = () => {
  useEffect(() => {
    document.title = "Jaipal Peddaboina - DevOps Engineer Portfolio";
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
        <BackgroundSlider />
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
          <CertificationsSection />
          <ResumeSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
