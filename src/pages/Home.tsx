import { Link } from "react-router-dom";
import { H1, P, Kicker, Divider } from "../components/Editorial";

export default function Home() {
  return (
    <div className="read-max space-y-16">
      
      {/* HERO */}
      <div className="space-y-8">
        <Kicker>AI · Systems · Enablement</Kicker>

        <H1>
          Most organizations pilot initiatives.
          <br />
          I design the system that lets them scale.
        </H1>

        <div className="space-y-6 max-w-[46rem]">
          <P>
            I architect scalable AI workflow governance, enterprise operating models, and customer
            experience enablement systems — often where structure does not yet exist.
          </P>

          <P>
            I’m drawn to uncharted environments: ambiguous mandates, undefined operating models,
            early-stage AI programs, and experience systems that haven’t been built before.
            My role is not to explore chaos. It’s to turn it into architecture.
          </P>

          <div className="text-sm tracking-wide text-[color:var(--muted)]">
            Uncertainty → Structure → Operating Model → Scaled Execution
          </div>
        </div>
      </div>

      <Divider />

      {/* EXECUTIVE BRIEF */}
      <div className="space-y-4">
        <Link
          to="/brief"
          className="group inline-flex items-center gap-2 no-underline"
        >
          <span
            className="
              text-[color:var(--fg)] 
              font-semibold 
              tracking-tight 
              transition-colors duration-200
              group-hover:text-[color:var(--accent)]
              group-hover:underline underline-offset-4
              decoration-[rgba(15,30,61,0.45)]
            "
          >
            Read the executive brief
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

        <div className="text-sm leading-6 text-[color:var(--muted)] max-w-[36rem]">
          A concise overview of how I build systems, design governance, and structure scalable execution.
        </div>
      </div>

    </div>
  );
}