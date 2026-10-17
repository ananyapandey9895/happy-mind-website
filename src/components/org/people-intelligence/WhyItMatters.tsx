import { motion } from "framer-motion";
import { ArrowRight, CircleAlert, Target, UserMinus } from "lucide-react";
import { Reveal, SectionHeading } from "./shared";

const leadIndicators = [
  { label: "Work Life Balance", value: 85 },
  { label: "Retention & Engagement", value: 80 },
  { label: "Multi Generation Gap", value: 70 },
  { label: "Performance Stagnation", value: 70 },
  { label: "Leadership Burnout", value: 65 },
  { label: "Workplace Conflicts", value: 60 },
  { label: "Passive Participation", value: 60 },
  { label: "Change Aversion", value: 55 },
  { label: "Absenteeism & Presenteeism", value: 55 },
];

const lagIndicators = [
  {
    icon: UserMinus,
    title: "Talent Erosion / Multi-Generation Alignment Gaps",
    text: "Quiet quitting and top talent loss erode talent pipelines, creating costly gaps in institutional knowledge.",
  },
  {
    icon: CircleAlert,
    title: "Leadership Struggles / Execution Barriers",
    text: "Disengagement stifles execution, whilst stressed mindsets generate presenteeism and absenteeism.",
  },
  {
    icon: Target,
    title: "Misplaced Root Cause Analysis",
    text: "Problem-solving focuses on processes and products/services, while the underlying people factors remain overlooked.",
  },
];

const WhyItMatters = () => (
  <section className="py-16 md:py-20 px-6 lg:px-16">
    <div className="container mx-auto max-w-7xl">
      <SectionHeading
        title="The Familiar Corporate Challenge"
        intro={
          <p>
            Research of 7 years with more than 500 corporations, tells us common pressure points
            prevalent &amp; persistent, with corporate India, which adversely impact organisational
            goals, year after year.
          </p>
        }
      />

      <div className="grid lg:grid-cols-[1.35fr_1fr] gap-6 lg:gap-10">
        {/* Lead indicators */}
        <Reveal className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-sm">
          <h3 className="font-serif text-xl md:text-2xl font-bold text-accent-foreground">
            Lead Indicators
          </h3>
          <p className="text-sm italic text-muted-foreground mt-1 mb-6">
            Early pressure points that signal what's coming
          </p>
          <ul className="space-y-4">
            {leadIndicators.map((item, i) => (
              <li key={item.label} className="grid grid-cols-[minmax(0,11rem)_1fr_3rem] items-center gap-3">
                <span className="text-sm font-semibold text-accent-foreground">{item.label}</span>
                <span className="h-2.5 rounded-full bg-lavender-light overflow-hidden">
                  <motion.span
                    className="block h-full rounded-full bg-gradient-brand"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.1 + i * 0.07, ease: "easeOut" }}
                  />
                </span>
                <span className="text-sm font-bold text-primary text-right">{item.value}%</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Lag indicators */}
        <Reveal delay={0.15} className="relative bg-accent-foreground text-white rounded-3xl p-6 md:p-8 shadow-xl">
          <span className="hidden lg:flex absolute -left-11 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary items-center justify-center ring-4 ring-background shadow-lg">
            <ArrowRight className="w-5 h-5" />
          </span>
          <h3 className="font-serif text-xl md:text-2xl font-bold">Lag Indicators</h3>
          <p className="text-sm italic text-lavender-medium mt-1 mb-8">
            Business outcomes that surface later
          </p>
          <ul className="space-y-7">
            {lagIndicators.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="shrink-0 w-11 h-11 rounded-full bg-primary flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-bold leading-snug">{item.title}</h4>
                  <p className="text-sm text-white/75 mt-1.5 leading-relaxed">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);

export default WhyItMatters;
