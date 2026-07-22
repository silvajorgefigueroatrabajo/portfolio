import { Link, NavLink } from "react-router-dom";
import Container from "@/components/ui/Container";
import { navigationItems } from "@/config/navigation";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link
          to="/"
          className="text-sm font-semibold tracking-wide text-zinc-100"
        >
          Jorge Silva
        </Link>

        <nav aria-label="Navegación principal">
          <ul className="flex items-center gap-6">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    [
                      "text-sm transition-colors",
                      isActive
                        ? "text-cyan-400"
                        : "text-zinc-400 hover:text-zinc-100",
                    ].join(" ")
                  }
                >
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