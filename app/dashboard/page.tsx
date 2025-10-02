import { HydrateClient, prefetch, trpc } from "@/trpc/server"
import { RegistrationContent } from "./_components/registration-content"
import { ErrorBoundary } from "react-error-boundary"
import { Suspense } from "react"

export const dynamic = "force-dynamic";

export default function DashboardSiswa() {
    prefetch(trpc.registration.getAllRegistrations.queryOptions())

    return (
        <HydrateClient>
            <ErrorBoundary fallback={<div>Something went wrong</div>}>
                <Suspense fallback={<div>Loading...</div>}>
                    <RegistrationContent />
                </Suspense>
            </ErrorBoundary>
        </HydrateClient>
    )
}
