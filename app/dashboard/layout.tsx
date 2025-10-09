import { Button } from "@/components/ui/button";
import { SidebarDesktop } from "./_components/sidebar-dekstop";
import { MobileTopbar } from "./_components/mobile-topbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarDesktop />
      <MobileTopbar />
      <div className="flex-1 border overflow-auto">{children}</div>
    </div>
  );
}
