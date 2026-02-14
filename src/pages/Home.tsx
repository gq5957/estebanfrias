import { Link } from "react-router-dom";
import { P, Kicker, Divider } from "../components/Editorial";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Esteban Frias — AI Governance & Enterprise Operating Systems"
        canonicalPath="/"
        description="Enterprise AI governance, operating model architecture, and scalable execution systems. Designed for complexity."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Esteban Frias",
          url: "https://www.estebanfrias.com",
          jobTitle: "Enterprise AI Governance & Operating Systems Architect",
          description:
            "Designs scalable AI governance, enterprise operating models, and cross-functional execution systems.",
        }}
      />

      <div className="read-max space-y-20">

        {/* HERO */}
        <div className="space-y-8">

          <Kicker>AI · Systems · Governance</Kicker>

          <h1 className="text-[2.2rem] leading-[1.06] tracking-tight sm:text-[2.9rem] font-semibold text-[color:var(--fg)]">
            Most organizations pilot AI.
            <br />
            Very few build the system that lets it scale.
          </h1>

          <div className="space-y-6 max-w-[46rem]">

            <P>
              The model is rarely the problem.
              The operating model usually is.
            </P>

            <P>
              AI governance, ownership design, cross-functional clarity — these aren’t
              add-ons. They are architecture.
            </P>

            <P>
              I design the structures that turn uncertain mandates into scalable
              execution systems.
            </P>

            <div className="text-sm tracking-wide text-[color:var(--muted)]">
              Uncertainty → Structure → Operating Model → Institutionalized Execution
            </div>

          </div>
        </div>

        <Divider />

        {/* PRIMARY CTA */}
        <div className="space-y-6">

          <Link
            to="/notes/why-ai-programs-fail-after-the-pilot"
            className="group inline-flex items-center gap-2 no-underline"
          >
            <span
              className="
                text-[color:var(--fg)]
                font-semibold
                transition-colors duration-200
                group-hover:text-[color:var(--accent)]
                group-hover:underline underline-offset-4
                decoration-[rgba(15,30,61,0.45)]
              "
            >
              Why most AI programs fail after the pilot
            </span>

            <span
              className="
                text-[color:var(--muted)]
                font-light
                opacity-0
                transition duration-200 delay-75
                group-hover:opacity-100
                group-hover:translate-x-1
              "
              aria-hidden="true"
            >
              →
            </span>
          </Link>

          <div className="text-sm text-[color:var(--muted)] max-w-[34rem] leading-6">
            A short operator note on governance gaps, ownership design, and why most AI initiatives stall after early momentum.
          </div>

        </div>

        <Divider />

        {/* SECONDARY PATHS */}
        <div className="space-y-4">

          <div className="text-xs tracking-widest text-[color:var(--muted)] uppercase">
            Explore
          </div>

          <div className="flex flex-col gap-3 text-[1.02rem]">

            <Link to="/work" className="link">
              Selected work
            </Link>

            <Link to="/notes" className="link">
              Operator notes
            </Link>

            <Link to="/brief" className="link">
              Executive brief
            </Link>

          </div>

        </div>

      </div>
    </>
  );
}