"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Music,
  Palette,
  Camera,
  Mic,
  Trophy,
  Zap,
  Users,
  BookOpen,
  Heart,
  Dumbbell,
  Globe,
} from 'lucide-react';

export const ExtracurricularSection = () => {
  const categories = [
    {
      title: 'Seni & Kreativitas',
      icon: Palette,
      color: 'bg-purple-500 dark:bg-purple-900',
      activities: [
        { name: 'Paduan Suara', icon: Music },
        { name: 'Seni Lukis', icon: Palette },
        { name: 'Fotografi', icon: Camera },
        { name: 'Teater', icon: Mic },
      ],
    },
    {
      title: 'Olahraga',
      icon: Trophy,
      color: 'bg-orange-500 dark:bg-orange-900',
      activities: [
        { name: 'Basket', icon: Trophy },
        { name: 'Futsal', icon: Zap },
        { name: 'Voli', icon: Users },
        { name: 'Badminton', icon: Dumbbell },
      ],
    },
    {
      title: 'Akademik',
      icon: BookOpen,
      color: 'bg-blue-500 dark:bg-blue-900',
      activities: [
        { name: 'Olimpiade Sains', icon: BookOpen },
        { name: 'Debat Bahasa Inggris', icon: Globe },
        { name: 'Robotika', icon: Zap },
        { name: 'Jurnalistik', icon: Camera },
      ],
    },
    {
      title: 'Sosial & Kepemimpinan',
      icon: Heart,
      color: 'bg-green-500 dark:bg-green-900',
      activities: [
        { name: 'PMR (Palang Merah Remaja)', icon: Heart },
        { name: 'OSIS', icon: Users },
        { name: 'Pramuka', icon: Trophy },
        { name: 'Relawan Sosial', icon: Heart },
      ],
    },
  ];

  return (
    <section id="ekstrakurikuler" className="py-24 bg-neutral-50 dark:bg-black">
      <div className="mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-primary/80 dark:text-blue-300">
            Ekstrakurikuler{' '}
            <span className="text-blue-500 dark:text-blue-400">Unggulan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto dark:text-neutral-400">
            Kembangkan bakat dan minat Anda melalui berbagai kegiatan
            ekstrakurikuler yang menarik dan berprestasi.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1518614368389-5160c0b0de72"
              alt="Ekstrakurikuler SMA Merdeka"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">
                Raih Prestasi Bersama Kami
              </h3>
              <p className="text-white/90">
                Lebih dari 20 ekstrakurikuler menanti Anda untuk mengembangkan
                potensi
              </p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-neutral-800 dark:border dark:border-neutral-700"
            >
              <CardContent className="p-8 dark:text-neutral-200">
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}
                  >
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary/80 dark:text-blue-300">
                    {category.title}
                  </h3>
                </div>

                {/* Activities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.activities.map((activity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors cursor-pointer group"
                    >
                      <div className="w-8 h-8 bg-neutral-200 rounded-lg flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors dark:bg-neutral-900 dark:group-hover:bg-blue-700">
                        <activity.icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium text-primary/80 group-hover:text-blue-500 transition-colors dark:text-blue-200 dark:group-hover:text-blue-400">
                        {activity.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-semibold mb-8 text-primary/80 dark:text-blue-300">
            Prestasi Terbaru
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-semibold text-muted-foreground dark:text-blue-200 dark:bg-neutral-800"
            >
              🥇 Juara 1 Olimpiade Fisika Tingkat Provinsi
            </Badge>
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-semibold text-muted-foreground dark:text-blue-200 dark:bg-neutral-800"
            >
              🏆 Juara 2 Lomba Debat Bahasa Inggris
            </Badge>
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-semibold text-muted-foreground dark:text-blue-200 dark:bg-neutral-800"
            >
              🎵 Juara 3 Festival Paduan Suara Nasional
            </Badge>
            <Badge
              variant="secondary"
              className="px-4 py-2 text-sm font-semibold text-muted-foreground dark:text-blue-200 dark:bg-neutral-800"
            >
              ⚽ Juara 1 Turnamen Futsal Antar SMA
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};
