import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import { StatistikContent } from "./_components/statistik-content";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function StatistikPage() {
  prefetch(trpc.registration.getAllRegistrations.queryOptions());

  return (
    <HydrateClient>
      <ErrorBoundary fallback={<div>error</div>}>
        <Suspense fallback={<div>loading...</div>}>
          <StatistikContent />
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  );
}
