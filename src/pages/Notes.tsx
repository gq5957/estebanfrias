import { Link } from "react-router-dom";
import { notes } from "../content/notes";
import { H2, P, Kicker } from "../components/Editorial";

export default function Notes() {
  return (
    <div className="read-max space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <Kicker>Operator notes</Kicker>
        <H2>Short essays on systems, governance, and scalable execution.</H2>
        <P>
          A small collection of high-signal notes. No content treadmill — just what’s worth publishing.
        </P>
      </div>

      {/* Notes List */}
      <div className="space-y-12">
        {notes.map((n) => (
          <div key={n.slug} className="space-y-3">
            {/* Title (only link) */}
            <Link
              to={`/notes/${n.slug}`}
              className="group inline-flex items-center gap-2 no-underline cursor-pointer"
            >
              <span
                className="text-[color:var(--fg)] text-[1.08rem] font-semibold
                           transition-colors duration-200
                           group-hover:text-[color:var(--accent)]
                           group-hover:underline underline-offset-4
                           decoration-[rgba(15,30,61,0.45)]"
              >
                {n.title}
              </span>

              {/* Hover arrow (fade + micro-delay) */}
              <span
                className="text-[color:var(--muted)] font-light
                           opacity-0 transition
                           duration-200 delay-75
                           group-hover:opacity-100
                           group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>

            {/* Deck */}
            <div className="text-sm text-[color:var(--muted)]">{n.deck}</div>

            {/* Tags (Work-style pills) */}
            <div className="pt-3 flex flex-wrap gap-2">
              {n.tags.map((t) => (
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
        ))}
      </div>
    </div>
  );
}