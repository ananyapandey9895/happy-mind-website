import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, Check, HeartHandshake, Network, TrendingUp, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./shared";

const B = ({ children }: { children: ReactNode }) => <strong className="font-bold text-primary">{children}</strong>;

const pillars: { icon: typeof BarChart3; title: string; points: ReactNode[]; shade: string }[] = [
  {
    icon: BarChart3,
    title: "People Intelligence Consulting",
    shade: "from-[hsl(257_60%_68%)] to-[hsl(257_55%_60%)]",
    points: [
      <><B>6 Key Indices</B> turning psychodiagnostics data into actionable intelligence.</>,
      "Board & Management-level insights & industry benchmarking",
      <><B>35-60%</B> employee participation across organisations.</>,
      <>Multiple used cases across sectors, through just <B>60 minutes</B> intervention.</>,
    ],
  },
  {
    icon: HeartHandshake,
    title: "Employee Assistance Program",
    shade: "from-[hsl(259_60%_60%)] to-[hsl(259_58%_52%)]",
    points: [
      "Combines self-help tools, expert counselling, emotional support & early intervention in one ecosystem.",
      "CBT-based, evidence backed methodologies.",
      "Prevention & early detection, not just crisis response.",
      "Web & app based anonymous support for employees",
    ],
  },
  {
    icon: TrendingUp,
    title: "Leadership Program (L.E.A.P.)",
    shade: "from-[hsl(260_55%_52%)] to-[hsl(260_55%_44%)]",
    points: [
      "Personalised journeys built around each leaders' real challenges.",
      "Conscious leadership approach, purposeful coaching & directed mentoring.",
      "Measured through behaviour change, not presence.",
      <><B>72%</B> success rate with individual transformation.</>,
    ],
  },
  {
    icon: Users,
    title: "D.E.I. & Behavioural Workshops",
    shade: "from-[hsl(261_50%_44%)] to-[hsl(261_52%_34%)]",
    points: [
      "Builds psychological safety and inclusion for women, LGBTQIA+, PWD, neurodiverse, blue-collared and gig workers.",
      "Customizable workshops on today's priorities - mutual respect, brain fog, micro aggressors and many more.",
      "Industry-first PWD programs making real touch points for this workforce.",
    ],
  },
];


const SupportSystem = () => {
  const [active, setActive] = useState(0);
  const current = pillars[active];

  return (
    <section className="py-16 md:py-20 px-6 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          title="Intelligence, Integration & Intent"
          intro={
            <p>
              We deliver <strong className="text-accent-foreground">customized client journeys</strong>{" "}
              around the specific concerns, for organisations across sectors. Our model is flexible to
              support a start up and at the same time integrate with the largest workforces in the
              country and <strong className="text-accent-foreground">produce measurable outcomes.</strong>
            </p>
          }
          className="max-w-5xl"
        />

        <div className="max-w-5xl mx-auto">
          {/* Roof */}
          <Reveal className="relative">
            <div className="relative mx-auto h-32 md:h-40 [clip-path:polygon(50%_0,100%_100%,0_100%)] bg-gradient-to-b from-accent-foreground to-[hsl(258_55%_32%)]">
              <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,hsl(var(--primary)/0.45),transparent_60%)]" />
            </div>
            <div className="absolute inset-x-0 bottom-2 md:bottom-4 flex justify-center">
              <span className="inline-flex items-center gap-2 md:gap-3 rounded-full bg-card px-4 md:px-7 py-2 md:py-3 shadow-lg shadow-black/25">
                <span className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-gradient-brand flex items-center justify-center">
                  <Network className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </span>
                <h3 className="font-serif text-base md:text-2xl font-bold text-accent-foreground">
                  People Intelligence System
                </h3>
              </span>
            </div>
          </Reveal>

          {/* Pillars: compact, selectable */}
          <div role="tablist" aria-label="Support pillars" className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-6 lg:px-6">
            {pillars.map((p, i) => {
              const selected = i === active;
              return (
                <button
                  key={p.title}
                  type="button"
                  role="tab"
                  id={`pillar-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="pillar-panel"
                  onClick={() => setActive(i)}
                  className={cn(
                    "group relative flex flex-col items-center text-center gap-3 rounded-2xl px-4 py-6 md:py-8 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    selected
                      ? "bg-gradient-brand text-white shadow-xl shadow-primary/30 -translate-y-1"
                      : "bg-card border border-border text-accent-foreground hover:border-primary/40 hover:shadow-lg",
                  )}
                >
                  <span
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                      selected ? "bg-white/20" : "bg-lavender-light group-hover:bg-lavender-medium/60",
                    )}
                  >
                    <p.icon className={cn("w-6 h-6", selected ? "text-white" : "text-primary")} />
                  </span>
                  <span className="font-serif text-sm md:text-base font-bold leading-snug">{p.title}</span>
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-[hsl(var(--grad-brand-to))] transition-opacity",
                      selected ? "opacity-100" : "opacity-0",
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* Foundation */}
          <div aria-hidden className="mt-6 space-y-1.5">
            <div className="h-2 mx-2 lg:mx-4 rounded-full bg-gradient-brand" />
            <div className="h-2 rounded-full bg-accent-foreground" />
          </div>

          {/* Detail for the selected pillar */}
          <div id="pillar-panel" role="tabpanel" aria-labelledby={`pillar-tab-${active}`} className="mt-8">
            <AnimatePresence mode="wait">
              <motion.ul
                key={current.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="grid sm:grid-cols-2 gap-x-10 gap-y-4"
              >
                {current.points.map((point, j) => (
                  <li key={j} className="flex gap-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-lavender-light flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" strokeWidth={3} />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSystem;
