"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

export const ActivitiesSection = () => {
  const activities = [
    {
      title: 'Pentas Seni Tahunan',
      date: '15 Desember 2024',
      time: '19.00 WIB',
      location: 'Aula SMA KP 1 PASEH',
      description:
        'Pertunjukan seni dari berbagai ekstrakurikuler menampilkan karya terbaik siswa dalam bidang musik, tari, dan teater.',
      image:
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=400&h=250',
      category: 'Seni & Budaya',
    },
    {
      title: 'Science Fair 2024',
      date: '8 Januari 2025',
      time: '08.00 WIB',
      location: 'Laboratorium & Halaman Sekolah',
      description:
        'Pameran ilmiah tahunan yang menampilkan proyek penelitian dan inovasi siswa dari berbagai jurusan.',
      image:
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=250',
      category: 'Akademik',
    },
    {
      title: 'Turnamen Olahraga Antar Kelas',
      date: '22 Januari 2025',
      time: '07.30 WIB',
      location: 'Lapangan Olahraga',
      description:
        'Kompetisi olahraga yang mempertandingkan berbagai cabang seperti basket, voli, futsal, dan badminton.',
      image:
        'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=400&h=250',
      category: 'Olahraga',
    },
    {
      title: 'Workshop Kepemimpinan',
      date: '5 Februari 2025',
      time: '13.00 WIB',
      location: 'Ruang Multimedia',
      description:
        'Pelatihan kepemimpinan untuk pengurus OSIS dan MPK dalam mengembangkan kemampuan organisasi.',
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400&h=250',
      category: 'Kepemimpinan',
    },
    {
      title: 'Bakti Sosial',
      date: '12 Februari 2025',
      time: '06.00 WIB',
      location: 'Desa Suka Maju',
      description:
        'Kegiatan pengabdian masyarakat dengan memberikan bantuan dan edukasi kepada masyarakat sekitar.',
      image:
        'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=400&h=250',
      category: 'Sosial',
    },
    {
      title: 'Study Tour',
      date: '20 Februari 2025',
      time: '05.00 WIB',
      location: 'Museum Nasional & Taman Mini',
      description:
        'Kunjungan edukatif untuk memperluas wawasan siswa tentang sejarah dan kebudayaan Indonesia.',
      image:
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400&h=250',
      category: 'Edukasi',
    },
  ];

  const colors: Record<string, string> = {
    'Seni & Budaya': 'bg-purple-100 text-purple-700',
    'Akademik': 'bg-blue-100 text-blue-700',
    'Olahraga': 'bg-orange-100 text-orange-700',
    'Kepemimpinan': 'bg-green-100 text-green-700',
    'Sosial': 'bg-pink-100 text-pink-700',
    'Edukasi': 'bg-indigo-100 text-indigo-700',
  };

  const getCategoryColor = (category: string) => {
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="kegiatan" className="py-24 bg-background dark:bg-neutral-900">
      <div className="mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-primary/80">
            Kegiatan <span className="text-blue-500">Sekolah</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ikuti berbagai kegiatan menarik yang dirancang untuk mengembangkan
            potensi akademik, sosial, dan kepemimpinan siswa.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group overflow-hidden flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                      activity.category
                    )}`}
                  >
                    {activity.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6 flex flex-col flex-1">
                {/* Title */}
                <h3 className="font-bold text-lg text-primary/80 mb-3 group-hover:text-blue-500 transition-colors">
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {activity.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-blue-500" />
                    {activity.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-blue-500" />
                    {activity.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                    {activity.location}
                  </div>
                </div>

                <div className="mt-auto">
                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full transition-all duration-300 bg-white text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white hover:border-blue-600"
                  >
                    Daftar Kegiatan
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button
            variant="default"
            className="bg-blue-500 hover:bg-blue-500/90 text-white"
            size="lg"
          >
            Lihat Semua Kegiatan
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
