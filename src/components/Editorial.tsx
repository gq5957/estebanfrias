import { ReactNode } from "react";

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <div className="text-xs uppercase tracking-[0.14em] text-[color:var(--muted)]">
      {children}
    </div>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[1.95rem] sm:text-[2.2rem] leading-[1.2] tracking-tight font-semibold text-[color:var(--fg)]">
      {children}
    </h2>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-[1.06rem] sm:text-[1.12rem] leading-[1.75] text-[color:var(--muted)]">
      {children}
    </p>
  );
}

export function Divider() {
  return <div className="border-b hairline" />;
}