import { H2, P, Divider, Kicker } from "../components/Editorial";

export default function Engagements() {
  return (
    <div className="read-max space-y-10">
      <div className="space-y-4">
        <Kicker>Strategic engagements</Kicker>
        <H2>Quiet, focused architecture and operating model work.</H2>
        <P>
          I partner with leaders to design scalable experience and operational systems inside complex environments.
          Select engagements only.
        </P>
      </div>

      <Divider />

      <div className="space-y-10">
        <Block
          title="AI workflow governance design"
          text="Human-in-the-loop operating models, prompt lifecycle architecture, rollout strategy, measurement, and sustainment."
        />
        <Block
          title="Customer experience enablement architecture"
          text="Narrative systems, modular demos, stakeholder-ready storytelling layers, and operating models that scale."
        />
        <Block
          title="Enterprise operating model development"
          text="Intake → execution → governance frameworks that improve speed, predictability, and quality across teams."
        />
      </div>

      <Divider />

      <div className="space-y-2">
        <div className="text-[color:var(--fg)] font-semibold">Availability</div>
        <P>
          If you have a complex system that needs to scale — and survive you — reach out with context, constraints, and timeline.
        </P>
      </div>
    </div>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div className="space-y-2">
      <div className="text-[color:var(--fg)] font-semibold">{title}</div>
      <div className="text-[1.05rem] leading-7 text-[color:var(--muted)]">{text}</div>
    </div>
  );
}
