"use client";

import { Badge } from "@/components/ui/badge";
import { Registration } from "@/lib/generated/prisma";
import { enumToReadable } from "@/lib/string";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Loader2, MoreHorizontal, Pen, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { DeleteAlertDialog } from "./alert-dialog-delete";
import { useState } from "react";

export const columns: ColumnDef<Registration>[] = [
  {
    accessorKey: "nisn",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          NISN
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "namaLengkap",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama Lengkap
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "jenisKelamin",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Jenis Kelamin
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const jenisKelamin = row.original.jenisKelamin;

      return (
        <div>{jenisKelamin === "LAKI_LAKI" ? "Laki-Laki" : "Perempuan"}</div>
      );
    },
  },
  {
    accessorKey: "sekolahAsal",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Sekolah Asal
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "nomorTelepon",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          No. Telepon
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const nomorTelepon = row.original.nomorTelepon;
      return <div>{nomorTelepon ? nomorTelepon : "-"}</div>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.original.status;

      return (
        <Badge
          variant={
            status === "TERDAFTAR"
              ? "default"
              : status === "DITERIMA"
                ? "success"
                : "destructive"
          }
        >
          {enumToReadable(status)}
        </Badge>
      );
    },
  },
  {
    accessorKey: "tempatLahir",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tempat Lahir
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "tanggalLahir",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tanggal Lahir
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "alamat",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Alamat
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "namaAyah",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama Ayah
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "pekerjaanAyah",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Pekerjaan Ayah
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const pekerjaanAyah = row.original.pekerjaanAyah;
      return <div>{pekerjaanAyah ? pekerjaanAyah : "-"}</div>;
    },
  },
  {
    accessorKey: "namaIbu",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama Ibu
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "pekerjaanIbu",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Pekerjaan Ibu
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const pekerjaanIbu = row.original.pekerjaanIbu;
      return <div>{pekerjaanIbu ? pekerjaanIbu : "-"}</div>;
    },
  },
  {
    accessorKey: "rekomendasiDari",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Rekomendasi Dari
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const rekomendasiDari = row.original.rekomendasiDari;
      return <div>{rekomendasiDari ? rekomendasiDari : "-"}</div>;
    },
  },
  {
    id: "actions",
    header: "Aksi",
    cell: function ActionsComponent({ row }) {
      const { id } = row.original;
      const router = useRouter();
      const [isLoading, setIsLoading] = useState(false);
      const [confirmDelete, setConfirmDelete] = useState(false);

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-8 w-8 p-0"
                disabled={isLoading}
              >
                <span className="sr-only">Open menu</span>
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <MoreHorizontal className="h-4 w-4" />
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onSelect={() => router.push(`/dashboard/${id}/edit`)}
              >
                <Pen />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                variant="destructive"
                onSelect={() => setConfirmDelete(true)}
              >
                <Trash />
                Hapus
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DeleteAlertDialog
            open={confirmDelete}
            registrationId={id}
            setIsLoading={setIsLoading}
            setOpen={setConfirmDelete}
          />
        </>
      );
    },
  },
];
