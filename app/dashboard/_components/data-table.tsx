"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  VisibilityState,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import * as React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { GraduationCap, School, TrendingUp, Users } from "lucide-react";
import { Registration } from "@/lib/generated/prisma";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({
      nisn: true,
      namaLengkap: true,
      jenisKelamin: true,
      sekolahAsal: true,
      nomorTelepon: true,
      status: true,
      actions: true,
      tempatLahir: false,
      tanggalLahir: false,
      alamat: false,
      namaAyah: false,
      pekerjaanAyah: false,
      namaIbu: false,
      pekerjaanIbu: false,
      rekomendasiDari: false,
    });
  const [globalFilter, setGlobalFilter] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      globalFilter,
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  const filtered = table
    .getFilteredRowModel()
    .rows.map((row) => row.original as Registration);

  return (
    <div>
      <div>
        <div className="flex items-center py-4">
          <Input
            placeholder="Cari berdasarkan kolom apapun..."
            value={globalFilter ?? ""}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Kolom
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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
      </div>
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between px-2 mt-4">
        <div className="text-muted-foreground">
          Halaman {table.getState().pagination.pageIndex + 1} dari{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Sebelumnya
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Selanjutnya
          </Button>
        </div>
      </div>
    </div>
  );
}
