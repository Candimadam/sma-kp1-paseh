"use client"

import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function SidebarDesktop() {
    const router = useRouter();
    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname === path;
    }

    return (
        <aside className="hidden md:flex w-64 bg-neutral-50 dark:bg-neutral-900 shadow-lg dark:shadow-gray-800 p-6 flex-col justify-between">
            <div>
                <h2 className="text-2xl font-bold text-blue-500 dark:text-yellow-300 mb-8">
                    Dashboard
                </h2>
                <nav className="space-y-4">
                    <Link
                        href="/dashboard"
                        className={cn(
                            "block text-gray-700 dark:text-gray-200 font-medium hover:text-blue-500 dark:hover:text-yellow-400 cursor-pointer",
                            isActive("/dashboard") && "text-blue-500 dark:text-yellow-300"
                        )}
                    >
                        Data Siswa
                    </Link>
                    <Link
                        href="/dashboard/statistik"
                        className={cn(
                            "block text-gray-700 dark:text-gray-200 font-medium hover:text-blue-500 dark:hover:text-yellow-400 cursor-pointer",
                            isActive("/dashboard/statistik") && "text-blue-500 dark:text-yellow-300"
                        )}
                    >
                        Statistik
                    </Link>
                </nav>
            </div>
            <div className="mt-10">
                <Button
                    className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold dark:bg-red-700 dark:hover:bg-red-800"
                    onClick={async () => {
                        await authClient.signOut({
                            fetchOptions: {
                                onSuccess: () => {
                                    router.push("/login");
                                },
                            },
                        });
                    }}
                >
                    <LogOut className="w-4 h-4" />
                    Keluar
                </Button>
            </div>
        </aside>
    )
}