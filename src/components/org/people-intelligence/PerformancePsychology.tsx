import { Ban, Brain, Heart, Sparkles } from "lucide-react";
import { CountUp, Reveal, SectionHeading } from "./shared";
import { cn } from "@/lib/utils";
import { redRoadsImages, workshopImages } from "./pending-content";

const challenges = [
  {
    icon: Heart,
    value: 63,
    stat: "Employees are more engaged when they feel respected.",
    title: "Mutual Respect",
    subtitle: "For Creating Generative Teams",
    text: "Build high-trust teams where respect drives collaboration and team performance.",
  },
  {
    icon: Brain,
    value: 78,
    stat: "Of Indian employees face brain fog due to repeated interruptions at work.",
    title: "Brain Fog",
    subtitle: "Killer Of Productivity",
    text: "Help employees reduce mental fatigue, improve clarity and make better decisions.",
  },
  {
    icon: Ban,
    value: 80,
    stat: "Of employees face microaggressor behaviour patterns at work.",
    title: "Micro Aggressors",
    subtitle: "Silent Disengagement At Workplace",
    text: "Transform everyday workplace behaviours into more inclusive, respectful interactions.",
  },
];

const Highlight = ({ children }: { children: string }) => (
  <strong className="inline-block rounded-lg bg-gradient-brand text-white px-2 py-0.5 font-bold">{children}</strong>
);

// Spans two of the three columns: the first photo, plus the last when the count is even so rows stay full.
const isWide = (i: number, count: number) => i === 0 || (count % 2 === 0 && i === count - 1);

const PerformancePsychology = () => {
  const photos = [
    ...redRoadsImages.map((src) => ({ src, alt: "Red Roads programme — large group session" })),
    ...workshopImages.map((src) => ({ src, alt: "HappiMynd workshop with Nuvoco employees" })),
  ];

  return (
    <section className="py-16 md:py-20 px-6 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          title={
            <>
              <span className="text-primary">Performance Enhancement</span> Through Psychology
            </>
          }
          intro={
            <p className="text-foreground/80 leading-loose">
              Younger generations of <Highlight>Gen Z and Millennials</Highlight> have a different
              perspective and challenges at the workplace. We feel there is a need to align with their
              thought process and offer them psychological safety at workplace through{" "}
              <strong className="inline-flex items-center gap-1 rounded-full border-2 border-primary text-primary px-3 py-0.5 font-bold">
                <Sparkles className="w-4 h-4" />
                India's first
              </strong>{" "}
              ever psychological application-based group programs.
            </p>
          }
          className="max-w-5xl"
        />

        {/* Programme photos — zig-zag bento: wide/narrow on top, narrow/wide below (or three across with 5 photos) */}
        <Reveal className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className={cn(
                "group relative overflow-hidden rounded-3xl shadow-lg h-44 sm:h-56 md:h-72",
                isWide(i, photos.length) && "col-span-2",
              )}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </Reveal>

        <div className="mt-8 md:mt-10 grid md:grid-cols-3 gap-5 md:gap-6">
          {challenges.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 0.1}
              className="rounded-3xl bg-card border border-border shadow-xl p-7 text-center"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <c.icon className="w-6 h-6 text-white" />
                </span>
                <CountUp value={c.value} suffix="%" className="font-serif text-5xl font-bold text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{c.stat}</p>
              <div className="my-5 h-px bg-border" />
              <h3 className="font-serif text-2xl font-bold text-primary">{c.title}</h3>
              <p className="font-bold text-accent-foreground mt-1">{c.subtitle}</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformancePsychology;
