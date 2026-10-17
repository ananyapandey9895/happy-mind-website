import { ChevronRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./shared";

export type LetterStep = { letter: string; icon: LucideIcon; title: string; text?: string };

// Site lavender for letters, rule and arrows; light-grey discs with navy icons.
const LETTER = "hsl(var(--primary) / 0.85)";
const RULE = "hsl(var(--lavender-medium))";
const ARROW = "hsl(var(--lavender-deep))";

/**
 * Big-letter model (C.O.R.E. / A.A.A.). Each disc is centred on the letter's
 * baseline, and one thin rule runs through all disc centres.
 * The negative top margin trims the font's ascender space so the cap sits at the top of the box.
 */
const sizes = {
  // 12.5rem letter -> baseline at 146px
  regular: {
    letter: "text-[12.5rem] -mt-[68px]",
    box: "h-[186px]",
    disc: "w-20 h-20 top-[106px]",
    icon: "w-9 h-9",
    rule: "top-[146px]",
    arrow: "top-[138px]",
  },
  // 8rem letter (mobile) -> baseline 93px; 10.5rem (sm+) -> baseline 122px
  compact: {
    letter: "text-[8rem] -mt-[44px] sm:text-[10.5rem] sm:-mt-[58px]",
    box: "h-[121px] sm:h-[158px]",
    disc: "w-14 h-14 top-[65px] sm:w-[4.5rem] sm:h-[4.5rem] sm:top-[86px]",
    icon: "w-6 h-6 sm:w-8 sm:h-8",
    rule: "top-[93px] sm:top-[122px]",
    arrow: "top-[85px] sm:top-[114px]",
  },
};

const LetterModel = ({
  steps,
  compact = false,
  className,
}: {
  steps: LetterStep[];
  compact?: boolean;
  className?: string;
}) => {
  const s = compact ? sizes.compact : sizes.regular;
  return (
    <ol className={cn("grid", compact ? "grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4 gap-y-14", className)}>
      {steps.map((step, i) => {
        const last = i === steps.length - 1;
        return (
          <li key={step.title} className="relative">
            <Reveal delay={i * 0.12} className={compact ? "px-1" : "px-4 lg:px-7"}>
              <div className={cn("relative flex items-start justify-center", s.box)}>
                <span
                  aria-hidden
                  className={cn("font-sans font-black leading-[0.8] select-none", s.letter)}
                  style={{ color: LETTER }}
                >
                  {step.letter}
                </span>

                <span
                  aria-hidden
                  className={cn(
                    "absolute h-px",
                    s.rule,
                    compact ? "-left-1 -right-1" : "hidden lg:block -left-7 -right-7",
                  )}
                  style={{ backgroundColor: RULE }}
                />
                {!last && (
                  <ChevronRight
                    aria-hidden
                    strokeWidth={3}
                    className={cn("absolute w-4 h-4 -right-2", s.arrow, !compact && "hidden lg:block")}
                    style={{ color: ARROW }}
                  />
                )}

                <span
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 rounded-full flex items-center justify-center",
                    "bg-[#f2f2f5] shadow-[0_10px_22px_-8px_rgba(25,25,60,0.45)]",
                    s.disc,
                  )}
                >
                  <step.icon strokeWidth={1.75} className={cn("text-[#1d1b4b]", s.icon)} />
                </span>
              </div>

              <h3
                className={cn(
                  "font-bold text-[#1a1a33] text-center",
                  compact ? "mt-4 text-base sm:text-xl" : "mt-7 text-xl lg:min-h-[3.5rem]",
                )}
              >
                {step.title}
              </h3>
              {step.text && (
                <p className="text-base text-[#3d3d4f] mt-4 leading-relaxed text-left">{step.text}</p>
              )}
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
};

export default LetterModel;
