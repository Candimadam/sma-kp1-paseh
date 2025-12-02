"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

export const ActivitiesSection = () => {
  const activities = [
    {
      title: "Kegiatan Membaca Al-Qur'an",
      date: "Setiap Senin-Jumat",
      time: "06-30 - 06.45 WIB",
      location: "Kelas",
      description: "Kegiata rutin setiap hari sebelum pelajaran dimulai.",
      image: "./halaman-utama/KegiatanMengaji.png",
    },
    {
      title: "Kegiatan Ekstrakurikuler",
      date: "Setiap Hari Sabtu",
      time: "08.00 - 12.00 WIB",
      location: "Area Sekolah",
      description: "Berbagai kegiatan ekstrakurikuler untuk mengembangkan bakat dan minat siswa.",
      image: "./halaman-utama/KegiatanEkskul.png",
    },
    {
      title: "Peringatan Hut RI",
      date: "Setiap 17 Agustus",
      time: "08.00 - 14.00 WIB",
      location: "Lapangan Sekolah",
      description: "Perayaan hari kemerdekaan Indonesia dengan berbagai lomba dan kegiatan patriotik.",
      image: "./halaman-utama/KegiatanHutRI.png",
    },
  ];

  const colors: Record<string, string> = {
    "Seni & Budaya": "bg-purple-100 text-purple-700",
    Akademik: "bg-blue-100 text-blue-700",
    Olahraga: "bg-orange-100 text-orange-700",
    Kepemimpinan: "bg-green-100 text-green-700",
    Sosial: "bg-pink-100 text-pink-700",
    Edukasi: "bg-indigo-100 text-indigo-700",
  };

  return (
    <section id="kegiatan" className="py-24 bg-background">
      <div className="mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-primary/80">
            Kegiatan <span className="text-blue-500 dark:text-yellow-500">Sekolah</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Ikuti berbagai kegiatan menarik yang dirancang untuk mengembangkan potensi akademik, sosial, dan kepemimpinan siswa.</p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group overflow-hidden flex flex-col h-full">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img src={activity.image} alt={activity.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium`}></span>
                </div>
              </div>

              <CardContent className="p-6 flex flex-col flex-1">
                {/* Title */}
                <h3 className="font-bold text-lg text-primary/80 mb-3 group-hover:text-blue-500 transition-colors dark:group-hover:text-yellow-500">{activity.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{activity.description}</p>

                {/* Event Details */}
                <div className="space-y-2">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
