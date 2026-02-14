import { H2, P, Kicker, Divider } from "../components/Editorial";

export default function Contact() {
  return (
    <div className="read-max space-y-10">
      <div className="space-y-4">
        <Kicker>Contact</Kicker>
        <H2>Share context. I’ll respond quickly.</H2>
        <P>
          If you’re building AI workflow infrastructure, operational systems, or experience enablement — send the goal, constraints, and timeline.
        </P>
      </div>

      <Divider />

      <div className="space-y-4">
        <div>
          <div className="text-[color:var(--fg)] font-semibold">Email</div>
          <a className="link text-[color:var(--accent)]" href="mailto:hello@estebanfrias.com">hello@estebanfrias.com</a>
        </div>

        <div>
          <div className="text-[color:var(--fg)] font-semibold">LinkedIn</div>
          <a className="link text-[color:var(--accent)]" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            linkedin.com/in/esteban-frias
          </a>
        </div>

        <div className="text-sm text-[color:var(--muted)]">
          Private operator hub (/ops) can be added with password gating when you’re ready.
        </div>
      </div>
    </div>
  );
}
