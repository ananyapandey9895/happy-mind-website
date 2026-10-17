import { useState } from "react";
import { Activity, Infinity as InfinityIcon, Link2, Search, Shield, Target, RotateCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrochureCta, ContactCta, Reveal, SectionHeading } from "./shared";
import { indexQuestions } from "./pending-content";

const indices = [
  {
    icon: Search,
    title: "Predictive Hiring",
    text: "Identifies behavioral signals associated with successful talent selection, suitability of hire & personality fit with the role.",
  },
  {
    icon: Activity,
    title: "Performance Potential",
    text: "Identifies emotional readiness factors influencing PMS outcomes and developing widespread success base.",
  },
  {
    icon: Link2,
    title: "Retention Propensity",
    text: "Matches emotional factors linked to retention, flagging early attrition risk, HIPO mgt. and enable timely intervention.",
  },
  {
    icon: Target,
    title: "Personality & Role Alignment",
    text: "Assesses personality profiles with assigned roles to strengthen traits driven performance enhancement and internal bench strength.",
  },
  {
    icon: InfinityIcon,
    title: "Team Unit Effectiveness",
    text: "Assesses manager-team dynamics, communication and collaboration correlation that influence balance.",
  },
  {
    icon: Shield,
    title: "Workplace Inclusion",
    text: "Measures behavioral readiness for inclusive leadership and identifies D.E.I. opportunities to foster..",
  },
] as const;

const FlipCard = ({ index, item }: { index: number; item: (typeof indices)[number] }) => {
  const [flipped, setFlipped] = useState(false);
  const question = indexQuestions[item.title];
  const number = String(index + 1).padStart(2, "0");

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label={`${item.title}: ${flipped ? "show question" : "show details"}`}
      className="group perspective-1000 w-full h-[17rem] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-3xl"
    >
      <div
        className={cn(
          "relative w-full h-full preserve-3d transition-transform duration-700 ease-out",
          flipped && "rotate-y-180",
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden rounded-3xl bg-card border border-border shadow-md group-hover:shadow-xl group-hover:border-primary/40 transition-shadow p-5 flex flex-col">
          <div className="flex items-start justify-between">
            <span className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center shadow-lg shadow-primary/30">
              <item.icon className="w-5 h-5 text-white" />
            </span>
            <span className="font-serif text-3xl font-bold text-lavender-medium">{number}</span>
          </div>
          <h3 className="font-serif italic text-lg font-bold text-accent-foreground mt-4">{item.title}</h3>
          {question ? (
            <p className="mt-2 text-sm italic font-semibold text-primary leading-snug">{question}</p>
          ) : (
            <p className="mt-3 rounded-lg border border-dashed border-primary/30 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-primary/60">
              Question to be added
            </p>
          )}
          <span className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
            <RotateCw className="w-4 h-4" /> Flip
          </span>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl bg-accent-foreground text-white shadow-xl p-5 flex flex-col">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <item.icon className="w-5 h-5" />
            </span>
            <h3 className="font-serif italic text-lg font-bold">{item.title}</h3>
          </div>
          <p className="mt-3 text-sm text-white/85 leading-relaxed">{item.text}</p>
          <span className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lavender-medium">
            <RotateCw className="w-4 h-4" /> Flip back
          </span>
        </div>
      </div>
    </button>
  );
};

const IntelligentOutcome = () => (
  <section className="py-16 md:py-20 px-6 lg:px-16">
    <div className="container mx-auto max-w-6xl">
      <SectionHeading
        title="The Intelligent Outcome"
        intro={
          <p>
            Key people intelligence indices that generates unique scores by translating emotion lead
            patterns into actionable insights across critical people and business outcomes.
          </p>
        }
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {indices.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 0.08}>
            <FlipCard index={i} item={item} />
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <ContactCta>Connect With Team</ContactCta>
        <BrochureCta />
      </div>
    </div>
  </section>
);

export default IntelligentOutcome;
