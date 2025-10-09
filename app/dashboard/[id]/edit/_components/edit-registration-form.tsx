"use client";

import { Gender, Registration } from "@/lib/generated/prisma";
import { useTRPC } from "@/trpc/client";
import { studentUpdateRegisterSchema } from "@/trpc/schemas/registration.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { CalendarIcon, LoaderCircle } from "lucide-react";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { enumToReadable } from "@/lib/string";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import Link from "next/link";

interface EditRegistrationFormProps {
  registration: Registration;
}

export function EditRegistrationForm({
  registration,
}: EditRegistrationFormProps) {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const router = useRouter();

  const form = useForm<z.infer<typeof studentUpdateRegisterSchema>>({
    resolver: zodResolver(studentUpdateRegisterSchema),
    defaultValues: {
      id: registration.id,
      nisn: registration.nisn,
      namaLengkap: registration.namaLengkap,
      sekolahAsal: registration.sekolahAsal,
      tempatLahir: registration.tempatLahir,
      alamat: registration.alamat,
      rekomendasiDari: registration.rekomendasiDari || "",
      namaAyah: registration.namaAyah,
      pekerjaanAyah: registration.pekerjaanAyah || "",
      namaIbu: registration.namaIbu,
      jenisKelamin: registration.jenisKelamin,
      tanggalLahir: registration.tanggalLahir,
      pekerjaanIbu: registration.pekerjaanIbu || "",
      nomorTelepon: registration.nomorTelepon || "",
    },
  });

  const studentUpdateRegisterMutationOptions =
    trpc.registration.updateRegistration.mutationOptions({
      onSuccess: (data) => {
        queryClient.invalidateQueries({
          queryKey: trpc.registration.pathKey(),
        });
        form.reset();
        toast.success(data.message);
        router.push("/dashboard");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  const studentUpdateRegisterMutation = useMutation(
    studentUpdateRegisterMutationOptions,
  );

  async function onSubmit(values: z.infer<typeof studentUpdateRegisterSchema>) {
    studentUpdateRegisterMutation.mutate(values);
  }

  const isLoading =
    studentUpdateRegisterMutation.isPending || form.formState.isSubmitting;

  return (
    <div className="w-full p-6 md:p-8 bg-neutral-50 dark:bg-neutral-800">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Data Siswa */}
          <section aria-labelledby="bagian-data-siswa" className="space-y-4">
            <h3 id="bagian-data-siswa" className="text-lg font-semibold">
              Data Siswa
            </h3>

            <FormField
              control={form.control}
              name="nisn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>NISN</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan NISN" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="namaLengkap"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan nama lengkap" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="jenisKelamin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Jenis Kelamin</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih jenis kelamin" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.keys(Gender).map((key) => (
                          <SelectItem key={key} value={key}>
                            {enumToReadable(key)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sekolahAsal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sekolah Asal</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan sekolah asal" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="tempatLahir"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tempat Lahir</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan tempat lahir" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tanggalLahir"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Tanggal Lahir</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl className="w-full">
                          <Button
                            variant={"outline"}
                            className={cn(
                              "pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP", {
                                locale: id,
                              })
                            ) : (
                              <span>Pilih tanggal lahir</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          locale={id}
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="alamat"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="Masukkan alamat lengkap" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nomorTelepon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor Telepon / Handphone</FormLabel>
                  <FormControl>
                    <Input placeholder="08xxxxxxxxxx" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>

          {/* Data Orang Tua */}
          <section aria-labelledby="bagian-orang-tua" className="space-y-4">
            <h3 id="bagian-orang-tua" className="text-lg font-semibold">
              Data Orang Tua
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="namaAyah"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Ayah</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan nama ayah" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pekerjaanAyah"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pekerjaan Ayah</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan pekerjaan ayah" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="namaIbu"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Ibu</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan nama ibu" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pekerjaanIbu"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pekerjaan Ibu</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan pekerjaan ibu" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="rekomendasiDari"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rekomendasi Masuk Dari</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Contoh: sosmed, website, nama orang"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-2">
            <Button type="button" disabled={isLoading} asChild>
              <Link href="/dashboard">Batal</Link>
            </Button>
            <Button type="submit" variant="cta" disabled={isLoading}>
              {isLoading && <LoaderCircle className="animate-spin" />}
              {isLoading ? "Menyimpan..." : "Simpan Perubahan"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
