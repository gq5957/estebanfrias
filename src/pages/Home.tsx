import { Link } from "react-router-dom";
import { H1, H2, P, Divider, Kicker } from "../components/Editorial";

export default function Home() {
  return (
    <div className="space-y-20 sm:space-y-28">

      <section className="read-max">
        <Kicker>AI · Ops · Enablement</Kicker>

        <div className="mt-6 space-y-6">
          <H1>
            Most organizations pilot initiatives. <br />
            I design the system that lets them scale.
          </H1>

          <P>
            I architect scalable AI and operational systems inside complex organizations — 
            particularly in uncharted environments where structure doesn’t yet exist.
          </P>

          <P>
            I’m drawn to the unknown: ambiguous mandates, undefined operating models, 
            early-stage AI programs, and experience environments that haven’t been built before.
            That’s where systems thinking matters most.
          </P>

          <P>
            AI workflow governance, cross-functional operating models, and experience 
            enablement — built to scale and structured to operate beyond dependency.
          </P>

          <div className="pt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <Link to="/work" className="link text-[color:var(--accent)]">
              View selected work
            </Link>
            <Link to="/notes" className="link text-[color:var(--accent)]">
              Read operator notes
            </Link>
            <Link to="/engagements" className="link text-[color:var(--accent)]">
              Strategic engagements
            </Link>
          </div>
        </div>
      </section>

      <Divider />

      <section className="read-max space-y-12">
        <div>
          <H2>What I build</H2>
        </div>

        <div className="space-y-12">
          <div>
            <div className="text-[color:var(--fg)] font-semibold">
              AI workflow architecture
            </div>
            <P>
              Human-in-the-loop governance, prompt lifecycle design, and 
              scalable AI infrastructure beyond experimentation.
            </P>
          </div>

          <div>
            <div className="text-[color:var(--fg)] font-semibold">
              Operational system design
            </div>
            <P>
              Intake → execution → governance frameworks that convert 
              cross-functional complexity into repeatable performance.
            </P>
          </div>

          <div>
            <div className="text-[color:var(--fg)] font-semibold">
              Experience enablement
            </div>
            <P>
              Customer-facing environments and executive storytelling 
              systems that translate technical capability into clarity.
            </P>
          </div>
        </div>
      </section>

      <Divider />

      <section className="read-max space-y-10">
        <H2>Selected work</H2>

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
      </section>

      <Divider />

      <section className="read-max">
        <blockquote className="border-l-2 pl-6 border-[color:var(--hairline)] space-y-4">
          <div className="text-[1.25rem] leading-9 text-[color:var(--fg)]">
            Initiatives don’t scale. Systems do.
          </div>
          <div className="text-[1.05rem] leading-7 text-[color:var(--muted)]">
            I design the operating architecture that allows AI, experience,
            and cross-functional work to endure complexity — and survive 
            individual dependency.
          </div>
        </blockquote>
      </section>

    </div>
  );
}

function Entry({ title, deck, to }: { title: string; deck: string; to: string }) {
  return (
    <div className="space-y-2">
      <Link to={to} className="no-underline">
        <div className="text-[color:var(--fg)] text-[1.08rem] font-semibold hover:underline underline-offset-4 decoration-[rgba(15,30,61,0.3)]">
          {title}
        </div>
      </Link>
      <div className="text-sm text-[color:var(--muted)]">{deck}</div>
      <Link to={to} className="link text-sm text-[color:var(--accent)]">
        Read case study
      </Link>
    </div>
  );
}
