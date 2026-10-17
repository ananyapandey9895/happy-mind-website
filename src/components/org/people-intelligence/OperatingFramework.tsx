import { motion } from "framer-motion";
import {
  ChevronRight,
  ClipboardCheck,
  Handshake,
  HeartHandshake,
  LayoutGrid,
  Lock,
  Presentation,
  Target,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ContactCta, Reveal, SectionHeading } from "./shared";
import LetterModel, { LetterStep } from "./LetterModel";

const pillars: LetterStep[] = [
  {
    letter: "C",
    icon: Users,
    title: "Culture & Collaboration",
    text: "Different personality types across hierarchy create synergy through awareness and emotional intelligence.",
  },
  {
    letter: "O",
    icon: Target,
    title: "Outcomes & Performance",
    text: "Creating role fulfilment through personality trait enhancement, whilst supporting adaptability through EQ development.",
  },
  {
    letter: "R",
    icon: Handshake,
    title: "Relationships & Retention",
    text: "Building belonging, trust and meaningful connections with internal and external stakeholders.",
  },
  {
    letter: "E",
    icon: HeartHandshake,
    title: "Empathetic & Effective Leadership",
    text: "Leading with empathy to understand emotions and perspectives, inspiring discretionary effort and optimizing cohesion.",
  },
];

const steps = [
  {
    icon: Presentation,
    tag: "45 min",
    title: "Interactive Workshop",
    text: "Employees go through a WIIFME (What's In It For Me) session on why self-insight matters to them.",
  },
  {
    icon: ClipboardCheck,
    tag: "15 min",
    title: "Self Check-in",
    text: "Each employee completes a short psychodiagnostics self check-in assessment.",
  },
  {
    icon: Lock,
    tag: "Confidential",
    title: "Individual Report",
    text: "Personalised insights on personality, behavioural patterns & growth areas - for the employee only.",
  },
  {
    icon: LayoutGrid,
    tag: "Organisation-level",
    title: "C.O.R.E. Management Report",
    text: "Anonymised workforce analytics, scored on the 6 People Intelligence Indices.",
  },
];

const OperatingFramework = () => (
  <section className="py-16 md:py-20 px-6 lg:px-16">
    <div className="container mx-auto max-w-7xl">
      <SectionHeading
        title="Our Framework"
        intro={
          <>
            <p>
              Translating psychological insights into practical business solutions through our
              psychodiagnostics framework.
            </p>
            <p className="font-semibold text-accent-foreground">
              Industry agnostic, issue focused, quadrant level solutioning.
            </p>
          </>
        }
      />

      <LetterModel steps={pillars} />

      {/* 60-minute process */}
      <Reveal className="mt-16 md:mt-20 rounded-[2rem] bg-card border border-border shadow-xl overflow-hidden">
        <div className="grid lg:grid-cols-[19rem_1fr]">
          <div className="relative bg-gradient-brand text-white p-8 md:p-10 flex flex-col justify-center">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">
              How C.O.R.E. is assessed
            </p>
            <div aria-hidden className="flex items-end gap-2 mt-4">
              <span className="font-serif text-7xl md:text-8xl font-bold leading-none">60</span>
              <span className="font-serif text-2xl font-bold pb-2">min</span>
            </div>
            <h3 className="font-serif text-2xl font-bold mt-3 leading-snug">
              One 60-Minute Structured Engagement
            </h3>
            <p className="italic text-white/80 mt-2">Less survey fatigue, lasting intelligence.</p>
          </div>

          <div className="p-6 md:p-10">
            {/* Time bar: the 45 + 15 split of the hour */}
            <div aria-hidden className="mb-8">
              <div className="flex h-3 rounded-full overflow-hidden bg-lavender-light">
                <motion.span
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: "75%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                <motion.span
                  className="h-full bg-accent-foreground border-l-2 border-card"
                  initial={{ width: 0 }}
                  whileInView={{ width: "25%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
                />
              </div>
              <div className="flex text-xs font-bold text-primary mt-2">
                <span className="w-3/4">45 min</span>
                <span className="w-1/4 text-right">15 min</span>
              </div>
            </div>

            <ol className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {steps.map((step, i) => {
                const last = i === steps.length - 1;
                return (
                  <li key={step.title} className="relative">
                    <div
                      className={cn(
                        "h-full rounded-2xl p-5 border",
                        last
                          ? "bg-accent-foreground text-white border-transparent shadow-lg"
                          : "bg-background border-border",
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            "w-9 h-9 rounded-full flex items-center justify-center",
                            last ? "bg-primary" : "bg-primary text-primary-foreground",
                          )}
                        >
                          <step.icon className="w-4 h-4" />
                        </span>
                        <span className={cn("text-sm font-bold", last ? "text-lavender-medium" : "text-primary")}>
                          {step.tag}
                        </span>
                      </div>
                      <h4 className="font-bold mt-4">{step.title}</h4>
                      <p className={cn("text-sm mt-1.5 leading-relaxed", last ? "text-white/75" : "text-muted-foreground")}>
                        {step.text}
                      </p>
                    </div>
                    {!last && (
                      <ChevronRight className="hidden xl:block absolute -right-[1.1rem] top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 flex justify-center">
        <ContactCta>Enquire</ContactCta>
      </div>
    </div>
  </section>
);

export default OperatingFramework;
