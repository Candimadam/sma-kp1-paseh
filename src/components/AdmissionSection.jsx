import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  Users,
  Award,
  ArrowRight,
  Download,
  Phone,
} from "lucide-react";

const AdmissionSection = () => {
  const timeline = [
    {
      phase: "Pendaftaran",
      date: "1 Jan - 28 Feb 2025",
      status: "active",
      description: "Buka pendaftaran online dan offline",
    },
    {
      phase: "Seleksi Berkas",
      date: "1 - 15 Mar 2025",
      status: "upcoming",
      description: "Verifikasi dan evaluasi berkas pendaftaran",
    },
    {
      phase: "Tes Akademik",
      date: "20 - 22 Mar 2025",
      status: "upcoming",
      description: "Tes tertulis mata pelajaran inti",
    },
    {
      phase: "Pengumuman",
      date: "30 Mar 2025",
      status: "upcoming",
      description: "Pengumuman hasil seleksi",
    },
  ];

  const requirements = [
    "Ijazah SMP/MTs atau surat keterangan lulus",
    "Rapor semester 1-5 SMP/MTs",
    "Surat keterangan berkelakuan baik",
    "Surat keterangan sehat dari dokter",
    "Pas foto 3x4 (6 lembar) dan 2x3 (4 lembar)",
    "Fotocopy kartu keluarga dan akta kelahiran",
    "Surat keterangan tidak mampu (jika ada)",
  ];

  const fees = [
    { item: "Formulir Pendaftaran", amount: "Rp 50.000" },
    { item: "Uang Pangkal", amount: "Rp 2.500.000" },
    { item: "SPP per bulan", amount: "Rp 300.000" },
    { item: "Seragam & Buku", amount: "Rp 800.000" },
  ];

  return (
    <section id="penerimaan" className="section-padding bg-neutral-50">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4 text-foreground">
            Penerimaan <span className="text-primary">Siswa Baru</span>
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            Bergabunglah dengan keluarga besar SMA Merdeka dan raih masa depan
            gemilang melalui pendidikan berkualitas.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground">360</div>
            <div className="text-muted-foreground">Kuota Siswa Baru</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-success" />
            </div>
            <div className="text-2xl font-bold text-foreground">95%</div>
            <div className="text-muted-foreground">Tingkat Kelulusan</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-warning/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-warning" />
            </div>
            <div className="text-2xl font-bold text-foreground">60</div>
            <div className="text-muted-foreground">Hari Tersisa</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div>
            <Card className="card-soft-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Timeline Pendaftaran
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            item.status === "active"
                              ? "bg-primary text-white"
                              : "bg-neutral-200 text-neutral-500"
                          }`}
                        >
                          {item.status === "active" ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : (
                            <span className="text-sm font-bold">
                              {index + 1}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-foreground">
                            {item.phase}
                          </h4>
                          {item.status === "active" && (
                            <Badge className="bg-success text-success-foreground">
                              Aktif
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-primary font-medium mb-1">
                          {item.date}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Buttons */}
            <div className="mt-8 space-y-4">
              <Button variant="cta" size="lg" className="w-full">
                <FileText className="h-5 w-5 mr-2" />
                Daftar Online Sekarang
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" size="lg">
                  <Download className="h-4 w-4 mr-2" />
                  Download Brosur
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="h-4 w-4 mr-2" />
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>

          {/* Requirements & Fees */}
          <div className="space-y-8">
            {/* Requirements */}
            <Card className="card-soft-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  Persyaratan Pendaftaran
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fees */}
            <Card className="card-soft-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-primary" />
                  Informasi Biaya
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fees.map((fee, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-neutral-200 last:border-b-0"
                    >
                      <span className="text-sm text-foreground">
                        {fee.item}
                      </span>
                      <span className="font-semibold text-primary">
                        {fee.amount}
                      </span>
                    </div>
                  ))}
                  <div className="mt-4 p-4 bg-info/10 rounded-lg">
                    <p className="text-sm text-info font-medium">
                      💡 Tersedia program beasiswa untuk siswa berprestasi dan
                      kurang mampu
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Siap Menjadi Bagian dari SMA Merdeka?
            </h3>
            <p className="mb-6 text-white/90">
              Jangan sampai kehabisan kuota! Daftar sekarang dan raih masa depan
              gemilang bersama kami.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Mulai Pendaftaran
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
