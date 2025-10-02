"use client"

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export function MobileTopbar() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)
    const router = useRouter();
    const pathname = usePathname();
    const isActive = (path: string) => {
        return pathname === path;
    }

    return (
        <div className="md:hidden fixed inset-x-0 top-0 z-20 bg-white border-b border-gray-200">
            <div className="flex items-center justify-between px-4 py-3">
                <h2 className="text-lg font-semibold text-blue-600">Dashboard</h2>
                <button
                    aria-label={mobileNavOpen ? "Tutup menu" : "Buka menu"}
                    onClick={() => setMobileNavOpen((s) => !s)}
                    className="p-2 rounded-md border border-gray-200"
                >
                    {mobileNavOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>
            {mobileNavOpen && (
                <nav className="px-4 pb-3 space-y-2">
                    <Link href="/dashboard" className={cn("block px-3 py-2 rounded-md hover:bg-gray-50", isActive("/dashboard") && "bg-gray-100 font-medium")}>
                        Data Siswa
                    </Link>
                    <Link href="/dashboard/statistik" className={cn("block px-3 py-2 rounded-md hover:bg-gray-50", isActive("/dashboard/statistik") && "bg-gray-100 font-medium")}>
                        Statistik
                    </Link>
                    <Button
                        className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white"
                        onClick={async () => {
                            await authClient.signOut({
                                fetchOptions: {
                                    onSuccess: () => {
                                        router.push("/login"); // redirect to login page
                                    },
                                },
                            });
                        }}
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        Keluar
                    </Button>
                </nav>
            )}
        </div>
    )
}