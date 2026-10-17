import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CountUp, Reveal, SectionHeading } from "./shared";

const headlineStats = [
  { value: 70, suffix: "%", label: "Long-Term Retention" },
  { value: 5, suffix: "x", label: "Capability in Conflict Resolution" },
  { value: 3, suffix: "x", label: "Power as Innovation Catalyst" },
  { value: 25, suffix: "%", label: "Higher Customer Satisfaction" },
];

const synergy = [
  {
    value: 60,
    title: "Conflict Reduction",
    text: "Reduced team conflicts when EI mediates personality trait differences.",
  },
  {
    value: 35,
    title: "Execution Excellence",
    text: "Improvement in project delivery timelines through personality-based team formation.",
  },
  {
    value: 45,
    title: "Team Dynamics Enhancement",
    text: "Organizations using personality assessments report higher retention and improved collaboration.",
  },
];


const WhatIsThePoc = () => (
  <section className="relative overflow-hidden surface-tint py-16 md:py-24 px-6 lg:px-16">
    <div aria-hidden className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full bg-primary/10 blur-3xl" />

    <div className="relative container mx-auto max-w-6xl">
      <SectionHeading
        title="People Intelligence As a Driver"
        intro={
          <p>
            Research across the globe consistently demonstrates that emotional intelligence and
            personality awareness aren't "soft skills" anymore - they're hard business levers with
            measurable ROI. The data is unequivocal.
          </p>
        }
      />

      {/* Headline stats: one slim panel, no individual cards */}
      <Reveal>
        <dl className="grid grid-cols-2 lg:grid-cols-4 rounded-3xl bg-card/80 backdrop-blur-sm border border-border shadow-lg shadow-primary/5">
          {headlineStats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "px-6 py-7 md:py-8 text-center",
                i % 2 === 1 && "border-l",
                i >= 2 && "border-t lg:border-t-0",
                i === 2 && "lg:border-l",
              )}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  className="block font-serif text-4xl md:text-5xl font-bold bg-gradient-brand bg-clip-text text-transparent leading-none"
                />
                <span className="block mt-3 text-sm text-muted-foreground leading-snug">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* Synergy: simple columns */}
      <div className="mt-14 md:mt-16">
        <h3 className="flex items-center gap-4 font-serif text-lg md:text-xl font-bold text-accent-foreground">
          Personality &amp; Performance Synergy
          <span aria-hidden className="flex-1 h-px bg-border" />
        </h3>

        <div className="mt-8 grid md:grid-cols-3 gap-8 md:gap-10">
          {synergy.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="flex items-baseline gap-3">
                <CountUp value={item.value} suffix="%" className="font-serif text-3xl font-bold text-primary" />
                <h4 className="font-bold text-accent-foreground">{item.title}</h4>
              </div>
              <div className="mt-3 h-1 rounded-full bg-lavender-medium/50 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-brand"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhatIsThePoc;
