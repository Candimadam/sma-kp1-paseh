"use client";

import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Custom SVG icons for social media
  const FacebookIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-facebook-icon lucide-facebook"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );

  const InstagramIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-instagram-icon lucide-instagram"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );

  const YoutubeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-youtube-icon lucide-youtube"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );

  const quickLinks = [
    { name: 'Tentang Sekolah', href: '#tentang' },
    { name: 'Jurusan', href: '#jurusan' },
    { name: 'Ekstrakurikuler', href: '#ekstrakurikuler' },
    { name: 'Kegiatan', href: '#kegiatan' },
    { name: 'Kontak', href: '#kontak' },
  ];

  const programs = ['MIPA', 'IPS', 'Bahasa', 'TKJ', 'Seni', 'Program Unggulan'];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0c141d] text-white dark:bg-neutral-900 dark:text-white">
      {/* Main Footer */}
      <div className="mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info with Photo */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/halaman-utama/logo-sekolah.png"
                alt="Logo SMA KP 1 PASEH"
                className="h-8 w-8 rounded-lg object-cover"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold dark:text-white">
                SMA KP 1 PASEH
              </span>
            </div>
            <p className="text-neutral-300 mb-6 leading-relaxed dark:text-white">
              Membangun generasi unggul dengan pendidikan berkualitas, karakter
              kuat, dan masa depan gemilang untuk Indonesia yang merdeka.
            </p>
            <div className="flex space-x-4">
              <a
                href=""
                target="_blank"
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors dark:bg-blue-800 dark:hover:bg-blue-900"
              >
                <FacebookIcon />
              </a>
              <a
                href=""
                target="_blank"
                className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-colors dark:bg-pink-800 dark:hover:bg-pink-900"
              >
                <InstagramIcon />
              </a>
              <a
                href=""
                target="_blank"
                className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors dark:bg-red-800 dark:hover:bg-red-900"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 dark:text-white">Menu Utama</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-neutral-300 hover:text-blue-500 transition-colors text-left dark:text-white dark:hover:text-blue-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4 dark:text-white">
              Program Studi
            </h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <span className="text-neutral-300 dark:text-white">
                    {program}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 dark:text-white">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0 dark:text-blue-300" />
                <span className="text-neutral-300 text-sm dark:text-white">
                  Jl. Oma Angga Wisastra Kp. Paseh Ds. Ibun Kec. Ibun Kab.
                  Bandung.
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500 dark:text-blue-300" />
                <span className="text-neutral-300 text-sm dark:text-white">
                  (021) 7654-3210
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500 dark:text-blue-300" />
                <span className="text-neutral-300 text-sm dark:text-white">
                  info @SMAKP1PASEH.sch.id
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-800 dark:border-neutral-700">
        <div className="mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-400 dark:text-white">
              © {currentYear} SMA KP 1 PASEH. Hak Cipta Dilindungi.
            </div>
            <div className="flex space-x-6 text-sm text-neutral-400 dark:text-white">
              <a
                href="https://policies.google.com/privacy?hl=en-US"
                target="_blank"
                className="hover:text-blue-500 transition-colors dark:hover:text-blue-300"
              >
                Privacy Policy
              </a>
              <a
                href="https://policies.google.com/terms?hl=en-US"
                target="_blank"
                className="hover:text-blue-500 transition-colors dark:hover:text-blue-300"
              >
                Terms of Service
              </a>
              <a
                href="https://maps.app.goo.gl/MqVFw2YafDxpHXQB8"
                target="_blank"
                className="hover:text-blue-500 transition-colors dark:hover:text-blue-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
