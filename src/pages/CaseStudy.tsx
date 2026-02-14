import { Link, useParams } from "react-router-dom";
import { work } from "../content/work";
import Markdown from "../components/Markdown";
import { Kicker } from "../components/Editorial";
import SEO from "../components/SEO";

export default function CaseStudy() {
  const { slug } = useParams();
  const item = work.find((w) => w.slug === slug);

  if (!item) {
    return (
      <>
        <SEO
          title="Case Study Not Found — Esteban Frias"
          canonicalPath="/work"
        />
        <div className="read-max space-y-4">
          <Kicker>Work</Kicker>
          <div className="text-[color:var(--fg)] text-xl font-semibold">
            Case study not found.
          </div>
          <Link to="/work" className="link text-[color:var(--accent)]">
            Back to work
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${item.title} — Esteban Frias`}
        canonicalPath={`/work/${item.slug}`}
        description={item.deck}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: item.title,
          description: item.deck,
          author: {
            "@type": "Person",
            name: "Esteban Frias"
          },
          url: `https://www.estebanfrias.com/work/${item.slug}`
        }}
      />

      <div className="space-y-10">
        <div className="read-max space-y-3">
          <Kicker>Case study</Kicker>

          <h1 className="text-[2rem] leading-[1.15] tracking-tight sm:text-[2.4rem]">
            {item.title}
          </h1>

          <div className="text-sm text-[color:var(--muted)]">
            {item.deck}
          </div>

          <div className="pt-3 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span
                key={t}
                className="text-xs text-[color:var(--muted)]
                           border hairline rounded-full
                           px-3 py-1.5"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <Markdown content={item.body} />

        <div className="read-max pt-12">
          <div className="text-sm text-[color:var(--muted)]">
            Available for enterprise leadership roles and select strategic
            architecture engagements.
          </div>

          <div className="pt-4">
            <Link to="/work" className="link text-[color:var(--accent)]">
              ← Back to work
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}