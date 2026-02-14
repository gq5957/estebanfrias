import { Link } from "react-router-dom";
import { notes } from "../content/notes";
import { H2, P, Kicker } from "../components/Editorial";

export default function Notes() {
  return (
    <div className="read-max space-y-10">
      <div className="space-y-4">
        <Kicker>Operator notes</Kicker>
        <H2>Short essays on systems, governance, and scalable execution.</H2>
        <P>
          A small collection of high-signal notes. No content treadmill — just what’s worth publishing.
        </P>
      </div>

      <div className="space-y-10">
        {notes.map((n) => (
          <div key={n.slug} className="space-y-2">
            <Link to={`/notes/${n.slug}`} className="no-underline">
              <div className="text-[color:var(--fg)] text-[1.08rem] font-semibold hover:underline underline-offset-4 decoration-[rgba(15,30,61,0.3)]">
                {n.title}
              </div>
            </Link>
            <div className="text-sm text-[color:var(--muted)]">{n.deck}</div>
            <div className="text-xs text-[color:var(--muted)]">{n.date} · {n.tags.join(" · ")}</div>
            <Link to={`/notes/${n.slug}`} className="link text-sm text-[color:var(--accent)]">Read</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
