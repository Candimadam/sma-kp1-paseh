"use client";

import { Navbar01 } from "@/components/ui/shadcn-io/navbar-01";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="relative w-full">
      <Navbar01
        logo={
          <Image
            src="/halaman-utama/logo-sekolah.png"
            alt="Logo SMA KP 1 PASEH"
            className="h-8 w-8 rounded-lg object-cover"
            width={32}
            height={32}
          />
        }
        logoHref="/"
        navigationLinks={[
          {
            label: "Pendaftaran",
            href: "/pendaftaran",
            active: isActive("/pendaftaran"),
          },
          {
            label: "Lihat Status Pendaftaran",
            href: "/status-pendaftaran",
            active: isActive("/status-pendaftaran"),
          },
        ]}
      />
    </div>
  );
}
