import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, BookOpen } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400&h=250"
          alt="SMA Merdeka Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto container-padding text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="heading-1 mb-6 animate-fade-in">
            Selamat Datang di
            <span className="block text-yellow-300">SMA KP 1 PASEH</span>
          </h1>

          {/* Subtitle */}
          <p className="body-large mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in">
            Membangun generasi unggul dengan pendidikan berkualitas, karakter
            kuat, dan masa depan gemilang untuk Indonesia yang merdeka.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button
              variant="cta"
              size="xl"
              onClick={() => scrollToSection("#penerimaan")}
              className="group"
            >
              Daftar Sekarang
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => scrollToSection("#tentang")}
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-yellow-300" />
              </div>
              <div className="text-3xl font-bold">1200+</div>
              <div className="text-white/80">Siswa Aktif</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-yellow-300" />
              </div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-white/80">Prestasi</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="h-8 w-8 text-yellow-300" />
              </div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-white/80">Program Studi</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
