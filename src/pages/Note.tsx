import { Link, useParams } from "react-router-dom";
import { notes } from "../content/notes";
import Markdown from "../components/Markdown";
import { Kicker } from "../components/Editorial";

export default function Note() {
  const { slug } = useParams();
  const item = notes.find((n) => n.slug === slug);

  if (!item) {
    return (
      <div className="read-max space-y-4">
        <Kicker>Notes</Kicker>
        <div className="text-[color:var(--fg)] text-xl font-semibold">Note not found.</div>
        <Link to="/notes" className="link text-[color:var(--accent)]">Back to notes</Link>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="read-max space-y-2">
        <Kicker>Operator note</Kicker>
        <h1 className="text-[2rem] leading-[1.15] tracking-tight sm:text-[2.4rem]">{item.title}</h1>
        {/* intentionally no dates */}
        <div className="pt-3 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span key={t} className="text-xs text-[color:var(--muted)] border hairline rounded-full px-3 py-1.5">
              {t}
            </span>
          ))}
        </div>
      </div>

      <Markdown content={item.body} />

      <div className="read-max pt-12">
        <Link to="/notes" className="group inline-flex items-center gap-2 no-underline cursor-pointer">
          <span
            className="text-[color:var(--muted)] font-light
                       opacity-0 transition
                       duration-200 delay-75
                       group-hover:opacity-100
                       group-hover:-translate-x-1"
            aria-hidden="true"
          >
            ←
          </span>
          <span className="text-sm text-[color:var(--fg)] group-hover:underline underline-offset-4 decoration-[rgba(15,30,61,0.45)]">
            Back to notes
          </span>
        </Link>
      </div>
    </div>
  );
}
