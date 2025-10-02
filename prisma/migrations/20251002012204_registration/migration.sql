-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('TERDAFTAR', 'DITERIMA', 'DITOLAK');

-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('LAKI_LAKI', 'PEREMPUAN');

-- CreateTable
CREATE TABLE "public"."Registration" (
    "id" TEXT NOT NULL,
    "namaLengkap" TEXT NOT NULL,
    "jenisKelamin" "public"."Gender" NOT NULL,
    "nomorTelepon" TEXT NOT NULL,
    "status" "public"."Status" NOT NULL DEFAULT 'TERDAFTAR',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);
