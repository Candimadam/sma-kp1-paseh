"use client"

import { useMemo, useState } from "react"
import {
    Users,
    BookOpen,
    GraduationCap,
    TrendingUp,
    LogOut,
    Menu,
    X,
    SearchIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"

type Siswa = {
    namaLengkap: string
    jenisKelamin: string
    sekolahAsal: string
    tempatLahir: string
    tanggalLahir: string
    alamatLengkap: string
    nomorTelepon: string
    namaAyah: string
    pekerjaanAyah: string
    namaIbu: string
    pekerjaanIbu: string
    rekomendasiMasuk: string
}

export default function DashboardSiswa() {
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
    ])

    // UI state
    const [mobileNavOpen, setMobileNavOpen] = useState(false)
    const [q, setQ] = useState("")
    const [filterGender, setFilterGender] = useState<
        "" | "Laki-laki" | "Perempuan"
    >("")

    const filtered = useMemo(() => {
        return data.filter((s) => {
            const matchesQ =
                q.trim().length === 0 ||
                [s.namaLengkap, s.sekolahAsal, s.nomorTelepon, s.rekomendasiMasuk]
                    .join(" ")
                    .toLowerCase()
                    .includes(q.toLowerCase())
            const matchesGender = !filterGender || s.jenisKelamin === filterGender
            return matchesQ && matchesGender
        })
    }, [data, q, filterGender])

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar Desktop */}
            <aside className="hidden md:flex w-64 bg-white shadow-lg p-6 flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-blue-600 mb-8">
                        Dashboard
                    </h2>
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
                </div>
                <div className="mt-10">
                    <Button
                        className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold"
                        onClick={() => {
                            window.location.href = "/"
                        }}
                    >
                        <LogOut className="w-4 h-4" />
                        Logout
                    </Button>
                </div>
            </aside>

            {/* Mobile Topbar */}
            <div className="md:hidden fixed inset-x-0 top-0 z-20 bg-white border-b border-gray-200">
                <div className="flex items-center justify-between px-4 py-3">
                    <h2 className="text-lg font-semibold text-blue-600">Dashboard</h2>
                    <button
                        aria-label={mobileNavOpen ? "Tutup menu" : "Buka menu"}
                        onClick={() => setMobileNavOpen((s) => !s)}
                        className="p-2 rounded-md border border-gray-200"
                    >
                        {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
                {mobileNavOpen && (
                    <nav className="px-4 pb-3 space-y-2">
                        <a className="block px-3 py-2 rounded-md hover:bg-gray-50">
                            Data Siswa
                        </a>
                        <a className="block px-3 py-2 rounded-md hover:bg-gray-50">
                            Statistik
                        </a>
                        <a className="block px-3 py-2 rounded-md hover:bg-gray-50">
                            Laporan
                        </a>
                        <Button
                            className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white"
                            onClick={() => (window.location.href = "/")}
                        >
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </Button>
                    </nav>
                )}
            </div>

            {/* Main Content - scrollable */}
            <main className="flex-1 flex flex-col h-screen overflow-y-auto p-4 md:p-8 pt-16 md:pt-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Data Pendaftaran Siswa
                    </h1>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white self-start md:self-auto">
                        + Tambah Siswa
                    </Button>
                </div>

                {/* Filter Bar */}
                <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2">
                            <SearchIcon size={16} className="text-gray-500" />
                            <input
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                placeholder="Cari nama, sekolah, telepon, rekomendasi..."
                                className="w-full bg-transparent outline-none text-sm"
                                aria-label="Pencarian"
                            />
                        </div>
                    </div>
                    <div>
                        <select
                            value={filterGender}
                            onChange={(e) => setFilterGender(e.target.value as any)}
                            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
                            aria-label="Filter jenis kelamin"
                        >
                            <option value="">Semua Jenis Kelamin</option>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                    </div>
                </div>

                {/* Statistik Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white p-5 rounded-lg shadow flex items-center">
                        <Users className="w-10 h-10 text-blue-600 mr-4" />
                        <div>
                            <p className="text-gray-600">Total Siswa</p>
                            <p className="text-2xl font-bold">{filtered.length}</p>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow flex items-center">
                        <BookOpen className="w-10 h-10 text-emerald-600 mr-4" />
                        <div>
                            <p className="text-gray-600">Sekolah Asal</p>
                            <p className="text-2xl font-bold">
                                {new Set(filtered.map((s) => s.sekolahAsal)).size}
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow flex items-center">
                        <GraduationCap className="w-10 h-10 text-amber-500 mr-4" />
                        <div>
                            <p className="text-gray-600">Jenis Kelamin</p>
                            <p className="text-sm">
                                Laki-laki:{" "}
                                {filtered.filter((s) => s.jenisKelamin === "Laki-laki").length}
                                , Perempuan:{" "}
                                {filtered.filter((s) => s.jenisKelamin === "Perempuan").length}
                            </p>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow flex items-center">
                        <TrendingUp className="w-10 h-10 text-red-600 mr-4" />
                        <div>
                            <p className="text-gray-600">Rekomendasi</p>
                            <p className="text-2xl font-bold">
                                {new Set(filtered.map((s) => s.rekomendasiMasuk)).size}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Table siswa */}
                <div className="hidden md:block bg-white rounded-xl shadow-md border border-gray-200 overflow-x-auto mb-10">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-blue-600">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Nama Lengkap
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Jenis Kelamin
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Sekolah Asal
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    No. Telepon
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                    Rekomendasi
                                </th>
                                <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
                                    Detail
                                </th>
                                <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filtered.map((siswa, idx) => (
                                <tr key={idx} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 font-medium">
                                        {siswa.namaLengkap}
                                    </td>
                                    <td className="px-4 py-3">{siswa.jenisKelamin}</td>
                                    <td className="px-4 py-3">{siswa.sekolahAsal}</td>
                                    <td className="px-4 py-3">{siswa.nomorTelepon}</td>
                                    <td className="px-4 py-3">{siswa.rekomendasiMasuk}</td>
                                    <td className="px-4 py-3 text-center">
                                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700">
                                            Terdaftar
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-center">
                                        <Button className="text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white">
                                            Selengkapnya
                                        </Button>
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex justify-center gap-2">
                                            <Button className="text-xs font-semibold bg-amber-500 hover:bg-amber-600 text-white">
                                                Edit
                                            </Button>
                                            <Button className="text-xs font-semibold bg-red-600 hover:bg-red-700 text-white">
                                                Hapus
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {filtered.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={8}
                                        className="px-4 py-6 text-center text-sm text-gray-500"
                                    >
                                        Tidak ada data yang cocok dengan filter/pencarian.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}
