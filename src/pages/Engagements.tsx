import { Kicker, H2, P } from "../components/Editorial";

export default function Engagements() {
  return (
    <div className="read-max space-y-10">
      <div className="space-y-4">
        <Kicker>Engagements</Kicker>
        <H2>Strategic architecture engagements, scoped for leverage.</H2>
        <P>
          I take on select advisory and build-to-operate work: governance, operating models, enablement systems,
          and executive experience architecture.
        </P>
      </div>

      <div className="space-y-6 text-[color:var(--muted)] leading-7">
        <div>
          <div className="text-[color:var(--fg)] font-semibold">Operating model design</div>
          Cadence, decision rights, artifacts, and accountability systems that improve execution velocity.
        </div>
        <div>
          <div className="text-[color:var(--fg)] font-semibold">AI governance & workflow design</div>
          Human-in-the-loop patterns, escalation pathways, risk tiers, and measurement frameworks.
        </div>
        <div>
          <div className="text-[color:var(--fg)] font-semibold">Enablement systems</div>
          Repeatable narratives, modular assets, and internal customer experiences that scale without heroics.
        </div>
      </div>
    </div>
  );
}
