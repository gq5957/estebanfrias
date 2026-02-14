export type WorkItem = {
  slug: string;
  title: string;
  deck: string;
  summary: string;
  tags: string[];
  body: string;
};

export const work: WorkItem[] = [
  {
    slug: "ai-experiments-to-governed-workflows",
    title: "From AI Experimentation to Governed Workflow Infrastructure",
    deck: "Designing scalable AI governance inside complex teams.",
    summary:
      "Moved fragmented AI pilots into a structured operating system: prompt lifecycle, human-in-the-loop governance, orchestration, and metrics — built to scale responsibly.",
    tags: ["AI governance", "Human-in-the-loop", "Operating model"],
    body: `
## Executive Summary
The organization had pockets of AI experimentation across teams but lacked governance, consistency, and operational durability. The objective was to move from isolated pilots to a structured AI workflow infrastructure capable of scaling responsibly.

## Context
- Multiple teams experimenting independently
- No standardized prompt library or lifecycle controls
- Inconsistent human oversight
- Unclear ownership and risk boundaries

The risk wasn’t technical failure. It was operational fragmentation.

## Architectural Design
The solution centered on four structural layers:

**1) Prompt Library Architecture**
- Centralized prompt frameworks
- Version control and change tracking
- Standardized evaluation criteria

**2) Human-in-the-Loop Governance**
- Defined approval checkpoints
- Escalation pathways
- Clear accountability ownership

**3) Workflow Orchestration**
- Defined intake process
- Structured deployment lifecycle
- Monitoring and iteration loops

**4) Performance Metrics**
- Adoption rates
- Output quality scoring
- Risk and compliance tracking

## Execution Strategy
- Phase 1: Audit and mapping of existing use cases
- Phase 2: Standardized framework rollout
- Phase 3: Governance enablement and stakeholder training
- Phase 4: Measurement and refinement

## Outcomes
- Consolidated fragmented efforts into structured workflows
- Reduced risk exposure and increased leadership confidence
- Enabled cross-functional scaling with measurable feedback loops

## Sustained Operating State
The system now runs through defined governance rituals and measurable metrics — reducing reliance on individual champions.
    `.trim()
  },
  {
    slug: "productizing-customer-experience-center",
    title: "Productizing a Customer Experience Center",
    deck: "Turning a high-touch initiative into a measurable, scalable program.",
    summary:
      "Designed the operating model: intake, narrative layers, repeatable demos, standards, and measurement so the program could scale and operate beyond individual dependency.",
    tags: ["CX enablement", "Program design", "Stakeholder leadership"],
    body: `
## Executive Summary
Built a customer experience environment that translated complex technical capability into clear business outcomes — then productized it into a repeatable program with standards, governance, and measurement.

## Context
- High-touch experience work that didn’t scale
- Inconsistent delivery across stakeholders and teams
- Limited visibility into outcomes and throughput

## Architecture
- Standardized intake and qualification
- Storytelling layers (exec → technical)
- Repeatable demo modules with clear operators
- Governance and quality control
- Measurement (throughput, satisfaction, conversion signals)

## Outcomes
- Increased repeatability and reduced friction
- Clearer executive narrative and stakeholder alignment
- Operable model that could run without constant rebuild
    `.trim()
  },
  {
    slug: "enterprise-operating-model-cross-functional-execution",
    title: "Designing an Enterprise Operating Model for Cross-Functional Execution",
    deck: "Architecting alignment across delivery, communication, and governance.",
    summary:
      "Created a practical operating system for cross-functional work: how requests enter, how decisions get made, and how delivery stays aligned with quality and speed.",
    tags: ["Operating model", "Governance", "Cross-functional delivery"],
    body: `
## Executive Summary
Cross-functional execution breaks when ownership, decision pathways, and feedback loops are unclear. The goal was to design an operating model that improved speed without sacrificing quality.

## System Design
- Intake and prioritization (explicit constraints)
- Decision rights and escalation lanes
- Delivery rituals (cadence, artifacts, review gates)
- Definition of done and quality control
- Metrics that drive behavior (not vanity)

## Outcomes
- Reduced ambiguity and cycle time
- Improved stakeholder trust and predictability
- Repeatable cadence that survives organizational change
    `.trim()
  }
];
