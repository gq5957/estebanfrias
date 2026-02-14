import { ReactNode } from "react";

export function H1({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-[2.6rem] leading-[1.06] tracking-tight sm:text-[3.2rem]">
      {children}
    </h1>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[1.6rem] leading-[1.2] tracking-tight sm:text-[1.9rem]">
      {children}
    </h2>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-[1.05rem] leading-7 text-[color:var(--muted)]">{children}</p>;
}

export function Divider() {
  return <div className="my-12 sm:my-16 border-b hairline" />;
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <div className="text-xs tracking-[0.18em] uppercase text-[color:var(--muted)]">
      {children}
    </div>
  );
}

export function TextLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <a href={to} className="link text-[color:var(--accent)]">
      {children}
    </a>
  );
}
