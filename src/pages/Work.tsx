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
          These case studies focus on architecture: how the system was designed, how it shipped, and how it runs without dependency.
        </P>
      </div>

      <div className="space-y-10">
        {work.map((w) => (
          <div key={w.slug} className="space-y-2">
            <Link to={`/work/${w.slug}`} className="no-underline">
              <div className="text-[color:var(--fg)] text-[1.08rem] font-semibold hover:underline underline-offset-4 decoration-[rgba(15,30,61,0.3)]">
                {w.title}
              </div>
            </Link>
            <div className="text-sm text-[color:var(--muted)]">{w.deck}</div>
            <div className="flex flex-wrap gap-2 pt-1">
              {w.tags.map((t) => (
                <span key={t} className="text-xs text-[color:var(--muted)] border hairline rounded-full px-2.5 py-1">
                  {t}
                </span>
              ))}
            </div>
            <Link to={`/work/${w.slug}`} className="link text-sm text-[color:var(--accent)]">Read</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
