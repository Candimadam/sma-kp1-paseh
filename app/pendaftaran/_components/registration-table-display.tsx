"use client"

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { enumToReadable, formattedDate } from "@/lib/string";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";

export function RegistrationTableDisplay() {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.registration.getAllRegistrationsPublic.queryOptions());
    const [search, setSearch] = useState("");

    const filteredData = data.filter((s) => {
        const searchLower = search.toLowerCase();
        return (
            s.namaLengkap.toLowerCase().includes(searchLower) ||
            s.nisn.toLowerCase().includes(searchLower)
        );
    });

    return (

        <section className="w-full max-w-6xl mt-10 space-y-4">
            <div className="md:flex items-center md:justify-between mb-2">
                <div className="md:flex-1">
                    <h3 className="text-xl font-semibold text-blue-600 dark:text-yellow-400">Data Siswa Terdaftar</h3>
                </div>
                <Input className="md:max-w-xl" placeholder="Cari berdasarkan nama lengkap atau NISN..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>

            {filteredData.length === 0 ? (
                <>
                    {/* Mobile not found */}
                    <div className="md:hidden flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800">
                        <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Data tidak ditemukan</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Coba sesuaikan kata kunci pencarian Anda atau atur ulang filter untuk melihat hasil yang berbeda.</p>
                    </div>
                    {/* Desktop not found */}
                    <div className="hidden md:flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800">
                        <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">Data tidak ditemukan</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Coba sesuaikan kata kunci pencarian Anda atau atur ulang filter untuk melihat hasil yang berbeda.</p>
                    </div>
                </>
            ) : (
                <>
                    {/* Mobile: Cards */}
                    <div className="grid grid-cols-1 gap-4 md:hidden">
                        {filteredData.map((s, idx) => (
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
                                        <dt className="text-gray-500">NISN</dt>
                                        <dd className="font-medium">{s.nisn}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-gray-500">Jenis Kelamin</dt>
                                        <dd className="font-medium">{enumToReadable(s.jenisKelamin)}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-gray-500">Sekolah Asal</dt>
                                        <dd className="font-medium">{s.sekolahAsal}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-gray-500">Status</dt>
                                        <dd className="font-medium">{enumToReadable(s.status)}</dd>
                                    </div>
                                </dl>
                            </div>
                        ))}
                    </div>

                    {/* Desktop: Table */}
                    <div className="hidden md:block overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                        <table className="min-w-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                            <thead className="bg-blue-600 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">NISN</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Nama Lengkap</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Jenis Kelamin</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">Sekolah Asal</th>
                                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide">
                                        Tempat/Tanggal Lahir
                                    </th>
                                    <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {filteredData.map((s, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/40">
                                        <td className="px-4 py-3 font-medium">{s.nisn}</td>
                                        <td className="px-4 py-3 font-medium">{s.namaLengkap}</td>
                                        <td className="px-4 py-3">{enumToReadable(s.jenisKelamin)}</td>
                                        <td className="px-4 py-3">{s.sekolahAsal}</td>
                                        <td className="px-4 py-3">
                                            {s.tempatLahir}, {formattedDate(s.tanggalLahir)}
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <Badge variant={s.status === "TERDAFTAR" ? "default" : s.status === "DITERIMA" ? "success" : "destructive"}>
                                                {enumToReadable(s.status)}
                                            </Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </section>
    )
}