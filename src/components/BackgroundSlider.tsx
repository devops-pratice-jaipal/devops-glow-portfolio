
import { useState, useEffect } from "react";

const backgrounds = [
  "linear-gradient(135deg, rgba(15, 76, 129, 0.9), rgba(15, 76, 129, 0.8)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80')",
  "linear-gradient(135deg, rgba(15, 76, 129, 0.9), rgba(15, 76, 129, 0.8)), url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80')",
  "linear-gradient(135deg, rgba(15, 76, 129, 0.9), rgba(15, 76, 129, 0.8)), url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80')",
];

export default function BackgroundSlider() {
  const [currentBg, setCurrentBg] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        setIsTransitioning(false);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 transition-opacity duration-500">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: bg,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: currentBg === index ? (isTransitioning ? 0 : 1) : 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-background/30 dark:bg-background/70 backdrop-blur-sm" />
    </div>
  );
}
