import { Kicker, H2, P } from "../components/Editorial";

export default function Contact() {
  return (
    <div className="read-max space-y-10">
      <div className="space-y-4">
        <Kicker>Contact</Kicker>
        <H2>Direct, minimal, intentional.</H2>
        <P>
          If reaching out, include context, constraints, and timeline.
        </P>
      </div>

      <div className="space-y-2">
        <div className="text-sm text-[color:var(--muted)]">Email</div>
        <a className="link text-[color:var(--accent)]" href="mailto:hello@estebanfrias.com">
          hello@estebanfrias.com
        </a>
      </div>
    </div>
  );
}
