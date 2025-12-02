"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Palette, Camera, Mic, Trophy, Zap, Users, BookOpen, Heart, Dumbbell, Globe, Shield, Circle, PersonStanding, FlagTriangleRight } from "lucide-react";

export const ExtracurricularSection = () => {
  const categories = [
    {
      title: "Pramuka",
      icon: Shield,
      color: "bg-purple-500 dark:bg-purple-900",
      description: "Kegiatan kepanduan yang mengajarkan keterampilan hidup, kepemimpinan, kerja sama tim, dan jiwa kemandirian.",
    },
    {
      title: "Paskibra",
      icon: FlagTriangleRight,
      color: "bg-orange-500 dark:bg-orange-900",
      description: "Pembinaan disiplin dan teknik pengibaran bendera untuk upacara resmi, dengan fokus pada formasi dan ketepatan gerak.",
    },
    {
      title: "Futsal",
      icon: Circle,
      color: "bg-blue-500 dark:bg-blue-900",
      description: "Latihan teknik, strategi, dan kebugaran yang mendukung partisipasi di turnamen antar sekolah.",
    },
    {
      title: "Gulat",
      icon: PersonStanding,
      color: "bg-green-500 dark:bg-green-900",
      description: "Pengembangan kekuatan, kelincahan, dan teknik gulat untuk kompetisi serta pembentukan disiplin atletik.",
    },
    {
      title: "Wushu",
      icon: Dumbbell,
      color: "bg-green-500 dark:bg-green-900",
      description: "Latihan seni bela diri yang menekankan gerakan, fleksibilitas, dan ekspresi koreografi untuk kejuaraan.",
    },
  ];

  return (
    <section id="ekstrakurikuler" className="py-24 bg-neutral-200 dark:bg-neutral-900">
      <div className="mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-primary/80 dark:text-white-300">Ekstrakurikuler </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto dark:text-neutral-400">Kembangkan bakat dan minat Anda melalui berbagai kegiatan ekstrakurikuler yang menarik dan berprestasi.</p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img src="./halaman-utama/Ekstrakurikuler.png" alt="Ekstrakurikuler SMA KP 1 Paseh" className="w-full h-[400px] object-cover" />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {categories.map((category, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-neutral-800 dark:border dark:border-neutral-700">
              <CardContent className="p-8 dark:text-neutral-200">
                {/* Category Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <category.icon className="h-7 w-7 text-white" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary/80 dark:text-blue-300">{category.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground dark:text-neutral-300 max-w-xl">{category.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-semibold mb-8 text-primary/80 dark:text-blue-300">Prestasi Terbaru</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold text-muted-foreground dark:text-blue-200 dark:bg-neutral-800">
              🥇 Juara 1 Olimpiade Wushu Tingkat Provinsi
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold text-muted-foreground dark:text-blue-200 dark:bg-neutral-800">
              🏆 Juara 2 Lomba Debat Bahasa Inggris
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold text-muted-foreground dark:text-blue-200 dark:bg-neutral-800">
              ⚽ Juara 1 Paskibra Antar SMA
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};
