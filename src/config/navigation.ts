export interface NavigationItem {
  label: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Proyectos", href: "/projects" },
  { label: "Sobre mí", href: "/about" },
  { label: "Contacto", href: "/contact" },
];