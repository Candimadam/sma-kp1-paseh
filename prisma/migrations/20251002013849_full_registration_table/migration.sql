/*
  Warnings:

  - Added the required column `alamat` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `namaAyah` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `namaIbu` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sekolahAsal` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggalLahir` to the `Registration` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tempatLahir` to the `Registration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Registration" ADD COLUMN     "alamat" TEXT NOT NULL,
ADD COLUMN     "namaAyah" TEXT NOT NULL,
ADD COLUMN     "namaIbu" TEXT NOT NULL,
ADD COLUMN     "pekerjaanAyah" TEXT,
ADD COLUMN     "pekerjaanIbu" TEXT,
ADD COLUMN     "rekomendasiDari" TEXT,
ADD COLUMN     "sekolahAsal" TEXT NOT NULL,
ADD COLUMN     "tanggalLahir" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "tempatLahir" TEXT NOT NULL,
ALTER COLUMN "nomorTelepon" DROP NOT NULL;
