import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-[#f4f1e8] text-[#183126]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
