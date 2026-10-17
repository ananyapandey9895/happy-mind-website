import { BadgeCheck, EyeOff, Lock } from "lucide-react";
import { Reveal, SectionHeading } from "./shared";

const cards = [
  { icon: Lock, title: "Confidential", text: "Individual reports go to the employee only" },
  { icon: EyeOff, title: "Anonymous", text: "Employees access support privately; leaders see only anonymised insights." },
  { icon: BadgeCheck, title: "Evidence-Based", text: "CBT-based methods and validated frameworks" },
];

const PrivacyScience = () => (
  <section className="py-16 md:py-20 px-6 lg:px-16">
    <div className="container mx-auto max-w-7xl">
      <SectionHeading eyebrow="Privacy & Science" title="Safe For Employees. Solid For Leaders." />

      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {cards.map((card, i) => (
          <Reveal
            key={card.title}
            delay={i * 0.08}
            className="h-full rounded-3xl bg-card border border-border p-7 shadow-sm hover:shadow-xl hover:border-primary/30 transition-shadow"
          >
            <span className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-lg shadow-primary/30">
              <card.icon className="w-6 h-6 text-white" />
            </span>
            <h3 className="font-serif text-xl font-bold text-accent-foreground mt-6">{card.title}</h3>
            <p className="text-sm md:text-base text-muted-foreground mt-2 leading-relaxed">{card.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default PrivacyScience;
