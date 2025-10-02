"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Gender } from "@/lib/generated/prisma"
import { studentRegisterSchema } from "@/trpc/schemas/registration.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CalendarIcon, LoaderCircle } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { id } from "date-fns/locale"
import { enumToReadable } from "@/lib/string"
import { useTRPC } from "@/trpc/client"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export function RegistrationForm() {
    const trpc = useTRPC();
    const queryClient = useQueryClient();

    const form = useForm<z.infer<typeof studentRegisterSchema>>({
        resolver: zodResolver(studentRegisterSchema),
        defaultValues: {
            nisn: "",
            namaLengkap: "",
            sekolahAsal: "",
            tempatLahir: "",
            alamat: "",
            rekomendasiDari: "",
            namaAyah: "",
            pekerjaanAyah: "",
            namaIbu: "",
            pekerjaanIbu: "",
            nomorTelepon: "",
        }
    })

    const studentRegisterMutationOptions = trpc.registration.createRegistration.mutationOptions({
        onSuccess: (data) => {
            toast.success(data.message)
            form.reset()
            queryClient.invalidateQueries({ queryKey: [trpc.registration.getAllRegistrationsPublic.queryKey(), trpc.registration.getAllRegistrations.queryKey()] })
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })
    const studentRegisterMutation = useMutation(studentRegisterMutationOptions)

    async function onSubmit(values: z.infer<typeof studentRegisterSchema>) {
        studentRegisterMutation.mutate(values)
    }

    const isLoading = studentRegisterMutation.isPending || form.formState.isSubmitting

    return (
        <div className="w-full max-w-3xl rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm p-6 md:p-8">
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
                                    <FormLabel>
                                        Nama Lengkap
                                    </FormLabel>
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
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                                        <FormLabel>
                                            Tanggal Lahir
                                        </FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl className="w-full">
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "pl-3 text-left font-normal",
                                                            !field.value && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP", {
                                                                locale: id
                                                            })
                                                        ) : (
                                                            <span>
                                                                Pilih tanggal lahir
                                                            </span>
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
                                        <Input placeholder="Contoh: sosmed, website, nama orang" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </section>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-2">
                        <Button type="button" onClick={() => form.reset()} className="bg-red-600 hover:bg-red-700 text-white" disabled={isLoading}>
                            Reset
                        </Button>
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white" disabled={isLoading}>
                            {isLoading && <LoaderCircle className="animate-spin" />}
                            {isLoading ? "Mendaftar..." : "Daftar"}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}