export type NoteItem = {
  slug: string;
  title: string;
  deck: string;
  date: string; // YYYY-MM
  tags: string[];
  body: string;
};

export const notes: NoteItem[] = [
  {
    slug: "human-in-the-loop-is-governance",
    title: "Human-in-the-Loop Is Governance, Not a Feature",
    deck: "Why oversight is architecture — and how to design it.",
    date: "2026-02",
    tags: ["AI", "Governance", "Systems"],
    body: `
Many organizations treat “human-in-the-loop” as a UX decision.

It isn’t.

It’s a governance architecture.

Without structured oversight, defined checkpoints, and clear ownership boundaries, AI systems don’t fail technically — they fail organizationally.

Human-in-the-loop is not about comfort. It’s about accountability.

## The misconception
Teams often add review steps as a patch: a manual approval, a checkbox, a “sign-off.” That’s not governance. That’s friction.

Governance is a designed system:
- *Where* decisions happen
- *Who* owns risk
- *What* gets measured
- *How* exceptions are handled

## A practical model
Design three layers:
1) **Production guardrails** (what the system cannot do)
2) **Review gates** (what requires human judgment)
3) **Escalation pathways** (what happens when it breaks)

When done well, oversight becomes part of the operating model — not an add-on.
    `.trim()
  },
  {
    slug: "why-ai-programs-fail-after-the-pilot",
    title: "Why Most AI Programs Fail After the Pilot",
    deck: "The gap is rarely the model. It’s the operating system.",
    date: "2026-02",
    tags: ["AI", "Ops", "Leadership"],
    body: `
Pilots are easy. Operations are hard.

Most AI programs fail after the pilot because the organization never designs:
- Ownership
- Governance
- Measurement
- Sustainment

The model isn’t the product. The operating system is.
    `.trim()
  },
  {
    slug: "cx-enablement-is-a-systems-problem",
    title: "CX Enablement Is a Systems Problem",
    deck: "Scaling clarity requires structure, not heroics.",
    date: "2026-02",
    tags: ["CX", "Enablement", "Systems"],
    body: `
Customer experience enablement doesn’t scale through effort. It scales through structure:
- Standardized narratives
- Repeatable modules
- Clear operating roles
- Feedback loops

If the experience relies on a few high performers, it isn’t enablement. It’s heroics.
    `.trim()
  }
];
