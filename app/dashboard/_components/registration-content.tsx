"use client";

import { Button } from "@/components/ui/button";
import { Gender } from "@/lib/generated/prisma";
import { enumToReadable, formattedDate } from "@/lib/string";
import { useTRPC } from "@/trpc/client";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import {
  GraduationCap,
  LoaderCircle,
  School,
  SearchIcon,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { toast } from "sonner";

export function RegistrationContent() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const { data } = useSuspenseQuery(
    trpc.registration.getAllRegistrations.queryOptions(),
  );

  const deleteMutationOptions =
    trpc.registration.deleteRegistration.mutationOptions({
      onSuccess: (data) => {
        toast.success(data.message);
        queryClient.invalidateQueries({
          queryKey: trpc.registration.pathKey(),
        });
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  const deleteMutation = useMutation(deleteMutationOptions);
  const isDeleting = deleteMutation.isPending;

  // UI state
  const [q, setQ] = useState("");
  const [filterGender, setFilterGender] = useState<Gender | "">("");

  const filtered = data.filter((s) => {
    const qLower = q.toLowerCase();
    const matchesQuery =
      s.namaLengkap.toLowerCase().includes(qLower) ||
      s.sekolahAsal.toLowerCase().includes(qLower) ||
      s.nomorTelepon?.toLowerCase().includes(qLower) ||
      s.rekomendasiDari?.toLowerCase().includes(qLower);

    const matchesGender = filterGender ? s.jenisKelamin === filterGender : true;

    return matchesQuery && matchesGender;
  });

  return (
    <main className="flex-1 flex flex-col h-screen overflow-y-auto p-4 md:p-8 pt-16 md:pt-8 bg-neutral-50 dark:bg-neutral-800">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
          Data Pendaftaran Siswa
        </h1>
        <div className="flex gap-2">
          {data.length > 0 && (
            <Button
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={async () => {
                const XLSX = await import("xlsx");

                const ws = XLSX.utils.json_to_sheet(data);
                const wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, ws, "Registrations");
                XLSX.writeFile(wb, "registrations.xlsx");
              }}
            >
              Ekspor Excel
            </Button>
          )}
          <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <Link href="/pendaftaran">+ Tambah Siswa</Link>
          </Button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="col-span-2">
          <div className="flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2">
            <SearchIcon
              size={16}
              className="text-gray-500 dark:text-gray-400"
            />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari nama, sekolah, telepon, rekomendasi, nisn..."
              className="w-full bg-transparent outline-none text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
              aria-label="Pencarian"
            />
          </div>
        </div>
        <div>
          <select
            value={filterGender}
            onChange={(e) => setFilterGender(e.target.value as Gender)}
            className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100"
            aria-label="Filter jenis kelamin"
          >
            <option value="">Semua Jenis Kelamin</option>
            {Object.keys(Gender).map((key) => (
              <option key={key} value={key}>
                {enumToReadable(key)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Statistik Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow flex items-center">
          <Users className="w-10 h-10 text-blue-600 dark:text-blue-400 mr-4" />
          <div>
            <p className="text-gray-600 dark:text-gray-300">Total Siswa</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {filtered.length}
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow flex items-center">
          <School className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mr-4" />
          <div>
            <p className="text-gray-600 dark:text-gray-300">Jumlah Sekolah</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {new Set(filtered.map((s) => s.sekolahAsal)).size}
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow flex items-center">
          <GraduationCap className="w-10 h-10 text-amber-500 dark:text-amber-400 mr-4" />
          <div>
            <p className="text-gray-600 dark:text-gray-300">Jenis Kelamin</p>
            <p className="text-sm text-gray-900 dark:text-gray-100">
              Laki-laki:{" "}
              {filtered.filter((s) => s.jenisKelamin === "LAKI_LAKI").length}
            </p>
            <p className="text-sm text-gray-900 dark:text-gray-100">
              Perempuan:{" "}
              {filtered.filter((s) => s.jenisKelamin === "PEREMPUAN").length}
            </p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow flex items-center">
          <TrendingUp className="w-10 h-10 text-red-600 dark:text-red-400 mr-4" />
          <div>
            <p className="text-gray-600 dark:text-gray-300">Rekomendasi</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {new Set(filtered.map((s) => s.rekomendasiDari)).size}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Cards View */}
      <div className="md:hidden space-y-4 mb-10">
        {filtered.map((siswa) => (
          <div
            key={siswa.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-4"
          >
            {/* Header Card */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-1">
                  {siswa.namaLengkap}
                </h3>
                <Badge
                  variant={
                    siswa.status === "TERDAFTAR"
                      ? "default"
                      : siswa.status === "DITERIMA"
                        ? "success"
                        : "destructive"
                  }
                >
                  {enumToReadable(siswa.status)}
                </Badge>
              </div>
            </div>

            {/* Info Grid */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-200">
                  {enumToReadable(siswa.jenisKelamin)}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <School className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-200">
                  {siswa.sekolahAsal}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <GraduationCap className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-600 dark:text-gray-200">
                  {siswa.nomorTelepon}
                </span>
              </div>
              {siswa.rekomendasiDari && (
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-200">
                    {siswa.rekomendasiDari}
                  </span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="flex-1 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white"
                    size="sm"
                  >
                    Detail
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] max-h-[90vh] dark:bg-gray-900">
                  <DialogHeader>
                    <DialogTitle className="gap-2 flex items-center flex-wrap">
                      Detail Pendaftaran Siswa
                      <Badge
                        variant={
                          siswa.status === "TERDAFTAR"
                            ? "default"
                            : siswa.status === "DITERIMA"
                              ? "success"
                              : "destructive"
                        }
                      >
                        {enumToReadable(siswa.status)}
                      </Badge>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="w-full max-h-[60vh] overflow-auto rounded-md border dark:border-gray-700 p-4">
                    <ul className="space-y-2 list-disc list-inside text-sm text-gray-900 dark:text-gray-100">
                      <li>
                        <span className="font-semibold">NISN:</span>{" "}
                        {siswa.nisn}
                      </li>
                      <li>
                        <span className="font-semibold">Nama:</span>{" "}
                        {siswa.namaLengkap}
                      </li>
                      <li>
                        <span className="font-semibold">Jenis Kelamin:</span>{" "}
                        {enumToReadable(siswa.jenisKelamin)}
                      </li>
                      <li>
                        <span className="font-semibold">Nomor Telepon:</span>{" "}
                        {siswa.nomorTelepon || "-"}
                      </li>
                      <li>
                        <span className="font-semibold">Sekolah Asal:</span>{" "}
                        {siswa.sekolahAsal}
                      </li>
                      <li>
                        <span className="font-semibold">
                          Tempat, Tanggal Lahir:
                        </span>{" "}
                        {siswa.tempatLahir}, {formattedDate(siswa.tanggalLahir)}
                      </li>
                      <li>
                        <span className="font-semibold">Alamat:</span>{" "}
                        {siswa.alamat}
                      </li>
                      <li>
                        <span className="font-semibold">Nama Ayah:</span>{" "}
                        {siswa.namaAyah}
                      </li>
                      <li>
                        <span className="font-semibold">Pekerjaan Ayah:</span>{" "}
                        {siswa.pekerjaanAyah || "-"}
                      </li>
                      <li>
                        <span className="font-semibold">Nama Ibu:</span>{" "}
                        {siswa.namaIbu}
                      </li>
                      <li>
                        <span className="font-semibold">Pekerjaan Ibu:</span>{" "}
                        {siswa.pekerjaanIbu || "-"}
                      </li>
                      <li>
                        <span className="font-semibold">Rekomendasi Dari:</span>{" "}
                        {siswa.rekomendasiDari || "-"}
                      </li>
                    </ul>
                  </div>
                </DialogContent>
              </Dialog>

              <Button
                className="text-sm font-semibold bg-amber-500 hover:bg-amber-600 text-white"
                size="sm"
                asChild
              >
                <Link href={`/dashboard/${siswa.id}/edit`}>Edit</Link>
              </Button>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    className="text-sm font-semibold bg-red-600 hover:bg-red-700 text-white"
                    size="sm"
                    disabled={isDeleting}
                  >
                    {isDeleting &&
                    deleteMutation.variables.nisn === siswa.nisn ? (
                      <LoaderCircle className="animate-spin w-4 h-4" />
                    ) : (
                      "Hapus"
                    )}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-[95vw] dark:bg-gray-900">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Yakin ingin menghapus data ini?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Tindakan ini tidak dapat dibatalkan. Ini akan menghapus
                      akun Anda secara permanen dan menghapus data Anda dari
                      server kami.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Batal</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() =>
                        deleteMutation.mutate({ nisn: siswa.nisn })
                      }
                      disabled={isDeleting}
                    >
                      {isDeleting &&
                        deleteMutation.variables.nisn === siswa.nisn && (
                          <LoaderCircle className="animate-spin" />
                        )}
                      {isDeleting &&
                      deleteMutation.variables.nisn === siswa.nisn
                        ? "Menghapus..."
                        : "Ya, Hapus"}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-8 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Tidak ada data yang cocok dengan filter/pencarian.
            </p>
          </div>
        )}
      </div>

      {/* Table siswa */}
      <div className="hidden md:block bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-x-auto mb-10">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-blue-600 dark:bg-blue-900">
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
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {filtered.map((siswa, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                  {siswa.namaLengkap}
                </td>
                <td className="px-4 py-3 text-gray-900 dark:text-gray-100">
                  {enumToReadable(siswa.jenisKelamin)}
                </td>
                <td className="px-4 py-3 text-gray-900 dark:text-gray-100">
                  {siswa.sekolahAsal}
                </td>
                <td className="px-4 py-3 text-gray-900 dark:text-gray-100">
                  {siswa.nomorTelepon}
                </td>
                <td className="px-4 py-3 text-gray-900 dark:text-gray-100">
                  {siswa.rekomendasiDari}
                </td>
                <td className="px-4 py-3 text-center">
                  <Badge
                    variant={
                      siswa.status === "TERDAFTAR"
                        ? "default"
                        : siswa.status === "DITERIMA"
                          ? "success"
                          : "destructive"
                    }
                  >
                    {enumToReadable(siswa.status)}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white">
                        Selengkapnya
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="dark:bg-gray-900">
                      <DialogHeader>
                        <DialogTitle className="gap-2 flex items-center">
                          Detail Pendaftaran Siswa
                          <Badge
                            variant={
                              siswa.status === "TERDAFTAR"
                                ? "default"
                                : siswa.status === "DITERIMA"
                                  ? "success"
                                  : "destructive"
                            }
                          >
                            {enumToReadable(siswa.status)}
                          </Badge>
                        </DialogTitle>
                      </DialogHeader>
                      <div className="w-full max-h-[60vh] overflow-auto rounded-md border dark:border-gray-700 p-4">
                        <ul className="space-y-2 list-disc list-inside text-gray-900 dark:text-gray-100">
                          <li>
                            <span className="font-semibold">NISN:</span>{" "}
                            {siswa.nisn}
                          </li>
                          <li>
                            <span className="font-semibold">Nama:</span>{" "}
                            {siswa.namaLengkap}
                          </li>
                          <li>
                            <span className="font-semibold">
                              Jenis Kelamin:
                            </span>{" "}
                            {enumToReadable(siswa.jenisKelamin)}
                          </li>
                          <li>
                            <span className="font-semibold">
                              Nomor Telepon:
                            </span>{" "}
                            {siswa.nomorTelepon || "-"}
                          </li>
                          <li>
                            <span className="font-semibold">Sekolah Asal:</span>{" "}
                            {siswa.sekolahAsal}
                          </li>
                          <li>
                            <span className="font-semibold">
                              Tempat, Tanggal Lahir:
                            </span>{" "}
                            {siswa.tempatLahir},{" "}
                            {formattedDate(siswa.tanggalLahir)}
                          </li>
                          <li>
                            <span className="font-semibold">Alamat:</span>{" "}
                            {siswa.alamat}
                          </li>
                          <li>
                            <span className="font-semibold">Nama Ayah:</span>{" "}
                            {siswa.namaAyah}
                          </li>
                          <li>
                            <span className="font-semibold">
                              Pekerjaan Ayah:
                            </span>{" "}
                            {siswa.pekerjaanAyah || "-"}
                          </li>
                          <li>
                            <span className="font-semibold">Nama Ibu:</span>{" "}
                            {siswa.namaIbu}
                          </li>
                          <li>
                            <span className="font-semibold">
                              Pekerjaan Ibu:
                            </span>{" "}
                            {siswa.pekerjaanIbu || "-"}
                          </li>
                          <li>
                            <span className="font-semibold">
                              Rekomendasi Dari:
                            </span>{" "}
                            {siswa.rekomendasiDari || "-"}
                          </li>
                        </ul>
                      </div>
                    </DialogContent>
                  </Dialog>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-center gap-2">
                    <Button
                      className="text-xs font-semibold bg-amber-500 hover:bg-amber-600 text-white"
                      asChild
                    >
                      <Link href={`/dashboard/${siswa.id}/edit`}>Edit</Link>
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          className="text-xs font-semibold bg-red-600 hover:bg-red-700 text-white"
                          disabled={isDeleting}
                        >
                          {isDeleting &&
                          deleteMutation.variables.nisn === siswa.nisn ? (
                            <LoaderCircle className="animate-spin" />
                          ) : (
                            "Hapus"
                          )}
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="dark:bg-gray-900">
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Yakin ingin menghapus data ini?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Tindakan ini tidak dapat dibatalkan. Ini akan
                            menghapus akun Anda secara permanen dan menghapus
                            data Anda dari server kami.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Batal</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() =>
                              deleteMutation.mutate({ nisn: siswa.nisn })
                            }
                            disabled={isDeleting}
                          >
                            {isDeleting &&
                              deleteMutation.variables.nisn === siswa.nisn && (
                                <LoaderCircle className="animate-spin" />
                              )}
                            {isDeleting &&
                            deleteMutation.variables.nisn === siswa.nisn
                              ? "Menghapus..."
                              : "Ya, Hapus"}
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400"
                >
                  Tidak ada data yang cocok dengan filter/pencarian.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
