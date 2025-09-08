"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, Atom, Users, Palette, Globe, Cpu } from 'lucide-react';

export const MajorsSection = () => {
  const majors = [
    {
      icon: Calculator,
      title: 'MIPA',
      subtitle: 'Matematika dan Ilmu Pengetahuan Alam',
      description:
        'Program studi yang fokus pada pengembangan kemampuan analitis dan pemecahan masalah dalam bidang sains dan matematika.',
      subjects: ['Matematika', 'Fisika', 'Kimia', 'Biologi'],
      color: 'bg-blue-500 dark:bg-blue-900',
    },
    {
      icon: Users,
      title: 'IPS',
      subtitle: 'Ilmu Pengetahuan Sosial',
      description:
        'Program studi yang mempelajari ilmu sosial, ekonomi, dan humaniora untuk memahami dinamika masyarakat.',
      subjects: ['Sejarah', 'Geografi', 'Ekonomi', 'Sosiologi'],
      color: 'bg-green-500 dark:bg-green-900',
    },
    {
      icon: Globe,
      title: 'Bahasa',
      subtitle: 'Bahasa dan Sastra',
      description:
        'Program studi yang mengembangkan kemampuan berbahasa dan apresiasi sastra baik nasional maupun internasional.',
      subjects: ['Bahasa Indonesia', 'Bahasa Inggris', 'Sastra', 'Linguistik'],
      color: 'bg-purple-500 dark:bg-purple-900',
    },
    {
      icon: Cpu,
      title: 'TKJ',
      subtitle: 'Teknik Komputer dan Jaringan',
      description:
        'Program studi yang mempersiapkan siswa menguasai teknologi informasi dan komunikasi modern.',
      subjects: ['Pemrograman', 'Jaringan', 'Hardware', 'Software'],
      color: 'bg-orange-500 dark:bg-orange-900',
    },
    {
      icon: Palette,
      title: 'Seni',
      subtitle: 'Seni dan Budaya',
      description:
        'Program studi yang mengembangkan kreativitas dan apresiasi seni dalam berbagai bentuk ekspresi.',
      subjects: ['Seni Rupa', 'Musik', 'Tari', 'Teater'],
      color: 'bg-pink-500 dark:bg-pink-900',
    },
    {
      icon: Atom,
      title: 'Unggulan',
      subtitle: 'Program Akselerasi',
      description:
        'Program khusus untuk siswa berprestasi dengan kurikulum dipercepat dan pengayaan materi.',
      subjects: ['Riset', 'Olimpiade', 'Kompetisi', 'Leadership'],
      color: 'bg-red-500 dark:bg-red-900',
    },
  ];

  return (
    <section id="jurusan" className="py-24 bg-background">
      <div className="mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-primary/80">
            Jurusan <span className="text-blue-500">Sekolah</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih jurusan yang sesuai dengan minat dan bakat Anda. Setiap
            jurusan dirancang untuk mengoptimalkan potensi siswa.
          </p>
        </div>

        {/* Majors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {majors.map((major, index) => (
            <Card
              key={index}
              className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer flex flex-col h-full"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 relative">
                  <div
                    className={`w-16 h-16 ${major.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <major.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-primary/80 group-hover:text-blue-500 transition-colors">
                  {major.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground font-medium">
                  {major.subtitle}
                </p>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col flex-1">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {major.description}
                </p>

                {/* Subjects */}
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-semibold text-primary/80 uppercase tracking-wide">
                    Mata Pelajaran Utama:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {major.subjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full transition-all duration-300 bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-600"
                  >
                    Pelajari Lebih Lanjut
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Masih bingung memilih jurusan? Konsultasikan dengan konselor
            akademik kami.
          </p>
          <Button
            variant="default"
            className="bg-blue-500 hover:bg-blue-500/90 text-white"
            size="lg"
          >
            Konsultasi Jurusan
          </Button>
        </div>
      </div>
    </section>
  );
};
