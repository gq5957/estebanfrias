export type WorkItem = {
  slug: string;
  title: string;
  deck: string;
  tags: string[];
  body: string;
};

export const work: WorkItem[] = [
  {
    slug: "ai-experimentation-to-governed-workflow-infrastructure",
    title: "From AI Experimentation to Governed Workflow Infrastructure",
    deck: "Designing scalable AI governance inside complex teams.",
    tags: ["AI governance", "Human-in-the-loop", "Operating model"],
    body: `## Context
A high-velocity environment with multiple stakeholders running pilots, without a shared governance model.

## Design intent
Move from ad-hoc experimentation to an operating system: clear ownership, review gates, escalation, and measurement.

## System
- Production guardrails and policy boundaries
- Review gates tied to risk tiers
- Exception pathways and incident rituals
- Dashboards that measure adoption, drift, and operational load

## Outcome
A repeatable operating model that scales beyond individual dependency and survives organizational change.`,
  },
  {
    slug: "productizing-a-customer-experience-center",
    title: "Productizing a Customer Experience Center",
    deck: "Turning a high-touch initiative into a measurable, scalable program.",
    tags: ["CX enablement", "Program design", "Stakeholder leadership"],
    body: `## Context
A high-touch executive experience dependent on a few operators and inconsistent delivery.

## Design intent
Productize the experience: standard modules, repeatable narratives, and a sustainable operating cadence.

## System
- Modular demo architecture and runbooks
- Intake → prep → delivery workflow
- Feedback loops (exec, field, customer)
- Roles, handoffs, and operational controls

## Outcome
A scalable program that increases consistency, reduces heroics, and enables cross-functional teams to deliver.`,
  },
  {
    slug: "enterprise-operating-model-cross-functional-execution",
    title: "Designing an Enterprise Operating Model for Cross-Functional Execution",
    deck: "Architecting alignment across delivery, communication, and governance.",
    tags: ["Operating model", "Governance", "Cross-functional delivery"],
    body: `## Context
Multiple teams shipping interdependent work with unclear decision rights and inconsistent execution rituals.

## Design intent
Create an operating model that clarifies ownership, cadence, and accountability without adding bureaucracy.

## System
- Decision rights map (who decides what, when)
- Weekly governance cadence and artifacts
- Intake and prioritization ritual
- Single source-of-truth operating dashboard

## Outcome
Improved execution velocity through clarity, predictable coordination, and durable operating artifacts.`,
  },
];
