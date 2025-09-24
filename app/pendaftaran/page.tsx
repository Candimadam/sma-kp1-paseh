"use client";

import { useState } from "react";
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
    });

    const [data, setData] = useState<Siswa[]>([]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setData([...data, form]);
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
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center py-10">
            <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-semibold text-blue-600 dark:text-yellow-400 mb-2">
                    Pendaftaran Siswa Baru
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Tahun Ajaran 2026/2027</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nama Lengkap */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                            Nama Lengkap
                        </label>
                        <input
                            name="namaLengkap"
                            value={form.namaLengkap}
                            onChange={handleChange}
                            placeholder="Masukkan nama lengkap"
                            className="w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-3 focus:border-blue-500 dark:focus:border-yellow-400 focus:ring focus:ring-blue-200 dark:focus:ring-yellow-200 outline-none text-black dark:text-white dark:bg-gray-700"
                            required
                        />
                    </div>

                    {/* Jenis Kelamin */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                            Jenis Kelamin
                        </label>
                        <select
                            name="jenisKelamin"
                            value={form.jenisKelamin}
                            onChange={handleChange}
                            className="w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-3 bg-white dark:bg-gray-700 focus:border-blue-500 dark:focus:border-yellow-400 focus:ring focus:ring-blue-200 dark:focus:ring-yellow-200 outline-none text-black dark:text-white"
                            required
                        >
                            <option value="" disabled hidden>
                                Pilih jenis kelamin
                            </option>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                    </div>

                    {/* Sekolah Asal */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                            Sekolah Asal
                        </label>
                        <input
                            name="sekolahAsal"
                            value={form.sekolahAsal}
                            onChange={handleChange}
                            placeholder="Masukkan sekolah asal"
                            className="w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-3 focus:border-blue-500 dark:focus:border-yellow-400 focus:ring focus:ring-blue-200 dark:focus:ring-yellow-200 outline-none text-black dark:text-white dark:bg-gray-700"
                            required
                        />
                    </div>

                    {/* Tempat & Tanggal Lahir */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                Tempat Lahir
                            </label>
                            <input
                                name="tempatLahir"
                                value={form.tempatLahir}
                                onChange={handleChange}
                                placeholder="Masukkan tempat lahir"
                                className="w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-3 focus:border-blue-500 dark:focus:border-yellow-400 focus:ring focus:ring-blue-200 dark:focus:ring-yellow-200 outline-none text-black dark:text-white dark:bg-gray-700"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                Tanggal Lahir
                            </label>
                            <input
                                type="date"
                                name="tanggalLahir"
                                value={form.tanggalLahir}
                                onChange={handleChange}
                                className="w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-3 focus:border-blue-500 dark:focus:border-yellow-400 focus:ring focus:ring-blue-200 dark:focus:ring-yellow-200 outline-none text-black dark:text-white dark:bg-gray-700"
                                required
                            />
                        </div>
                    </div>

                    {/* Alamat */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                            Alamat Lengkap
                        </label>
                        <input
                            name="alamatLengkap"
                            value={form.alamatLengkap}
                            onChange={handleChange}
                            placeholder="Masukkan alamat lengkap"
                            className="w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-3 focus:border-blue-500 dark:focus:border-yellow-400 focus:ring focus:ring-blue-200 dark:focus:ring-yellow-200 outline-none text-black dark:text-white dark:bg-gray-700"
                            required
                        />
                    </div>

                    {/* Telepon */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                            Nomor Telepon / Handphone
                        </label>
                        <input
                            name="nomorTelepon"
                            value={form.nomorTelepon}
                            onChange={handleChange}
                            placeholder="08xxxxxxxxxx"
                            className="w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-3 focus:border-blue-500 dark:focus:border-yellow-400 focus:ring focus:ring-blue-200 dark:focus:ring-yellow-200 outline-none text-black dark:text-white dark:bg-gray-700"
                            required
                        />
                    </div>

                    {/* Orang Tua */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                Nama Ayah
                            </label>
                            <input
                                name="namaAyah"
                                value={form.namaAyah}
                                onChange={handleChange}
                                placeholder="Nama Ayah"
                                className="w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-3 focus:border-blue-500 dark:focus:border-yellow-400 focus:ring focus:ring-blue-200 dark:focus:ring-yellow-200 outline-none text-black dark:text-white dark:bg-gray-700"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                Pekerjaan Ayah
                            </label>
                            <input
                                name="pekerjaanAyah"
                                value={form.pekerjaanAyah}
                                onChange={handleChange}
                                placeholder="Pekerjaan Ayah"
                                className="w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-3 focus:border-blue-500 dark:focus:border-yellow-400 focus:ring focus:ring-blue-200 dark:focus:ring-yellow-200 outline-none text-black dark:text-white dark:bg-gray-700"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                Nama Ibu
                            </label>
                            <input
                                name="namaIbu"
                                value={form.namaIbu}
                                onChange={handleChange}
                                placeholder="Nama Ibu"
                                className="w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-3 focus:border-blue-500 dark:focus:border-yellow-400 focus:ring focus:ring-blue-200 dark:focus:ring-yellow-200 outline-none text-black dark:text-white dark:bg-gray-700"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                                Pekerjaan Ibu
                            </label>
                            <input
                                name="pekerjaanIbu"
                                value={form.pekerjaanIbu}
                                onChange={handleChange}
                                placeholder="Pekerjaan Ibu"
                                className="w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-3 focus:border-blue-500 dark:focus:border-yellow-400 focus:ring focus:ring-blue-200 dark:focus:ring-yellow-200 outline-none text-black dark:text-white dark:bg-gray-700"
                                required
                            />
                        </div>
                    </div>

                    {/* Rekomendasi */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                            Rekomendasi Masuk Dari
                        </label>
                        <input
                            name="rekomendasiMasuk"
                            value={form.rekomendasiMasuk}
                            onChange={handleChange}
                            placeholder="Nama orang yang merekomendasikan"
                            className="w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm p-3 focus:border-blue-500 dark:focus:border-yellow-400 focus:ring focus:ring-blue-200 dark:focus:ring-yellow-200 outline-none text-black dark:text-white dark:bg-gray-700"
                            required
                        />
                    </div>

                    <div className="flex justify-end">
                        <div className="flex gap-4">
                            <Button
                                type="button"
                                className="bg-red-400 dark:bg-red-600 text-white dark:text-white px-6 py-2 rounded shadow hover:bg-red-600 dark:hover:bg-red-700"
                                onClick={() =>
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
                                }
                            >
                                Reset
                            </Button>
                            <Button
                                type="submit"
                                className="bg-blue-500 dark:bg-yellow-400 text-white dark:text-white px-6 py-2 rounded shadow hover:bg-blue-800 dark:hover:bg-yellow-600"
                            >
                                Simpan
                            </Button>
                        </div>
                    </div>
                </form>
            </div>

            {/* Data Table */}
            <div className="w-full max-w-5xl mt-10">
                <h2 className="text-xl font-semibold mb-2 text-blue-600 dark:text-yellow-400">
                    Data Siswa Terdaftar
                </h2>
                <div className="overflow-x-auto rounded-lg shadow">
                    <table className="min-w-full border bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg">
                        <thead>
                            <tr className="bg-blue-500 dark:bg-yellow-500">
                                <th className="p-2">Nama Lengkap</th>
                                <th className="p-2">Jenis Kelamin</th>
                                <th className="p-2">Sekolah Asal</th>
                                <th className="p-2">No. Telepon</th>
                                <th className="p-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((siswa, idx) => (
                                <tr
                                    key={idx}
                                    className={
                                        idx % 2 === 0
                                            ? "bg-white dark:bg-gray-800"
                                            : "bg-gray-50 dark:bg-gray-700"
                                    }
                                >
                                    <td className="border p-2">{siswa.namaLengkap}</td>
                                    <td className="border p-2">{siswa.jenisKelamin}</td>
                                    <td className="border p-2">{siswa.sekolahAsal}</td>
                                    <td className="border p-2">{siswa.tempatLahir}</td>
                                    <td className="border p-2">{siswa.tanggalLahir}</td>
                                    <td className="border p-2">{siswa.alamatLengkap}</td>
                                    <td className="border p-2">{siswa.nomorTelepon}</td>
                                    <td className="border p-2">{siswa.namaAyah}</td>
                                    <td className="border p-2">{siswa.pekerjaanAyah}</td>
                                    <td className="border p-2">{siswa.namaIbu}</td>
                                    <td className="border p-2">{siswa.pekerjaanIbu}</td>
                                    <td className="border p-2">{siswa.rekomendasiMasuk}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}