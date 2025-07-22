import "./App.css";
import { AboutSection } from "./components/AboutSection";
import { ActivitiesSection } from "./components/ActivitiesSection";
import { ContactSection } from "./components/ContactSection";
import { ExtracurricularSection } from "./components/ExtracurricularSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { MajorsSection } from "./components/MajorSection";
import { Navigation } from "./components/navigation";

function App() {
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

export default App;
