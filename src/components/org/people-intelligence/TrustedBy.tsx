import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Reveal, SectionHeading } from "./shared";

const testimonials = [
  {
    quote:
      "Thank you for supporting us with a new vision. Your belief pushed us to think sharper and deliver many industry firsts programs from all levels",
    role: "Employee Engagement Head",
    company: "Flipkart",
  },
  {
    quote:
      "Every collaboration surfaced new challenges and even better breakthroughs. Grateful for our journey together.",
    role: "HR Business Partner",
    company: "Google",
  },
  {
    quote:
      "Never came across this kind of framework and model. Applying human science of psychology in solving complex business problems - real intelligence",
    role: "Chief Business Officer",
    company: "Axis Max Life",
  },
  {
    quote:
      "Our employees are benefiting from the HappiMynd tools, while management reports help us identify where to address employees.",
    role: "GM HR",
    company: "Nuvoco",
  },
  {
    quote:
      "Really love HappiMynd's approach to understanding how nuanced every employee is, and how that shapes overall performance.",
    role: "Senior HR Leader",
    company: "Microsoft",
  },
];

const AUTOPLAY_MS = 2500;

const TrustedBy = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || paused) return;
    const id = window.setInterval(() => api.scrollNext(), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [api, paused]);

  return (
    <section className="py-16 md:py-20 px-6 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        <SectionHeading
          title={
            <>
              Leadership <span className="text-primary">Speaks</span>
            </>
          }
        />

        <Reveal>
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-label="Client testimonials"
          >
            <CarouselContent className="-ml-6 py-4">
              {testimonials.map((t) => (
                <CarouselItem key={t.company} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                  <figure className="h-full flex flex-col rounded-3xl bg-card border border-border p-7 shadow-md hover:shadow-xl hover:border-primary/30 transition-shadow">
                    <Quote className="w-9 h-9 text-primary fill-primary/15" />
                    <blockquote className="mt-4 text-base text-foreground/85 leading-relaxed flex-1">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-6 pt-5 border-t border-border">
                      <span className="block italic text-sm text-muted-foreground">{t.role}</span>
                      <span className="block font-bold text-primary">{t.company}</span>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controls sit under the track so they never overflow on small screens */}
            <div className="mt-6 flex items-center justify-center gap-5">
              <CarouselPrevious className="static translate-y-0 h-11 w-11 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground" />
              <div className="flex items-center gap-2">
                {testimonials.map((t, i) => (
                  <button
                    key={t.company}
                    type="button"
                    onClick={() => api?.scrollTo(i)}
                    aria-label={`Show testimonial ${i + 1}`}
                    aria-current={selected === i}
                    className={cn(
                      "h-2.5 rounded-full transition-all duration-300",
                      selected === i ? "w-8 bg-primary" : "w-2.5 bg-primary/25 hover:bg-primary/50",
                    )}
                  />
                ))}
              </div>
              <CarouselNext className="static translate-y-0 h-11 w-11 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
};

export default TrustedBy;
