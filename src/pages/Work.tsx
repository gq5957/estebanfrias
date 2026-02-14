import { Link } from "react-router-dom";
import { work } from "../content/work";
import { H2, P, Kicker } from "../components/Editorial";

export default function Work() {
  return (
    <div className="read-max space-y-10">
      <div className="space-y-4">
        <Kicker>Selected work</Kicker>
        <H2>Systems, governance, and enablement — built to operate.</H2>
        <P>
          These case studies focus on architecture: how the system was designed,
          how it shipped, and how it runs without dependency.
        </P>
      </div>

      <div className="space-y-12">
        {work.map((w) => (
          <div key={w.slug} className="space-y-3 group">
            {/* Title (only link) */}
            <Link
              to={`/work/${w.slug}`}
              className="inline-flex items-center gap-2 text-[color:var(--fg)] text-[1.08rem] font-semibold no-underline"
            >
              <span className="group-hover:underline underline-offset-4 decoration-[rgba(15,30,61,0.3)]">
                {w.title}
              </span>

              {/* Arrow */}
              <span className="transition-transform duration-200 group-hover:translate-x-1 text-[color:var(--accent)]">
                →
              </span>
            </Link>

            {/* Deck */}
            <div className="text-sm text-[color:var(--muted)]">
              {w.deck}
            </div>

            {/* Tags */}
            <div className="pt-3 flex flex-wrap gap-2">
              {w.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs text-[color:var(--muted)] border hairline rounded-full px-3 py-1.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}