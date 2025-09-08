import { AboutSection } from "./_components/AboutSection";
import { ActivitiesSection } from "./_components/ActivitiesSection";
import { ContactSection } from "./_components/ContactSection";
import { ExtracurricularSection } from "./_components/ExtracurricularSection";
import { Footer } from "./_components/Footer";
import { HeroSection } from "./_components/HeroSection";
import { MajorsSection } from "./_components/MajorSection";
import { Navigation } from "./_components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MajorsSection />
      <ExtracurricularSection />
      <ActivitiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
