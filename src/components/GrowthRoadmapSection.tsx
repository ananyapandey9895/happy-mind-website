import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import discoverImg from "@/assets/roadmap/discover.jpg";
import understandImg from "@/assets/roadmap/understand.jpg";
import personaliseImg from "@/assets/roadmap/personalise.jpg";
import actImg from "@/assets/roadmap/act.jpg";
import connectImg from "@/assets/roadmap/connect.jpg";
import engageImg from "@/assets/roadmap/engage.jpg";
import growImg from "@/assets/roadmap/grow.jpg";

const steps = [{
  image: discoverImg,
  title: "Discover",
  description: "Understand yourself and your needs."
}, {
  image: understandImg,
  title: "Understand",
  description: "Gain insights through assessment and reflection."
}, {
  image: personaliseImg,
  title: "Personalise",
  description: "Get tailored recommendations for your growth."
}, {
  image: actImg,
  title: "Act",
  description: "Use tools, resources and expert support every step of the way."
}, {
  image: connectImg,
  title: "Connect",
  description: "Build meaningful connections with community and experts."
}, {
  image: engageImg,
  title: "Engage",
  description: "Join games, activities and challenges that build habits."
}, {
  image: growImg,
  title: "Grow",
  description: "Track progress, celebrate milestones and keep evolving."
}];

const GrowthRoadmapSection = () => {
  return <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 text-center animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-primary">Your Growth Roadmap</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:items-start lg:justify-between gap-x-4 gap-y-10 lg:gap-0">
          {steps.map((step, index) => {
          return <Fragment key={step.title}>
                <div className="group flex flex-col items-center text-center lg:flex-1 lg:min-w-0">
                  <img src={step.image} alt={step.title} loading="lazy" className="w-28 h-28 sm:w-32 sm:h-32 xl:w-36 xl:h-36 rounded-full object-cover mix-blend-multiply transition-transform duration-300 group-hover:-translate-y-1" />
                  <h3 className="mt-5 text-lg sm:text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-[11rem]">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && <div className="hidden lg:flex items-center justify-center h-32 xl:h-36 shrink-0 px-1" aria-hidden="true">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </span>
                  </div>}
              </Fragment>;
        })}
        </div>
      </div>
    </section>;
};

export default GrowthRoadmapSection;
