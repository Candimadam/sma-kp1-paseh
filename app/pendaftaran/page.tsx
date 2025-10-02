import { RegistrationTableDisplay } from "./_components/registration-table-display"
import { RegistrationForm } from "./_components/registration-form"
import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function PendaftaranSiswa() {
    prefetch(trpc.registration.getAllRegistrationsPublic.queryOptions());

    return (
        <div className="flex flex-col items-center p-4">
            {/* Header */}
            <header className="w-full max-w-3xl text-center mb-6">
                <h2 className="text-balance text-3xl font-semibold text-blue-600 dark:text-yellow-400">
                    Pendaftaran Siswa Baru
                </h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">Tahun Ajaran 2026/2027</p>
            </header>

            <RegistrationForm />
            <HydrateClient>
                <ErrorBoundary fallback={<div>Something went wrong</div>}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <RegistrationTableDisplay />
                    </Suspense>
                </ErrorBoundary>
            </HydrateClient >
        </div>
    )
}
