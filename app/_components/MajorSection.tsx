"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Atom, Users, Palette, Globe, Cpu } from "lucide-react";

export const MajorsSection = () => {
  const majors = [
    {
      icon: Globe,
      title: "Kurikulum Merdeka",
      subtitle: "Program Kurikulum ",
      description: "Diterapkan untuk kelas 10 dan 11 dengan pendekatan pembelajaran yang lebih fleksibel, berpusat pada siswa, dan berbasis proyek.",
      subjects: [],
      color: "bg-purple-500 dark:bg-purple-900",
    },
    {
      icon: Calculator,
      title: "MIPA",
      subtitle: "Matematika dan Ilmu Pengetahuan Alam",
      description: "Peminatan untuk kelas 12 dalam Kurikulum 2013, berfokus pada penguatan ilmu sains: Matematika, Fisika, Kimia, dan Biologi.",
      subjects: ["Matematika", "Fisika", "Kimia", "Biologi"],
      color: "bg-blue-500 dark:bg-blue-900",
    },
    {
      icon: Users,
      title: "IPS",
      subtitle: "Ilmu Pengetahuan Sosial",
      description: "Peminatan untuk kelas 12 dalam Kurikulum 2013, mencakup pemahaman sosial melalui Sejarah, Geografi, Ekonomi, dan Sosiologi.",
      subjects: ["Sejarah", "Geografi", "Ekonomi", "Sosiologi"],
      color: "bg-green-500 dark:bg-green-900",
    },
  ];

  return (
    <section id="jurusan" className="py-24 bg-background">
      <div className="mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-primary/80">
            Jurusan <span className="text-blue-500 dark:text-yellow-500">Sekolah</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Pilih jurusan yang sesuai dengan minat dan bakat Anda. Setiap jurusan dirancang untuk mengoptimalkan potensi siswa.</p>
        </div>

        {/* Majors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {majors.map((major, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer flex flex-col h-full">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 relative">
                  <div className={`w-16 h-16 ${major.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <major.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-primary/80 group-hover:text-blue-500 transition-colors dark:group-hover:text-yellow-500">{major.title}</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">{major.subtitle}</p>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col flex-1">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{major.description}</p>

                {/* Subjects (render only if there are subjects) */}
                {major.subjects && major.subjects.length > 0 && (
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-semibold text-primary/80 uppercase tracking-wide">Mata Pelajaran Utama:</p>
                    <div className="flex flex-wrap gap-2">
                      {major.subjects.map((subject, idx) => (
                        <span key={idx} className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full font-medium">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
