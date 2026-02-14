import { Link } from "react-router-dom";
import { Kicker, P, Divider } from "../components/Editorial";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Esteban Frias — Enterprise AI & Operational Systems Architect"
        canonicalPath="/"
        description="Esteban Frias designs scalable AI workflow governance, enterprise operating models, and customer experience systems inside complex organizations."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Esteban Frias",
          url: "https://www.estebanfrias.com",
          jobTitle: "Enterprise AI & Operational Systems Architect",
          description:
            "Systems-first leader designing scalable AI workflow governance, enterprise operating models, and customer experience enablement systems.",
        }}
      />

      <div className="read-max space-y-12 sm:space-y-14">
        <div className="space-y-6 sm:space-y-7">
          <Kicker>AI · Systems · Enablement</Kicker>

          <h1 className="text-[2.15rem] leading-[1.1] tracking-tight sm:text-[2.7rem] text-[color:var(--fg)] font-semibold">
            Most organizations pilot initiatives.
            <br />
            I design the system that lets them scale.
          </h1>

          <div className="space-y-4">
            <P>
              I architect scalable AI workflow governance, enterprise operating models, and customer experience enablement
              systems — often where structure does not yet exist.
            </P>
            <P>
              I’m drawn to uncharted environments: ambiguous mandates, undefined operating models, early-stage AI programs,
              and experience systems that haven’t been built before. My role is not to explore chaos. It’s to turn it into
              architecture.
            </P>
          </div>
        </div>

        <div className="text-[color:var(--muted)] text-sm">
          Uncertainty → Structure → Operating Model → Scaled Execution
        </div>

        <Divider />

        <div className="space-y-4">
          <div className="text-sm text-[color:var(--muted)]">Start here</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/work" className="link text-[color:var(--accent)]">
              Selected work
            </Link>
            <Link to="/notes" className="link text-[color:var(--accent)]">
              Operator notes
            </Link>
            <Link to="/brief" className="link text-[color:var(--accent)]">
              Executive brief
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}