import { Link } from "react-router-dom";
import { H2, P, Kicker, Divider } from "../components/Editorial";

export default function Brief() {
  return (
    <div className="read-max space-y-10">
      <div className="space-y-4">
        <Kicker>Executive brief</Kicker>
        <h1 className="text-[2rem] leading-[1.15] tracking-tight sm:text-[2.4rem]">
          Esteban Frias
        </h1>
        <P>
          I design scalable AI workflow governance, enterprise operating models, and customer experience enablement systems —
          especially in ambiguous environments where structure doesn’t yet exist.
        </P>
      </div>

      <Divider />

      <section className="space-y-6">
        <H2>What I do</H2>
        <div className="space-y-6">
          <Block
            title="AI workflow governance & operating systems"
            text="Human-in-the-loop design, prompt lifecycle patterns, governance rituals, and measurement frameworks that scale beyond pilots."
          />
          <Block
            title="Operational system design"
            text="Intake → execution → governance architectures that reduce ambiguity, increase predictability, and survive organizational change."
          />
          <Block
            title="Experience enablement"
            text="Customer-facing environments and executive narrative systems that translate technical capability into clarity and momentum."
          />
        </div>
      </section>

      <Divider />

      <section className="space-y-6">
        <H2>How I work</H2>
        <div className="space-y-3 text-[color:var(--muted)] leading-7">
          <p>• I’m drawn to uncharted mandates — and I turn them into architecture.</p>
          <p>• I build systems that scale, document themselves, and operate beyond dependency.</p>
          <p>• I keep the signal high: clear artifacts, measurable feedback loops, and operating clarity.</p>
        </div>
      </section>

      <Divider />

      <section className="space-y-4">
        <H2>Availability</H2>
        <P>
          Open to enterprise leadership roles and select strategic architecture engagements.
          If reaching out, include context, constraints, and timeline.
        </P>

        <div className="space-y-2">
          <div className="text-[color:var(--fg)] font-semibold">Email</div>
          <a className="link text-[color:var(--accent)]" href="mailto:hello@estebanfrias.com">
            hello@estebanfrias.com
          </a>
        </div>

        <div className="pt-2">
          <Link to="/" className="link text-[color:var(--accent)]">
            ← Back home
          </Link>
        </div>
      </section>
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