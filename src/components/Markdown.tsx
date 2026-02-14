import React from "react";

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function render(md: string) {
  const lines = md.split("\n");
  const out: string[] = [];
  let inList = false;

  const closeList = () => {
    if (inList) {
      out.push("</ul>");
      inList = false;
    }
  };

  for (const raw of lines) {
    const line = raw.trimRight();

    if (!line.trim()) {
      closeList();
      continue;
    }

    if (line.startsWith("### ")) {
      closeList();
      out.push(`<h3>${esc(line.slice(4))}</h3>`);
      continue;
    }
    if (line.startsWith("## ")) {
      closeList();
      out.push(`<h2>${esc(line.slice(3))}</h2>`);
      continue;
    }
    if (line.startsWith("# ")) {
      closeList();
      out.push(`<h1>${esc(line.slice(2))}</h1>`);
      continue;
    }
    if (line.startsWith("- ")) {
      if (!inList) {
        out.push("<ul>");
        inList = true;
      }
      out.push(`<li>${esc(line.slice(2))}</li>`);
      continue;
    }

    closeList();

    // simple emphasis *text*
    const p = esc(line).replace(/\*(.+?)\*/g, "<em>$1</em>");
    out.push(`<p>${p}</p>`);
  }

  closeList();
  return out.join("\n");
}

export default function Markdown({ content }: { content: string }) {
  const html = React.useMemo(() => render(content), [content]);

  return (
    <div
      className="read-max prose prose-neutral max-w-none
                 prose-headings:tracking-tight prose-headings:text-[color:var(--fg)]
                 prose-h1:text-[2.1rem] prose-h1:leading-[1.15]
                 prose-h2:text-[1.6rem] prose-h2:leading-[1.2]
                 prose-h3:text-[1.25rem] prose-h3:leading-[1.25]
                 prose-p:text-[color:var(--muted)] prose-p:leading-[1.85] prose-p:my-5
                 prose-li:text-[color:var(--muted)] prose-li:leading-[1.8]
                 prose-strong:text-[color:var(--fg)]
                 prose-ul:my-6"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}