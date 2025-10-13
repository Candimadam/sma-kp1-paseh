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
import { DataTable } from "./data-table";
import { columns } from "./columns";

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

      {/* Table siswa */}
      <DataTable columns={columns} data={data} />
    </main>
  );
}
