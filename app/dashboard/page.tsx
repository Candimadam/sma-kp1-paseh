"use client"

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    const router = useRouter();
    const {
        data: session,
    } = authClient.useSession()

    return (
        <div className="min-h-screen">
            <h1 className="text-2xl font-bold">Admin Page</h1>
            <p>This is the admin page content.</p>
            {JSON.stringify(session, null, 2)}
            {session && (
                <Button onClick={async () => {
                    await authClient.signOut({
                        fetchOptions: {
                            onSuccess: () => {
                                router.push("/");
                            },
                        },
                    });
                }}>
                    Keluar
                </Button>
            )}
        </div>
    );
}