import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import { StatistikContent } from "./_components/statistik-content";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function StatistikPage() {
  prefetch(trpc.registration.getAllRegistrations.queryOptions());

  return (
    <HydrateClient>
      <ErrorBoundary
        fallback={
          <div className="flex flex-col items-center justify-center w-full h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-red-500 mb-4"></div>
            <span className="text-lg text-red-500">
              Terjadi kesalahan. Silakan coba lagi.
            </span>
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
          <StatistikContent />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
}
