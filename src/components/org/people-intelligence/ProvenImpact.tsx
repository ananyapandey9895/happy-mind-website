import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Building2, Factory, Globe, Layers, ShieldCheck, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { CountUp, SectionHeading } from "./shared";
import cementImage from "@/assets/org/impact/cement-manufacturing.png";
import realEstateImage from "@/assets/org/impact/real-estate.png";
import bfsiImage from "@/assets/org/impact/bfsi.png";
import mintingImage from "@/assets/org/impact/minting-manufacturing.png";
import bfsiTeamImage from "@/assets/org/impact/bfsi-2.png";
import ecommerceImage from "@/assets/org/impact/ecommerce.png";

const results = [
  { icon: Factory, sector: "Cement Manufacturing", value: 17, label: "Reduction in Attrition", image: cementImage },
  { icon: Building2, sector: "Real Estate", value: 43, label: "Increase in Work Satisfaction", image: realEstateImage },
  { icon: ShieldCheck, sector: "BFSI", value: 75, label: "Employees Shifted Positively on Role Alignment", image: bfsiImage },
  { icon: Layers, sector: "Minting & Manufacturing", value: 35, label: "Reduction in Incident Reporting", image: mintingImage },
  { icon: Users, sector: "BFSI", value: 20, label: "Reduction in Early Employee Attrition", image: bfsiTeamImage },
  { icon: Globe, sector: "E-Commerce", value: 40, label: "Fewer Wellbeing Issues Reported", image: ecommerceImage },
];

const STEP_DEG = 360 / results.length;
const RADIUS = 40; // % of the orbit square
const HOLD_MS = 3200;

const ProvenImpact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-80px" });
  // Keeps counting up (never wraps) so the ring always turns the same way.
  const [step, setStep] = useState(0);
  const active = step % results.length;
  const current = results[active];

  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(() => setStep((s) => s + 1), HOLD_MS);
    return () => window.clearInterval(id);
  }, [inView]);

  const goTo = (i: number) => setStep((s) => s + ((i - (s % results.length) + results.length) % results.length));

  const spin = { duration: 0.9, ease: [0.65, 0, 0.35, 1] as const };

  return (
    <section className="py-16 md:py-20 px-6 lg:px-16 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          title={
            <>
              Proven Impact Across Sectors <span className="text-primary sm:block">In Indian Ecosystem</span>
            </>
          }
        />

        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          <div className="relative mx-auto w-[18rem] h-[18rem] sm:w-[24rem] sm:h-[24rem] lg:w-[28rem] lg:h-[28rem]">
            <div aria-hidden className="absolute inset-[18%] rounded-full bg-primary/15 blur-3xl" />

            {/* Hub */}
            <div className="absolute inset-[30%] rounded-full bg-card border border-primary/20 shadow-[0_0_0_10px_hsl(var(--lavender-light))] flex flex-col items-center justify-center text-center p-2">
              <span className="font-serif text-3xl sm:text-4xl font-bold bg-gradient-brand bg-clip-text text-transparent">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-muted-foreground">
                Sectors
              </span>
            </div>

            {/* Rotating orbit */}
            <motion.div className="absolute inset-0" animate={{ rotate: -step * STEP_DEG }} transition={spin}>
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-primary/40" aria-hidden>
                <circle cx="50" cy="50" r={RADIUS} fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1.5 2" />
              </svg>

              {results.map((r, i) => {
                const rad = (i * STEP_DEG * Math.PI) / 180;
                const isActive = i === active;
                return (
                  <motion.button
                    key={r.label}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`${r.sector}: ${r.value}% ${r.label}`}
                    aria-current={isActive}
                    className="absolute rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    style={{
                      left: `${50 - RADIUS * Math.sin(rad)}%`,
                      top: `${50 + RADIUS * Math.cos(rad)}%`,
                      x: "-50%",
                      y: "-50%",
                    }}
                    animate={{ rotate: step * STEP_DEG }}
                    transition={spin}
                  >
                    <span
                      className={cn(
                        "flex items-center justify-center rounded-full border transition-all duration-500",
                        isActive
                          ? "w-20 h-20 sm:w-24 sm:h-24 bg-gradient-brand border-transparent text-white shadow-xl shadow-primary/40"
                          : "w-12 h-12 sm:w-14 sm:h-14 bg-card border-border text-primary shadow-md hover:border-primary/40",
                      )}
                    >
                      {isActive ? (
                        <CountUp
                          key={step}
                          value={r.value}
                          suffix="%"
                          className="font-serif text-xl sm:text-2xl font-bold"
                        />
                      ) : (
                        <r.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      )}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          {/* Active result: sector photo with the stat beneath */}
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            <div className="rounded-3xl bg-card border border-border shadow-xl shadow-primary/10 overflow-hidden" aria-live="polite">
              <div className="relative aspect-[16/10] bg-lavender-light">
                <AnimatePresence initial={false}>
                  <motion.img
                    key={step}
                    src={current.image}
                    alt={`${current.sector} team at work`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                  />
                </AnimatePresence>
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-card/90 backdrop-blur px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-md">
                  <current.icon className="w-4 h-4 text-primary" />
                  {current.sector}
                </span>
              </div>

              <div className="relative h-32 sm:h-28 px-6 sm:px-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    className="absolute inset-0 px-6 sm:px-8 flex items-center gap-5"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <span className="shrink-0 font-serif text-4xl sm:text-5xl font-bold leading-none bg-gradient-brand bg-clip-text text-transparent">
                      {current.value}%
                    </span>
                    <p className="font-serif text-lg sm:text-xl font-bold text-accent-foreground leading-snug">
                      {current.label}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Progress dots */}
            <div className="mt-6 flex justify-center lg:justify-start gap-2">
              {results.map((r, i) => (
                <button
                  key={r.label}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show ${r.sector}: ${r.label}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === active ? "w-6 bg-primary" : "w-2 bg-primary/25 hover:bg-primary/50",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenImpact;
