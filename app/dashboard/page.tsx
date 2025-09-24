"use client";

import { useState } from "react";
import { Users, BookOpen, GraduationCap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

type Siswa = {
    namaLengkap: string;
    jenisKelamin: string;
    sekolahAsal: string;
    tempatLahir: string;
    tanggalLahir: string;
    alamatLengkap: string;
    nomorTelepon: string;
    namaAyah: string;
    pekerjaanAyah: string;
    namaIbu: string;
    pekerjaanIbu: string;
    rekomendasiMasuk: string;
};

export default function DashboardSiswa() {
    // contoh dummy data siswa
    const [data] = useState<Siswa[]>([
        {
            namaLengkap: "Andi Wijaya",
            jenisKelamin: "Laki-laki",
            sekolahAsal: "SMP Negeri 1 Jakarta",
            tempatLahir: "Jakarta",
            tanggalLahir: "2009-05-12",
            alamatLengkap: "Jl. Merdeka No. 45, Jakarta Pusat",
            nomorTelepon: "081234567890",
            namaAyah: "Budi Wijaya",
            pekerjaanAyah: "Pegawai Negeri",
            namaIbu: "Siti Aminah",
            pekerjaanIbu: "Guru",
            rekomendasiMasuk: "Pak Ahmad",
        },
        {
            namaLengkap: "Dewi Lestari",
            jenisKelamin: "Perempuan",
            sekolahAsal: "SMP Negeri 3 Bandung",
            tempatLahir: "Bandung",
            tanggalLahir: "2010-01-20",
            alamatLengkap: "Jl. Asia Afrika No. 10, Bandung",
            nomorTelepon: "089876543210",
            namaAyah: "Joko Lestari",
            pekerjaanAyah: "Wiraswasta",
            namaIbu: "Maya Puspita",
            pekerjaanIbu: "Ibu Rumah Tangga",
            rekomendasiMasuk: "Bu Rina",
        },
    ]);

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg p-6">
                <h2 className="text-2xl font-bold text-blue-600 mb-8">Dashboard</h2>
                <nav className="space-y-4">
                    <a className="block text-gray-700 font-medium hover:text-blue-600 cursor-pointer">
                        Data Siswa
                    </a>
                    <a className="block text-gray-700 font-medium hover:text-blue-600 cursor-pointer">
                        Statistik
                    </a>
                    <a className="block text-gray-700 font-medium hover:text-blue-600 cursor-pointer">
                        Laporan
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Data Pendaftaran Siswa
                    </h1>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
                        + Tambah Siswa
                    </button>
                </div>

                {/* Statistik Cards */}
                <div className="grid grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow flex items-center">
                        <Users className="w-10 h-10 text-blue-600 mr-4" />
                        <div>
                            <p className="text-gray-600">Total Siswa</p>
                            <p className="text-2xl font-bold">{data.length}</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow flex items-center">
                        <BookOpen className="w-10 h-10 text-green-600 mr-4" />
                        <div>
                            <p className="text-gray-600">Sekolah Asal</p>
                            <p className="text-2xl font-bold">
                                {new Set(data.map((s) => s.sekolahAsal)).size}
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow flex items-center">
                        <GraduationCap className="w-10 h-10 text-purple-600 mr-4" />
                        <div>
                            <p className="text-gray-600">Jenis Kelamin</p>
                            <p className="text-sm">
                                Laki-laki:{" "}
                                {data.filter((s) => s.jenisKelamin === "Laki-laki").length},{" "}
                                Perempuan:{" "}
                                {data.filter((s) => s.jenisKelamin === "Perempuan").length}
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow flex items-center">
                        <TrendingUp className="w-10 h-10 text-orange-600 mr-4" />
                        <div>
                            <p className="text-gray-600">Rekomendasi</p>
                            <p className="text-2xl font-bold">
                                {new Set(data.map((s) => s.rekomendasiMasuk)).size}
                            </p>
                        </div>
                    </div>
                </div>

                {/* List Data Siswa */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-blue-600">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Nama Lengkap</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Jenis Kelamin</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Sekolah Asal</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">No. Telepon</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Detail</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {data.map((siswa, idx) => (
                                <tr key={idx} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-medium">{siswa.namaLengkap}</td>
                                    <td className="px-4 py-3">{siswa.jenisKelamin}</td>
                                    <td className="px-4 py-3">{siswa.sekolahAsal}</td>
                                    <td className="px-4 py-3">{siswa.nomorTelepon}</td>
                                    <td className="px-4 py-3">
                                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                                            Terdaftar
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">
                                        <Button className="inline-block text-xs font-semibold rounded-full bg-blue-500 hover:bg-blue-800 text-white">
                                            Selengkapnya
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}