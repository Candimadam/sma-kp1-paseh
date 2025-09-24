"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Award, BookOpen } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const ImageCarrousel = [
  '/halaman-utama/Background1.jpeg',
  '/halaman-utama/Background2.jpg',
  '/halaman-utama/Background3.jpg',
];

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [current, setCurrent] = useState(0);
  const interval = 10000; // 10 detik

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ImageCarrousel.length);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[calc(64px+10px)] dark:bg-neutral-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {ImageCarrousel.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Background Image ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${current === index ? 'opacity-100' : 'opacity-0'
              }`}
            width={1920}
            height={1080}
            priority
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/80 to-blue-500/60 dark:from-neutral-900/80 dark:to-neutral-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-8 text-center text-white dark:text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="scroll-m-20 text-center text-6xl mb-6 font-extrabold tracking-tight text-balance dark:text-blue-200">
            Selamat Datang di
            <span className="block text-yellow-300 dark:text-yellow-400">
              SMA KP 1 PASEH
            </span>
          </h1>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto dark:text-neutral-200">
            Membangun generasi unggul dengan pendidikan berkualitas, karakter
            kuat, dan masa depan gemilang untuk Indonesia yang merdeka.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="cta"
              onClick={() => {
                window.location.href = '/pendaftaran';
              }}
              className="group dark:bg-yellow-400 dark:text-neutral-900 dark:hover:bg-yellow-500"
            >
              Daftar Sekarang
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection('#tentang')}
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm dark:bg-neutral-800 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-yellow-300 dark:text-yellow-400" />
              </div>
              <div className="text-3xl font-bold dark:text-blue-200">1200+</div>
              <div className="text-white/80 dark:text-neutral-200">
                Siswa Aktif
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-yellow-300 dark:text-yellow-400" />
              </div>
              <div className="text-3xl font-bold dark:text-blue-200">50+</div>
              <div className="text-white/80 dark:text-neutral-200">
                Prestasi
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="h-8 w-8 text-yellow-300 dark:text-yellow-400" />
              </div>
              <div className="text-3xl font-bold dark:text-blue-200">15+</div>
              <div className="text-white/80 dark:text-neutral-200">
                Ekstrakurikuler
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
