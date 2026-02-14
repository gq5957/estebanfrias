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
        <div className="text-sm text-[color:var(--muted)]">{item.date} · {item.tags.join(" · ")}</div>
      </div>

      <Markdown content={item.body} />

      <div className="read-max pt-12">
  <Link
    to="/notes"
    className="inline-flex items-center gap-2 text-[color:var(--fg)] text-sm no-underline group"
  >
    {/* Arrow */}
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

    <span className="group-hover:underline underline-offset-4 decoration-[rgba(15,30,61,0.3)]">
      Back to notes
    </span>
  </Link>
</div>
    </div>
  );
}
