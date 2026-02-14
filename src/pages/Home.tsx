import { Link } from "react-router-dom";
import { H1, H2, P, Divider, Kicker } from "../components/Editorial";

export default function Home() {
  return (
    <div className="space-y-16 sm:space-y-24">
      <section className="read-max">
        <Kicker>AI · Ops · Enablement</Kicker>
        <div className="mt-5">
          <H1>I architect scalable AI and operational systems inside complex organizations.</H1>
          <div className="mt-6">
            <P>
              I design AI workflow governance, cross-functional operating models, and customer experience enablement systems —
              built to scale and structured to operate beyond dependency.
            </P>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link to="/work" className="link text-[color:var(--accent)]">View selected work</Link>
            <Link to="/notes" className="link text-[color:var(--accent)]">Read operator notes</Link>
            <Link to="/engagements" className="link text-[color:var(--accent)]">Strategic engagements</Link>
          </div>
        </div>
      </section>

      <Divider />

      <section className="read-max space-y-10">
        <div>
          <H2>What I build</H2>
        </div>

        <div className="space-y-10">
          <div>
            <div className="text-[color:var(--fg)] font-semibold">AI workflow architecture</div>
            <P>
              Human-in-the-loop governance, prompt lifecycle design, and scalable AI infrastructure beyond experimentation.
            </P>
          </div>

          <div>
            <div className="text-[color:var(--fg)] font-semibold">Operational system design</div>
            <P>
              Intake → execution → governance frameworks that convert cross-functional complexity into repeatable performance.
            </P>
          </div>

          <div>
            <div className="text-[color:var(--fg)] font-semibold">Experience enablement</div>
            <P>
              Customer-facing environments and executive storytelling systems that translate capability into clarity.
            </P>
          </div>
        </div>
      </section>

      <Divider />

      <section className="read-max space-y-8">
        <H2>Selected work</H2>

        <div className="space-y-8">
          <Entry
            title="From AI Experimentation to Governed Workflow Infrastructure"
            deck="Designing scalable AI governance inside complex teams."
            to="/work/ai-experiments-to-governed-workflows"
          />
          <Entry
            title="Productizing a Customer Experience Center"
            deck="Turning a high-touch initiative into a measurable, scalable program."
            to="/work/productizing-customer-experience-center"
          />
          <Entry
            title="Designing an Enterprise Operating Model for Cross-Functional Execution"
            deck="Architecting alignment across delivery, communication, and governance."
            to="/work/enterprise-operating-model-cross-functional-execution"
          />
        </div>
      </section>

      <Divider />

      <section className="read-max">
        <blockquote className="border-l-2 pl-5 border-[color:var(--hairline)]">
          <div className="text-[1.2rem] leading-8 text-[color:var(--fg)]">
            I don’t build initiatives. I design systems that scale, document themselves, and operate beyond dependency.
          </div>
        </blockquote>
      </section>
    </div>
  );
}

function Entry({ title, deck, to }: { title: string; deck: string; to: string }) {
  return (
    <div className="space-y-1">
      <Link to={to} className="no-underline">
        <div className="text-[color:var(--fg)] text-[1.05rem] font-semibold hover:underline underline-offset-4 decoration-[rgba(15,30,61,0.3)]">
          {title}
        </div>
      </Link>
      <div className="text-sm text-[color:var(--muted)]">{deck}</div>
      <Link to={to} className="link text-sm text-[color:var(--accent)]">Read case study</Link>
    </div>
  );
}
