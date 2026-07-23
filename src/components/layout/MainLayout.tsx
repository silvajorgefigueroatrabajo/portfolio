import type { ReactNode } from "react";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <Navbar />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}