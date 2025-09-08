"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, UserPenIcon, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import { ToggleMode } from '@/components/toggle-mode';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#tentang', label: 'Tentang Sekolah' },
    { href: '#jurusan', label: 'Jurusan' },
    { href: '#ekstrakurikuler', label: 'Ekstrakurikuler' },
    { href: '#kegiatan', label: 'Kegiatan' },
    { href: '#kontak', label: 'Kontak' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleRegisterClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen
          ? 'bg-background/95 backdrop-blur-sm border-b shadow-sm dark:bg-neutral-900'
          : 'bg-transparent'
          }`}
      >
        <div className="">
          <div className="flex px-6 items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 md:flex-1/5">
              <Image
                src="/halaman-utama/logo-sekolah.png"
                alt="Logo SMA KP 1 PASEH"
                className="h-8 w-8 object-contain"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold text-primary/80 dark:text-blue-200">
                SMA KP 1 PASEH
              </span>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center space-x-8 md:flex-3/5">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-primary/80 hover:text-blue-500 transition-colors dark:text-blue-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
            {/* Login Button & Dark Mode Button */}
            <div className="hidden md:flex flex-1/5 justify-end items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleRegisterClick}>
                <UserPenIcon className="h-4 w-4" />
                Registrasi Sekarang
              </Button>
              <ToggleMode />
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
              <ToggleMode />
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t dark:bg-neutral-900 dark:border-neutral-700">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="block px-3 py-2 text-base font-medium text-primary/80 hover:text-blue-500 hover:bg-accent rounded-md w-full text-left transition-colors dark:text-blue-200 dark:hover:bg-blue-900"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 pb-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full dark:text-blue-200 dark:border-blue-400 dark:bg-neutral-900 dark:hover:bg-blue-600 dark:hover:text-white"
                    onClick={handleRegisterClick}
                  >
                    <UserPenIcon className="h-4 w-4" />
                    Registrasi Sekarang
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
