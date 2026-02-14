import React from "react";

/**
 * Minimal markdown renderer for this site:
 * Supports: headings (##), bold (**), unordered lists (-), paragraphs.
 * Keeps dependencies minimal (no markdown library).
 */
export default function Markdown({ content }: { content: string }) {
  const lines = content.split(/\r?\n/);

  const blocks: React.ReactNode[] = [];
  let list: string[] = [];

  const flushList = () => {
    if (list.length) {
      blocks.push(
        <ul key={"ul-" + blocks.length} className="my-5 list-disc pl-5 text-[color:var(--muted)]">
          {list.map((li, i) => (
            <li key={i} className="leading-7">{renderInline(li)}</li>
          ))}
        </ul>
      );
      list = [];
    }
  };

  const renderInline = (text: string) => {
    // bold **text**
    const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
    return parts.map((p, i) => {
      if (p.startsWith("**") && p.endsWith("**")) {
        return (
          <strong key={i} className="text-[color:var(--fg)] font-semibold">
            {p.slice(2, -2)}
          </strong>
        );
      }
      return <React.Fragment key={i}>{p}</React.Fragment>;
    });
  };

  for (const raw of lines) {
    const line = raw.trimEnd();

    if (!line.trim()) {
      flushList();
      continue;
    }

    if (line.startsWith("- ")) {
      list.push(line.slice(2));
      continue;
    }

    flushList();

    if (line.startsWith("## ")) {
      blocks.push(
        <h2 key={"h2-" + blocks.length} className="mt-10 text-[1.35rem] tracking-tight text-[color:var(--fg)]">
          {renderInline(line.slice(3))}
        </h2>
      );
      continue;
    }

    if (line.startsWith("# ")) {
      blocks.push(
        <h1 key={"h1-" + blocks.length} className="mt-8 text-[1.9rem] tracking-tight text-[color:var(--fg)]">
          {renderInline(line.slice(2))}
        </h1>
      );
      continue;
    }

    blocks.push(
      <p key={"p-" + blocks.length} className="mt-4 text-[1.05rem] leading-7 text-[color:var(--muted)]">
        {renderInline(line)}
      </p>
    );
  }

  flushList();

  return <div className="read-max">{blocks}</div>;
}
