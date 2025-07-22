import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  ExternalLink,
} from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      info: "Jl. Pendidikan No. 123, Kelurahan Merdeka, Kecamatan Sukamaju, Jakarta Selatan 12345",
      action: "Lihat di Maps",
    },
    {
      icon: Phone,
      title: "Telepon",
      info: "(021) 7654-3210 / (021) 7654-3211",
      action: "Hubungi Sekarang",
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@smamerdeka.sch.id / ppdb@smamerdeka.sch.id",
      action: "Kirim Email",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      info: "Senin - Jumat: 07.00 - 16.00 WIB\nSabtu: 07.00 - 12.00 WIB",
      action: null,
    },
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: "Facebook",
      handle: "@SMAMerdeka",
      url: "#",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@sma_merdeka",
      url: "#",
      color: "bg-pink-600 hover:bg-pink-700",
    },
    {
      icon: Youtube,
      name: "YouTube",
      handle: "SMA Merdeka Official",
      url: "#",
      color: "bg-red-600 hover:bg-red-700",
    },
  ];

  return (
    <section id="kontak" className="py-24 bg-background">
      <div className="mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-primary/80">
            Alamat & <span className="text-blue-500">Kontak Sekolah</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hubungi kami untuk informasi lebih lanjut tentang pendaftaran,
            kurikulum, atau kegiatan sekolah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((contact, index) => (
                <Card
                  key={index}
                  className="shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <contact.icon className="h-6 w-6 text-blue-500" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary/80 mb-2">
                          {contact.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line leading-relaxed">
                          {contact.info}
                        </p>
                        {contact.action && (
                          <Button
                            variant="outline"
                            className="text-primary/80"
                            size="sm"
                          >
                            {contact.action}
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map */}
            <Card className="card-soft-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-80 bg-neutral-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194637395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1647887607073!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi SMA Merdeka"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Media & Quick Info */}
          <div className="space-y-8">
            {/* Social Media */}
            <Card className="card-soft-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary/80 mb-6">
                  Ikuti Media Sosial Kami
                </h3>
                <div className="space-y-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-neutral-50 transition-colors group"
                    >
                      <div
                        className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center transition-colors`}
                      >
                        <social.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-primary/80 group-hover:text-blue-500 transition-colors">
                          {social.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {social.handle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="card-soft-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-primary/80 mb-4">
                  Informasi Cepat
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-primary/5 rounded-lg">
                    <div className="font-medium text-blue-500 mb-1">
                      Hotline PPDB
                    </div>
                    <div className="text-sm text-primary/80">
                      📞 0811-1234-5678
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      24/7 selama masa pendaftaran
                    </div>
                  </div>

                  <div className="p-4 bg-orange-500/5 rounded-lg">
                    <div className="font-medium text-orange-500 mb-1">
                      WhatsApp Official
                    </div>
                    <div className="text-sm text-primary/80">
                      💬 0812-3456-7890
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Konsultasi & informasi
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-500/5 rounded-lg">
                    <div className="font-medium text-yellow-500 mb-1">
                      Email PPDB
                    </div>
                    <div className="text-sm text-primary/80">
                      ✉️ ppdb@smamerdeka.sch.id
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Respon maksimal 24 jam
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Button variant="cta" size="lg" className="w-full">
              <Phone className="h-5 w-5 mr-2" />
              Hubungi Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
