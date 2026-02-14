import { Kicker, H2, P } from "../components/Editorial";

export default function Lab() {
  return (
    <div className="read-max space-y-10">
      <div className="space-y-4">
        <Kicker>Lab</Kicker>
        <H2>Experiments, prototypes, and small systems.</H2>
        <P>
          A space for early work: frameworks, templates, and operating artifacts that may later become products.
        </P>
      </div>

      <div className="text-[color:var(--muted)] leading-7">
        Coming soon.
      </div>
    </div>
  );
}
