import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const ActivitiesSection = () => {
  const activities = [
    {
      title: "Pentas Seni Tahunan",
      date: "15 Desember 2024",
      time: "19.00 WIB",
      location: "Aula SMA Merdeka",
      description:
        "Pertunjukan seni dari berbagai ekstrakurikuler menampilkan karya terbaik siswa dalam bidang musik, tari, dan teater.",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=400&h=250",
      category: "Seni & Budaya",
    },
    {
      title: "Science Fair 2024",
      date: "8 Januari 2025",
      time: "08.00 WIB",
      location: "Laboratorium & Halaman Sekolah",
      description:
        "Pameran ilmiah tahunan yang menampilkan proyek penelitian dan inovasi siswa dari berbagai jurusan.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=250",
      category: "Akademik",
    },
    {
      title: "Turnamen Olahraga Antar Kelas",
      date: "22 Januari 2025",
      time: "07.30 WIB",
      location: "Lapangan Olahraga",
      description:
        "Kompetisi olahraga yang mempertandingkan berbagai cabang seperti basket, voli, futsal, dan badminton.",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=400&h=250",
      category: "Olahraga",
    },
    {
      title: "Workshop Kepemimpinan",
      date: "5 Februari 2025",
      time: "13.00 WIB",
      location: "Ruang Multimedia",
      description:
        "Pelatihan kepemimpinan untuk pengurus OSIS dan MPK dalam mengembangkan kemampuan organisasi.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400&h=250",
      category: "Kepemimpinan",
    },
    {
      title: "Bakti Sosial",
      date: "12 Februari 2025",
      time: "06.00 WIB",
      location: "Desa Suka Maju",
      description:
        "Kegiatan pengabdian masyarakat dengan memberikan bantuan dan edukasi kepada masyarakat sekitar.",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=400&h=250",
      category: "Sosial",
    },
    {
      title: "Study Tour",
      date: "20 Februari 2025",
      time: "05.00 WIB",
      location: "Museum Nasional & Taman Mini",
      description:
        "Kunjungan edukatif untuk memperluas wawasan siswa tentang sejarah dan kebudayaan Indonesia.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400&h=250",
      category: "Edukasi",
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "Seni & Budaya": "bg-purple-100 text-purple-700",
      Akademik: "bg-blue-100 text-blue-700",
      Olahraga: "bg-orange-100 text-orange-700",
      Kepemimpinan: "bg-green-100 text-green-700",
      Sosial: "bg-pink-100 text-pink-700",
      Edukasi: "bg-indigo-100 text-indigo-700",
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  return (
    <section id="kegiatan" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4 text-foreground">
            Kegiatan <span className="text-primary">Sekolah</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Ikuti berbagai kegiatan menarik yang dirancang untuk mengembangkan
            potensi akademik, sosial, dan kepemimpinan siswa.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="card-soft-shadow hover:card-hover-shadow transition-all duration-300 hover:scale-105 group overflow-hidden"
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

              <CardContent className="p-6">
                {/* Title */}
                <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {activity.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    {activity.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    {activity.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    {activity.location}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Daftar Kegiatan
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            Lihat Semua Kegiatan
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
