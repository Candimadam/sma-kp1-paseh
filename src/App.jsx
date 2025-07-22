import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/AboutSection";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default App;
