import { ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { to: "/work", label: "Work" },
  { to: "/notes", label: "Notes" },
  { to: "/engagements", label: "Engagements" },
  { to: "/lab", label: "Lab" },
  { to: "/contact", label: "Contact" },
];

function Nav() {
  return (
    <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            [
              "no-underline transition-colors duration-200",
              isActive
                ? "text-[color:var(--fg)] underline underline-offset-4 decoration-[rgba(15,30,61,0.45)] pointer-events-none"
                : "text-[color:var(--muted)] hover:text-[color:var(--fg)]",
            ].join(" ")
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen">
      <header className="container-max pt-8 sm:pt-10">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="no-underline">
            <div className="text-sm tracking-wide text-[color:var(--muted)]">
              Esteban Frias
            </div>
          </Link>
          <Nav />
        </div>
        <div className="mt-6 border-b hairline" />
      </header>

      <main className={["container-max", isHome ? "pb-24" : "pb-28", "pt-12 sm:pt-16"].join(" ")}>
        {children}
      </main>

      <footer className="container-max pb-10">
        <div className="border-t hairline pt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-[color:var(--muted)]">© {new Date().getFullYear()} Esteban Frias</div>
          <div className="text-sm text-[color:var(--muted)]">Not indexed · Shared intentionally</div>
        </div>
      </footer>
    </div>
  );
}
