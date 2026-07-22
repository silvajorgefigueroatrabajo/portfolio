import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />

      <main>{children}</main>
    </div>
  );
}