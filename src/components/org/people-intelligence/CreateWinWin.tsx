import { Fragment } from "react";
import { ChevronRight, Eye, HeartHandshake, Rocket } from "lucide-react";
import { Reveal, SectionHeading } from "./shared";
import growthPillarsImage from "@/assets/org/employee-growth-pillars.png";

const shifts = [
  { icon: Eye, label: "Awareness" },
  { icon: HeartHandshake, label: "Acceptance" },
  { icon: Rocket, label: "Action" },
];

const ShiftPath = () => (
  <ol className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-1.5 sm:gap-3">
    {shifts.map(({ icon: Icon, label }, i) => (
      <Fragment key={label}>
        {i > 0 && (
          <li aria-hidden className="flex justify-center text-primary/60">
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </li>
        )}
        <li className="flex flex-col items-center gap-2 rounded-2xl bg-card border border-primary/20 shadow-md shadow-primary/10 px-2 py-4 sm:py-5 text-center">
          <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-brand text-white flex items-center justify-center shadow-lg shadow-primary/30">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </span>
          <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-muted-foreground">
            Step {i + 1}
          </span>
          <span className="font-serif text-base sm:text-xl font-bold bg-gradient-brand bg-clip-text text-transparent">
            {label}
          </span>
        </li>
      </Fragment>
    ))}
  </ol>
);

const CreateWinWin = () => (
  <section className="relative overflow-hidden py-16 md:py-24 px-6 lg:px-16">
    <div className="container mx-auto max-w-7xl grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-12 items-center">
      <div>
        <SectionHeading title="Employee Empowerment Framework" align="left" className="mb-8 md:mb-8" />

        <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            Employees don't leave their personalities at the office gate. Their natural ways of
            working become the invisible engine shaping culture, collaboration and performance.
          </p>
          <p>
            Our Psychodiagnostics model builds{" "}
            <strong className="text-primary">Awareness, Acceptance and Action</strong> in the
            workforce and mobilizes their individual journey into a powerful and validated thematic
            growth engine for the organisation.
          </p>
        </div>

        <Reveal className="mt-8">
          <ShiftPath />
        </Reveal>
      </div>

      <Reveal className="relative">
        <div aria-hidden className="absolute inset-[10%] rounded-full bg-primary/15 blur-3xl" />
        <img
          src={growthPillarsImage}
          alt="Employee at the centre of Emotional Regulation, Emotional Intelligence and Personality Analysis"
          width={1774}
          height={887}
          // The source has wide empty margins either side; crop them so the text renders larger.
          className="relative w-full aspect-[4/3] object-cover object-center rounded-3xl mix-blend-multiply"
          loading="lazy"
        />
      </Reveal>
    </div>

    {/* Adoption rate */}
    <Reveal className="container mx-auto max-w-3xl mt-12">
      <div className="relative flex items-center gap-5 rounded-2xl bg-card border border-border shadow-lg shadow-primary/10 p-5 md:p-6 overflow-hidden">
        <span aria-hidden className="absolute left-0 inset-y-0 w-1.5 bg-gradient-brand" />
        <span aria-hidden className="shrink-0 font-serif text-3xl md:text-4xl font-bold leading-none bg-gradient-brand bg-clip-text text-transparent whitespace-nowrap">
          35% - 60%
        </span>
        <p className="text-sm md:text-base font-semibold text-accent-foreground leading-snug">
          Proven adoption rate of 35% - 60% is a testimony of employee belief in conscious growth
          journey for self.
        </p>
      </div>
    </Reveal>
  </section>
);

export default CreateWinWin;
