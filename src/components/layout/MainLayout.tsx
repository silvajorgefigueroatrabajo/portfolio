import type { ReactNode } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return <div className="flex min-h-screen flex-col overflow-hidden bg-zinc-950 text-zinc-100"><Navbar /><main className="flex-1">{children}</main><Footer /></div>;
}
