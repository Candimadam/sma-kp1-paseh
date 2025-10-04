import { RegistrationTableDisplay } from "./_components/registration-table-display"
import { RegistrationForm } from "./_components/registration-form"
import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const dynamic = "force-dynamic";

export default function PendaftaranSiswa() {
    prefetch(trpc.registration.getAllRegistrationsPublic.queryOptions());

    return (
        <div className="flex flex-col items-center p-4 bg-neutral-50 dark:bg-neutral-900">
            {/* Header */}
            <header className="w-full max-w-3xl text-center mb-6">
                <h2 className="text-balance text-3xl font-semibold text-blue-600 dark:text-yellow-400">
                    Pendaftaran Siswa Baru
                </h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Tahun Ajaran 2026/2027</p>
            </header>

            <RegistrationForm />
            <HydrateClient>
                <ErrorBoundary
                    fallback={
                        <div className="flex flex-col items-center justify-center w-full h-[60vh]">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-red-500 mb-4"></div>
                            <span className="text-lg text-red-500">Terjadi kesalahan. Silakan coba lagi.</span>
                        </div>
                    }
                >
                    <Suspense
                        fallback={
                            <div className="flex flex-col items-center justify-center w-full h-[60vh]">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mb-4"></div>
                                <span className="text-lg text-blue-500">Memuat data...</span>
                            </div>
                        }
                    >
                        <RegistrationTableDisplay />
                    </Suspense>
                </ErrorBoundary>
            </HydrateClient >
        </div>
    )
}
