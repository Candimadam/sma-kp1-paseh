import { Gender } from "@/lib/generated/prisma";
import z from "zod";

export const studentRegisterSchema = z.object({
  nisn: z.string().regex(/^\d{10}$/, "NISN harus berupa 10 digit angka"),
  namaLengkap: z.string().min(1, "Nama lengkap harus diisi"),
  jenisKelamin: z.enum(Gender, "Jenis kelamin tidak valid"),
  nomorTelepon: z
    .string()
    .regex(/^(?:\+62|62|0)8[1-9][0-9]{6,10}$/, "Nomor HP tidak valid")
    .optional(),
  sekolahAsal: z.string().min(1, "Sekolah asal harus diisi"),
  tempatLahir: z.string().min(1, "Tempat lahir harus diisi"),
  tanggalLahir: z.date("Tanggal lahir harus diisi"),
  alamat: z.string().min(1, "Alamat harus diisi"),
  namaAyah: z.string().min(1, "Nama ayah harus diisi"),
  pekerjaanAyah: z.string().optional(),
  namaIbu: z.string().min(1, "Nama ibu harus diisi"),
  pekerjaanIbu: z.string().optional(),
  rekomendasiDari: z.string().optional(),
});

export const studentUpdateRegisterSchema = studentRegisterSchema
  .partial()
  .extend({
    id: z.cuid(),
  });
