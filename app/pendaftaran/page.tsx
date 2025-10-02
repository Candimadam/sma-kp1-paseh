"use client"

import type React from "react"

import { useEffect, useState } from "react"
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

export default function PendaftaranSiswa() {
    const [form, setForm] = useState<Siswa>({
        namaLengkap: "",
        jenisKelamin: "",
        sekolahAsal: "",
        tempatLahir: "",
        tanggalLahir: "",
        alamatLengkap: "",
        nomorTelepon: "",
        namaAyah: "",
        pekerjaanAyah: "",
        namaIbu: "",
        pekerjaanIbu: "",
        rekomendasiMasuk: "",
    })

    const [data, setData] = useState<Siswa[]>([])
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        if (!submitted) return
        const t = setTimeout(() => setSubmitted(false), 2500)
        return () => clearTimeout(t)
    }, [submitted])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const resetForm = () =>
        setForm({
            namaLengkap: "",
            jenisKelamin: "",
            sekolahAsal: "",
            tempatLahir: "",
            tanggalLahir: "",
            alamatLengkap: "",
            nomorTelepon: "",
            namaAyah: "",
            pekerjaanAyah: "",
            namaIbu: "",
            pekerjaanIbu: "",
            rekomendasiMasuk: "",
        })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setData((prev) => [...prev, form])
        resetForm()
        setSubmitted(true)
    }

    return (
        <div className="flex flex-col items-center">
            {/* Header */}
            <header className="w-full max-w-3xl text-center mb-6">
                <h2 className="text-balance text-3xl font-semibold text-blue-600 dark:text-yellow-400">
                    Pendaftaran Siswa Baru
                </h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Tahun Ajaran 2026/2027</p>
            </header>

            {/* Form Card */}
            <div className="w-full max-w-3xl rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm p-6 md:p-8">
                {/* Alert sukses non-intrusif */}
                <div
                    className={`mb-4 rounded-lg border p-3 text-sm transition-opacity ${submitted
                            ? "opacity-100 border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-700/40 dark:bg-emerald-900/30 dark:text-emerald-200"
                            : "opacity-0 pointer-events-none"
                        }`}
                    role="status"
                    aria-live="polite"
                >
                    Data siswa berhasil disimpan.
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Data Siswa */}
                    <section aria-labelledby="bagian-data-siswa" className="space-y-4">
                        <h3 id="bagian-data-siswa" className="text-lg font-semibold">
                            Data Siswa
                        </h3>

                        <div>
                            <label htmlFor="namaLengkap" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Nama Lengkap
                            </label>
                            <input
                                id="namaLengkap"
                                name="namaLengkap"
                                value={form.namaLengkap}
                                onChange={handleChange}
                                placeholder="Masukkan nama lengkap"
                                autoComplete="name"
                                required
                                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:focus:border-yellow-400 dark:focus:ring-yellow-200 text-black dark:text-white"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="jenisKelamin"
                                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Jenis Kelamin
                                </label>
                                <select
                                    id="jenisKelamin"
                                    name="jenisKelamin"
                                    value={form.jenisKelamin}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:focus:border-yellow-400 dark:focus:ring-yellow-200 text-black dark:text-white"
                                >
                                    <option value="" disabled>
                                        Pilih jenis kelamin
                                    </option>
                                    <option value="Laki-laki">Laki-laki</option>
                                    <option value="Perempuan">Perempuan</option>
                                </select>
                            </div>
                            <div>
                                <label
                                    htmlFor="sekolahAsal"
                                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Sekolah Asal
                                </label>
                                <input
                                    id="sekolahAsal"
                                    name="sekolahAsal"
                                    value={form.sekolahAsal}
                                    onChange={handleChange}
                                    placeholder="Masukkan sekolah asal"
                                    required
                                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:focus:border-yellow-400 dark:focus:ring-yellow-200 text-black dark:text-white"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="tempatLahir"
                                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Tempat Lahir
                                </label>
                                <input
                                    id="tempatLahir"
                                    name="tempatLahir"
                                    value={form.tempatLahir}
                                    onChange={handleChange}
                                    placeholder="Masukkan tempat lahir"
                                    required
                                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:focus:border-yellow-400 dark:focus:ring-yellow-200 text-black dark:text-white"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="tanggalLahir"
                                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Tanggal Lahir
                                </label>
                                <input
                                    id="tanggalLahir"
                                    type="date"
                                    name="tanggalLahir"
                                    value={form.tanggalLahir}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:focus:border-yellow-400 dark:focus:ring-yellow-200 text-black dark:text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="alamatLengkap"
                                className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Alamat Lengkap
                            </label>
                            <input
                                id="alamatLengkap"
                                name="alamatLengkap"
                                value={form.alamatLengkap}
                                onChange={handleChange}
                                placeholder="Masukkan alamat lengkap"
                                required
                                autoComplete="street-address"
                                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:focus:border-yellow-400 dark:focus:ring-yellow-200 text-black dark:text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="nomorTelepon" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Nomor Telepon / Handphone
                            </label>
                            <input
                                id="nomorTelepon"
                                name="nomorTelepon"
                                type="tel"
                                inputMode="numeric"
                                pattern="^[0-9]{9,15}$"
                                title="Gunakan 9-15 digit angka"
                                value={form.nomorTelepon}
                                onChange={handleChange}
                                placeholder="08xxxxxxxxxx"
                                required
                                autoComplete="tel"
                                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:focus:border-yellow-400 dark:focus:ring-yellow-200 text-black dark:text-white"
                            />
                        </div>
                    </section>

                    {/* Data Orang Tua */}
                    <section aria-labelledby="bagian-orang-tua" className="space-y-4">
                        <h3 id="bagian-orang-tua" className="text-lg font-semibold">
                            Data Orang Tua
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="namaAyah" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Nama Ayah
                                </label>
                                <input
                                    id="namaAyah"
                                    name="namaAyah"
                                    value={form.namaAyah}
                                    onChange={handleChange}
                                    placeholder="Nama Ayah"
                                    required
                                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:focus:border-yellow-400 dark:focus:ring-yellow-200 text-black dark:text-white"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="pekerjaanAyah"
                                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Pekerjaan Ayah
                                </label>
                                <input
                                    id="pekerjaanAyah"
                                    name="pekerjaanAyah"
                                    value={form.pekerjaanAyah}
                                    onChange={handleChange}
                                    placeholder="Pekerjaan Ayah"
                                    required
                                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:focus:border-yellow-400 dark:focus:ring-yellow-200 text-black dark:text-white"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="namaIbu" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Nama Ibu
                                </label>
                                <input
                                    id="namaIbu"
                                    name="namaIbu"
                                    value={form.namaIbu}
                                    onChange={handleChange}
                                    placeholder="Nama Ibu"
                                    required
                                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:focus:border-yellow-400 dark:focus:ring-yellow-200 text-black dark:text-white"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="pekerjaanIbu"
                                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Pekerjaan Ibu
                                </label>
                                <input
                                    id="pekerjaanIbu"
                                    name="pekerjaanIbu"
                                    value={form.pekerjaanIbu}
                                    onChange={handleChange}
                                    placeholder="Pekerjaan Ibu"
                                    required
                                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:focus:border-yellow-400 dark:focus:ring-yellow-200 text-black dark:text-white"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="rekomendasiMasuk"
                                className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Rekomendasi Masuk Dari
                            </label>
                            <input
                                id="rekomendasiMasuk"
                                name="rekomendasiMasuk"
                                value={form.rekomendasiMasuk}
                                onChange={handleChange}
                                placeholder="Nama orang yang merekomendasikan"
                                required
                                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-3 shadow-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:focus:border-yellow-400 dark:focus:ring-yellow-200 text-black dark:text-white"
                            />
                        </div>
                    </section>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-2">
                        <Button type="button" onClick={resetForm} className="bg-red-600 hover:bg-red-700 text-white">
                            Reset
                        </Button>
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                            Simpan
                        </Button>
                    </div>
                </form>
            </div>

            {/* Data Table/Card */}
            <section className="w-full max-w-6xl mt-10">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-yellow-400">Data Siswa Terdaftar</h3>

                {data.length === 0 ? (
                    <p className="text-sm text-gray-600 dark:text-gray-300">Belum ada data. Silakan isi formulir di atas.</p>
                ) : (
                    <>
                        {/* Mobile: Cards */}
                        <div className="grid grid-cols-1 gap-4 md:hidden">
                            {data.map((s, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 shadow-sm"
                                >
                                    <div className="flex items-center justify-between">
                                        <h4 className="font-semibold">{s.namaLengkap}</h4>
                                        <span className="rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5 text-xs">Terdaftar</span>
                                    </div>
                                    <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
                                        <div>
                                            <dt className="text-gray-500">Jenis Kelamin</dt>
                                            <dd className="font-medium">{s.jenisKelamin}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-gray-500">Sekolah Asal</dt>
                                            <dd className="font-medium">{s.sekolahAsal}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-gray-500">Telp</dt>
                                            <dd className="font-medium">{s.nomorTelepon}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-gray-500">Rekomendasi</dt>
                                            <dd className="font-medium">{s.rekomendasiMasuk}</dd>
                                        </div>
                                    </dl>

                                    <details className="mt-3">
                                        <summary className="text-blue-600 hover:underline text-sm">Detail lengkap</summary>
                                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                                            <div>
                                                <span className="text-gray-500">Tempat, Tanggal</span>
                                                <div className="font-medium">
                                                    {s.tempatLahir}, {s.tanggalLahir}
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-gray-500">Alamat</span>
                                                <div className="font-medium">{s.alamatLengkap}</div>
                                            </div>
                                            <div>
                                                <span className="text-gray-500">Ayah</span>
                                                <div className="font-medium">
                                                    {s.namaAyah} — {s.pekerjaanAyah}
                                                </div>
                                            </div>
                                            <div>
                                                <span className="text-gray-500">Ibu</span>
                                                <div className="font-medium">
                                                    {s.namaIbu} — {s.pekerjaanIbu}
                                                </div>
                                            </div>
                                        </div>
                                    </details>
                                </div>
                            ))}
                        </div>

                        {/* Desktop: Table */}
                        <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                            <table className="min-w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                                <thead className="bg-blue-600 text-white">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Nama Lengkap</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Jenis Kelamin</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Sekolah Asal</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">No. Telepon</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Rekomendasi</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">
                                            Tempat/Tanggal Lahir
                                        </th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Alamat</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Ayah</th>
                                        <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Ibu</th>
                                        <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {data.map((s, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/40">
                                            <td className="px-4 py-3 font-medium">{s.namaLengkap}</td>
                                            <td className="px-4 py-3">{s.jenisKelamin}</td>
                                            <td className="px-4 py-3">{s.sekolahAsal}</td>
                                            <td className="px-4 py-3">{s.nomorTelepon}</td>
                                            <td className="px-4 py-3">{s.rekomendasiMasuk}</td>
                                            <td className="px-4 py-3">
                                                {s.tempatLahir}, {s.tanggalLahir}
                                            </td>
                                            <td className="px-4 py-3">{s.alamatLengkap}</td>
                                            <td className="px-4 py-3">
                                                {s.namaAyah} — {s.pekerjaanAyah}
                                            </td>
                                            <td className="px-4 py-3">
                                                {s.namaIbu} — {s.pekerjaanIbu}
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                <span className="inline-block rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-semibold">
                                                    Terdaftar
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </section>
        </div>
    )
}
