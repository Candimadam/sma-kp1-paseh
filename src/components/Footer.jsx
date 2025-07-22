import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
/
  // Custom SVG icons for social media
  const FacebookIcon = () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.542-3.293-1.416-.845-.874-1.365-2.064-1.365-3.383 0-1.319.52-2.509 1.365-3.383.845-.874 1.996-1.416 3.293-1.416 1.297 0 2.448.542 3.293 1.416.845.874 1.365 2.064 1.365 3.383 0 1.319-.52 2.509-1.365 3.383-.845.874-1.996 1.416-3.293 1.416zm7.718-6.52c-.25 0-.452-.202-.452-.452s.202-.452.452-.452.452.202.452.452-.202.452-.452.452zm-4.15 5.52c-.83 0-1.58-.336-2.124-.88-.544-.544-.88-1.294-.88-2.124s.336-1.58.88-2.124c.544-.544 1.294-.88 2.124-.88s1.58.336 2.124.88c.544.544.88 1.294.88 2.124s-.336 1.58-.88 2.124c-.544.544-1.294.88-2.124.88z" />
    </svg>
  );

  const YoutubeIcon = () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );

  const quickLinks = [
    { name: "Tentang Sekolah", href: "#tentang" },
    { name: "Jurusan", href: "#jurusan" },
    { name: "Ekstrakurikuler", href: "#ekstrakurikuler" },
    { name: "Kegiatan", href: "#kegiatan" },
    { name: "Penerimaan", href: "#penerimaan" },
    { name: "Kontak", href: "#kontak" },
  ];

  const programs = ["MIPA", "IPS", "Bahasa", "TKJ", "Seni", "Program Unggulan"];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">SMA Merdeka</span>
            </div>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Membangun generasi unggul dengan pendidikan berkualitas, karakter
              kuat, dan masa depan gemilang untuk Indonesia yang merdeka.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Menu Utama</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-neutral-300 hover:text-primary transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4">Program Studi</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <span className="text-neutral-300">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">
                  Jl. Pendidikan No. 123
                  <br />
                  Jakarta Selatan 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-neutral-300 text-sm">
                  (021) 7654-3210
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-neutral-300 text-sm">
                  info@smamerdeka.sch.id
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-400">
              © {currentYear} SMA Merdeka. Hak Cipta Dilindungi.
            </div>
            <div className="flex space-x-6 text-sm text-neutral-400">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
