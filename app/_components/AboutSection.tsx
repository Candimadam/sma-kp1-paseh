"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Trophy, Globe } from "lucide-react";

export const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Visi",
      description: "Terwujudnya lulusan berprestasi dalam bidang akademik, olah raga serta cinta lingkungan dilandasi dengan iman dan taqwa.",
    },
    {
      icon: Heart,
      title: "Misi",
      description:
        "Mengembangkan Karakter dan Akhlak Mulia Murid, Menumbuhkan Semangan Religius dan Keimanan, Menanamkan Kecintaan Terhadap Lingkungan yang Berkualitas, Mewujudkan Murid yang Berprestasi, Mengembangkan Potensi non Akademik, Mewujudkan Murid yang Berprestasi dalam Olah Raga, Membina Hubungan Harmonis dengan Seluruh Pihak Dilingkungan Sekolah, Membangun Kemandirian dan Kepemimpinan",
    },
    {
      icon: Trophy,
      title: "Prestasi",
      description: "Meraih berbagai penghargaan tingkat regional dan nasional dalam bidang akademik dan non-akademik.",
    },
    {
      icon: Globe,
      title: "Unggulan",
      description: "Sekolah Energi Berdikari Adiwiyata Tingkat Kabupaten dan Provinsi",
    },
  ];

  return (
    <section id="tentang" className="py-20 bg-neutral-200 dark:bg-neutral-900">
      <div className="mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-1 lg:order-2 col-span-full w-full">
            <div className="mb-8">
              <h1 className="mb-6 text-primary/80 text-5xl font-extrabold dark:text-blue-300">
                Tentang <span className="text-blue-500 dark:text-yellow-400">SMA KP 1 PASEH</span>
              </h1>
              <p className="text-lg mb-6 text-muted-foreground dark:text-neutral-400">
                SMA KP I Paseh didirikan pada tahun 1981 di bawah Yayasan Pembina Pendidikan Karya Pembangunan (YPPKP). Sekolah sempat berpindah lokasi beberapa kali hingga pada tahun 2001 dipindahkan ke kompleks SMP KP Ibun akibat
                perubahan nama sekolah yang tidak sesuai dengan yayasan. Pada awal relokasi, sekolah menerima 55 siswa baru serta siswa mutasi. Sejak 2002, sekolah membangun ruang kelas secara mandiri dan pada 2011 menerima bantuan ruang
                kelas dari Provinsi Jawa Barat. Hingga kini, SMA KP I Paseh telah mengalami 10 pergantian kepala sekolah, terus meningkatkan sarana prasarana, dan pada tahun ajaran 2022/2023 memiliki 322 siswa dengan akreditasi B.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer bg-white dark:bg-neutral-800 dark:border dark:border-neutral-700">
                  <CardContent className="p-6 dark:text-neutral-200">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center dark:bg-blue-900/20">
                          <value.icon className="h-6 w-6 text-blue-500 dark:text-blue-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary/80 mb-2 dark:text-blue-300">{value.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed dark:text-neutral-400">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
