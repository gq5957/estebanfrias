import { ReactNode } from "react";

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <div className="text-xs uppercase tracking-wider text-[color:var(--muted)]">
      {children}
    </div>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[1.85rem] leading-[1.25] tracking-tight font-semibold text-[color:var(--fg)]">
      {children}
    </h2>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-[1.05rem] leading-7 text-[color:var(--muted)]">{children}</p>;
}

export function Divider() {
  return <div className="border-b hairline" />;
}
