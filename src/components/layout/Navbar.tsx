import { Link, NavLink } from "react-router-dom";
import Container from "@/components/ui/Container";
import { navigationItems } from "@/config/navigation";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#183126]/10 bg-[#f4f1e8]/90 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="display flex items-center gap-3 font-extrabold tracking-[-0.03em]">
          <span className="leaf-mark h-7 w-7 bg-[#2f7d50]" aria-hidden="true" />
          Jorge Silva
        </Link>
        <nav aria-label="Navegación principal">
          <ul className="flex items-center gap-3 sm:gap-7">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <NavLink to={item.href} className={({ isActive }) => `text-xs font-semibold transition sm:text-sm ${isActive ? "text-[#246b45]" : "text-[#52665c] hover:text-[#183126]"}`}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
