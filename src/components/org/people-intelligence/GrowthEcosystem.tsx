import { ClipboardList, Compass, FileText, MessageCircle, Mic, Smartphone } from "lucide-react";
import { Reveal, SectionHeading } from "./shared";
import ecosystemImage from "@/assets/org/conscious-growth-ecosystem.jpeg";

const offerings = [
  {
    icon: Compass,
    title: "Growth Code Sessions",
    text: "Interactive sessions designed to build self-awareness and emotional resilience by helping individuals understand their personal WHY.",
  },
  {
    icon: Mic,
    title: "Growth Webinars & Workshops",
    text: "Themed webinars and workshops embedded in psychology driven problem solving techniques & support.",
  },
  {
    icon: ClipboardList,
    title: "Self-Check-In Assessments",
    text: "Psychodiagnostic tools that provide insights into emotional regulation & personality type, followed by action planning.",
  },
  {
    icon: FileText,
    title: "Confidential Personalised Report & Expert Reading",
    text: "A personalised online report featuring SWOT analysis, root-cause insights, recommended solutions, and measurable action steps to support future growth.",
  },
  {
    icon: Smartphone,
    title: "Self-Help & App-Based Support",
    text: "Access to engaging self-help resources and app-based activities that promote mental well-being, emotional resilience, and personal growth.",
  },
  {
    icon: MessageCircle,
    title: "Confidential Expert Support",
    text: "One-on-one CBT based sessions with experts, providing confidential, personalised guidance and support based on individual needs.",
  },
];

const GrowthEcosystem = () => (
  <section className="py-16 md:py-20 px-6 lg:px-16">
    <div className="container mx-auto max-w-7xl">
      <SectionHeading
        title={
          <>
            Conscious Growth Ecosystem <span className="text-primary">For Employees</span>
          </>
        }
        intro={
          <p>
            HappiMynd's People Intelligence approach identifies the behavioural and psychological
            drivers across workforce segments, enabling a targeted, segment-specific programme
            through our <strong className="text-accent-foreground">PHYGITAL</strong> delivery model.
          </p>
        }
        className="max-w-5xl mb-8 md:mb-8"
      />

      <Reveal>
        <img
          src={ecosystemImage}
          alt="Conscious Growth Ecosystem: HappiLIFE/Quizzard (Proactive), HappiBUDDY (Preventive), Growth Code (Educative), HappiSELF & Games Hub (Preventive) and HappiTALK (Curative)"
          className="w-full max-w-4xl mx-auto h-auto [mask-image:radial-gradient(ellipse_at_center,black_62%,transparent_92%)]"
          loading="lazy"
        />
      </Reveal>

      {/* One strip of compact cards; the description reveals on hover, focus or tap */}
      <ol className="mt-8 flex lg:grid lg:grid-cols-6 gap-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory -mx-6 px-6 lg:mx-0 lg:px-0 pb-4 lg:pb-0">
        {offerings.map((o, i) => (
          <li key={o.title} className="snap-start shrink-0 w-[70%] xs:w-[45%] md:w-[30%] lg:w-auto">
            <Reveal delay={i * 0.06} className="h-full">
              <div
                tabIndex={0}
                className="group relative h-60 rounded-2xl bg-card border border-border shadow-sm overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-ring hover:shadow-xl transition-shadow cursor-default"
              >
                {/* Front */}
                <div className="absolute inset-0 p-5 flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
                      <o.icon className="w-5 h-5 text-white" />
                    </span>
                    <span className="font-bold text-lavender-medium text-2xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-auto font-serif italic font-bold text-accent-foreground leading-snug">
                    {o.title}
                  </h3>
                </div>

                {/* Detail */}
                <div className="absolute inset-0 p-4 flex flex-col justify-center bg-accent-foreground text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 transition-all duration-300">
                  <h3 className="font-serif italic font-bold text-sm text-lavender-medium leading-snug">{o.title}</h3>
                  <p className="text-xs text-white/90 mt-2 leading-relaxed">{o.text}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default GrowthEcosystem;
