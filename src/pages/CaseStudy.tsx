import { Link, useParams } from "react-router-dom";
import { work } from "../content/work";
import Markdown from "../components/Markdown";
import { Kicker } from "../components/Editorial";

export default function CaseStudy() {
  const { slug } = useParams();
  const item = work.find((w) => w.slug === slug);

  if (!item) {
    return (
      <div className="read-max space-y-4">
        <Kicker>Work</Kicker>
        <div className="text-[color:var(--fg)] text-xl font-semibold">Case study not found.</div>
        <Link to="/work" className="link text-[color:var(--accent)]">Back to work</Link>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="read-max space-y-3">
        <Kicker>Case study</Kicker>
        <h1 className="text-[2rem] leading-[1.15] tracking-tight sm:text-[2.4rem]">{item.title}</h1>
        <p className="text-[1.05rem] leading-7 text-[color:var(--muted)]">{item.summary}</p>
        <div className="pt-2 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span key={t} className="text-xs text-[color:var(--muted)] border hairline rounded-full px-2.5 py-1">
              {t}
            </span>
          ))}
        </div>
      </div>

      <Markdown content={item.body} />

      <div className="read-max pt-10">
        <Link to="/work" className="link text-[color:var(--accent)]">← Back to work</Link>
      </div>
    </div>
  );
}
