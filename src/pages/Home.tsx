import { Link } from "react-router-dom";
import { Kicker, P, Divider } from "../components/Editorial";
import SEO from "../components/SEO";

function HomeCard({
  to,
  title,
  desc,
}: {
  to: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      to={to}
      className="group block no-underline rounded-2xl border hairline bg-white/60
                 px-5 py-5 sm:px-6 sm:py-6
                 transition
                 hover:bg-white/85 hover:shadow-[0_10px_30px_rgba(17,19,24,0.08)]
                 focus:outline-none focus:ring-2 focus:ring-[rgba(15,30,61,0.18)]"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="text-[color:var(--fg)] font-semibold tracking-tight">
          {title}
        </div>
        <span
          className="text-[color:var(--muted)] font-light
                     opacity-0 transition duration-200 delay-75
                     group-hover:opacity-100 group-hover:translate-x-1"
          aria-hidden="true"
        >
          →
        </span>
      </div>
      <div className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
        {desc}
      </div>
    </Link>
  );
}

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

          <div className="space-y-4">
            <h1 className="text-[2.15rem] leading-[1.08] tracking-tight sm:text-[2.8rem] text-[color:var(--fg)] font-semibold">
              Most organizations pilot initiatives.
              <br />
              I design the system that lets them scale.
            </h1>

            {/* subtle signature rule */}
            <div className="h-[2px] w-16 rounded-full bg-[rgba(15,30,61,0.22)]" />
          </div>

          <div className="space-y-4">
            <P>
              I architect scalable AI workflow governance, enterprise operating models, and customer
              experience enablement systems — often where structure does not yet exist.
            </P>
            <P>
              I’m drawn to uncharted environments: ambiguous mandates, undefined operating models,
              early-stage AI programs, and experience systems that haven’t been built before. My role
              is not to explore chaos. It’s to turn it into architecture.
            </P>
          </div>

          <div className="text-sm text-[color:var(--muted)]">
            Uncertainty → Structure → Operating Model → Scaled Execution
          </div>
        </div>

        <Divider />

        {/* Replace "Start here" with intentional modules */}
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-wider text-[color:var(--muted)]">
            Modules
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <HomeCard
              to="/work"
              title="Selected work"
              desc="Case studies on governance, operating models, and enablement systems."
            />
            <HomeCard
              to="/notes"
              title="Operator notes"
              desc="Short essays on systems design, accountability, and execution."
            />
            <HomeCard
              to="/brief"
              title="Executive brief"
              desc="A one-page summary of how I work and what I build."
            />
          </div>
        </div>
      </div>
    </>
  );
}