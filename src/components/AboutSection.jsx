import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Trophy, Globe } from "lucide-react";

export const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Visi",
      description:
        "Menjadi sekolah unggul yang menghasilkan lulusan berkarakter, berprestasi, dan siap menghadapi tantangan global.",
    },
    {
      icon: Heart,
      title: "Misi",
      description:
        "Menyelenggarakan pendidikan berkualitas dengan mengembangkan potensi siswa secara holistik.",
    },
    {
      icon: Trophy,
      title: "Prestasi",
      description:
        "Meraih berbagai penghargaan tingkat regional dan nasional dalam bidang akademik dan non-akademik.",
    },
    {
      icon: Globe,
      title: "Global",
      description:
        "Mempersiapkan siswa dengan wawasan global dan kemampuan berkompetisi di era digital.",
    },
  ];

  return (
    <section id="tentang" className="section-padding bg-neutral-50">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://www.psychologicalscience.org/redesign/wp-content/uploads/2011/04/ThinkstockPhotos-504382222-1024x683.jpg"
                alt="Students studying at SMA Merdeka"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h2 className="heading-2 mb-4 text-foreground">
                Tentang <span className="text-primary">SMA Merdeka</span>
              </h2>
              <p className="body-large mb-6">
                SMA Merdeka adalah institusi pendidikan yang berkomitmen untuk
                mengembangkan potensi setiap siswa menjadi individu yang cerdas,
                berkarakter, dan siap menghadapi masa depan.
              </p>
              <p className="body-medium">
                Dengan fasilitas modern, tenaga pengajar berkualitas, dan
                kurikulum yang mengikuti perkembangan zaman, kami memberikan
                pendidikan terbaik untuk generasi penerus bangsa.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="card-soft-shadow hover:card-hover-shadow transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <value.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {value.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
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
