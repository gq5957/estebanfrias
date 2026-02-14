import { H2, P, Kicker, Divider } from "../components/Editorial";
import { Link } from "react-router-dom";

export default function Lab() {
  return (
    <div className="read-max space-y-10">
      <div className="space-y-4">
        <Kicker>Lab</Kicker>
        <H2>Products, experiments, and identity-forward builds.</H2>
        <P>
          A separate space for creative systems and digital products — built with the same operational discipline, different energy.
        </P>
      </div>

      <Divider />

      <div className="space-y-8">
        <Item
          title="PitchNotes™"
          text="Printable soccer tactical planning system (EN/ES)."
          hint="(Coming soon: dedicated product page)"
        />
        <Item
          title="CorporateMexican"
          text="Identity + strategy + systems — clean templates and high-signal insights."
          hint="(Content hub in progress)"
        />
        <Item
          title="Tools"
          text="Free downloads and templates that earn trust."
          hint="(We’ll add these next)"
        />
      </div>

      <Divider />

      <div className="text-sm text-[color:var(--muted)]">
        Want this separated to a subdomain later? Easy move (lab.estebanfrias.com).
        <div className="mt-2">
          <Link to="/contact" className="link text-[color:var(--accent)]">Contact</Link>
        </div>
      </div>
    </div>
  );
}

function Item({ title, text, hint }: { title: string; text: string; hint: string }) {
  return (
    <div className="space-y-1">
      <div className="text-[color:var(--fg)] font-semibold">{title}</div>
      <div className="text-[1.05rem] leading-7 text-[color:var(--muted)]">{text}</div>
      <div className="text-sm text-[color:var(--muted)]">{hint}</div>
    </div>
  );
}
