import { motion } from "framer-motion";
import { BarChart3, Banknote, Handshake, LineChart, RefreshCw, SearchCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./shared";

type Pillar = { title: string; tagline: string; text: string };

const businessPotential: Pillar[] = [
  {
    title: "Business Impact",
    tagline: "Topline growth",
    text: "Better performance, engagement and employee effectiveness contribute to stronger business outcomes and sustained topline growth.",
  },
  {
    title: "Cost Optimisation",
    tagline: "Bottomline optimisation",
    text: "Lower attrition and better-targeted investments,, while directing spend to areas that deliver measurable RoI.",
  },
  {
    title: "Industry Benchmarking",
    tagline: "Achievement of organisation goals",
    text: "Researched benchmarks measure team capability against goals, for evaluation & improvisation.",
  },
];

const peoplePotential: Pillar[] = [
  {
    title: "People Analytics",
    tagline: "Bottom-up development agenda",
    text: "Indices across business metrics & frameworks solve the WHY, as employees lead their own growth.",
  },
  {
    title: "Employee Lifecycle Management",
    tagline: "Proactive, not reactive",
    text: "Challenges addressed across the employee journey, building trust and synergy before issues escalate.",
  },
  {
    title: "Leadership",
    tagline: "Aligned with core purpose",
    text: "Empathetic, purpose-led leaders drive cohesive strategy execution and authentic inspiration.",
  },
];

// Clockwise from the top-left, matching the slide's cycle.
const cycleNodes = [
  { icon: LineChart, angle: -30 },
  { icon: BarChart3, angle: 30 },
  { icon: Handshake, angle: 90 },
  { icon: RefreshCw, angle: 150 },
  { icon: SearchCheck, angle: 210 },
  { icon: Banknote, angle: 270 },
];

const PillarList = ({
  heading,
  items,
  side,
}: {
  heading: string;
  items: Pillar[];
  side: "left" | "right";
}) => (
  <div className={cn("space-y-7 text-left max-w-md w-full mx-auto", side === "left" ? "lg:mr-0" : "lg:ml-0")}>
    <h3 className="font-serif italic text-lg md:text-xl font-bold tracking-wide uppercase text-primary">
      {heading}
    </h3>
    {items.map((item, i) => (
      <Reveal key={item.title} delay={i * 0.1}>
        <h4 className="font-serif text-lg font-bold text-accent-foreground">{item.title}</h4>
        <p className="text-sm italic font-semibold text-primary">{item.tagline}</p>
        <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{item.text}</p>
      </Reveal>
    ))}
  </div>
);

const CycleDiagram = () => {
  const radius = 42; // % of the square
  return (
    <div className="relative w-[18rem] h-[18rem] sm:w-[21rem] sm:h-[21rem] mx-auto">
      {/* Rotating dashed ring */}
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full text-primary/50"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="50" cy="50" r={radius} fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2.5" />
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <path
            key={a}
            d="M48.6 6.4 L51 8 L48.6 9.6"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="1"
            strokeLinecap="round"
            transform={`rotate(${a} 50 50)`}
          />
        ))}
      </motion.svg>

      {cycleNodes.map(({ icon: Icon, angle }) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <span
            key={angle}
            className="absolute w-14 h-14 sm:w-16 sm:h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-card border border-border shadow-md flex items-center justify-center"
            style={{ left: `${50 + radius * Math.sin(rad)}%`, top: `${50 - radius * Math.cos(rad)}%` }}
          >
            <span className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-lavender-light flex items-center justify-center">
              <Icon className="w-5 h-5 text-lavender-deep" />
            </span>
          </span>
        );
      })}

      {/* Hub */}
      <div className="absolute inset-[27%] rounded-full bg-accent-foreground text-white flex items-center justify-center text-center p-3 shadow-[0_0_0_10px_hsl(var(--lavender-light)),0_20px_40px_-12px_hsl(var(--accent-foreground)/0.6)]">
        <span className="font-serif font-bold text-sm sm:text-base leading-tight">
          People Intelligence System
        </span>
      </div>
    </div>
  );
};

const WhatIsUnique = () => (
  <section className="py-16 md:py-20 px-6 lg:px-16">
    <div className="container mx-auto max-w-7xl">
      <SectionHeading
        title="Building Business + People's Potential – Win-Win"
        intro={
          <p className="text-justify md:text-center">
            We don't choose between business results and people development – we achieve both, in
            a <em className="font-bold text-primary">virtuous cycle</em> where individual thriving
            and organisational success lift each other. As people grow in self-awareness and
            emotional regulation, they perform better and experience greater well-being, while
            stronger business results enable greater investment in people development.
          </p>
        }
        className="max-w-5xl"
      />

      <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-12 items-start">
        <div className="order-2 lg:order-1">
          <PillarList heading="Business Potential" items={businessPotential} side="left" />
        </div>

        <div className="order-1 lg:order-2 flex flex-col items-center gap-4">
          <p className="text-sm italic text-muted-foreground text-center">
            As results improve, <strong className="text-primary">organisations reinvest in people</strong>
          </p>
          <CycleDiagram />
          <p className="text-sm italic text-muted-foreground text-center">
            As people grow, <strong className="text-primary">performance &amp; well-being rise</strong>
          </p>
        </div>

        <div className="order-3">
          <PillarList heading="People Potential" items={peoplePotential} side="right" />
        </div>
      </div>
    </div>
  </section>
);

export default WhatIsUnique;
