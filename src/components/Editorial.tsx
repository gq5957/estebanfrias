import { ReactNode } from "react";

export function H1({ children }: { children: ReactNode }) {
  return <h1 className="text-[3rem] leading-tight tracking-tight">{children}</h1>;
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-[1.8rem] leading-tight tracking-tight">{children}</h2>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-[1.05rem] leading-7 text-[color:var(--muted)]">{children}</p>;
}

export function Divider() {
  return <div className="my-16 border-b border-[color:var(--hairline)]" />;
}

export function Kicker({ children }: { children: ReactNode }) {
  return <div className="text-xs tracking-widest uppercase text-[color:var(--muted)]">{children}</div>;
}
