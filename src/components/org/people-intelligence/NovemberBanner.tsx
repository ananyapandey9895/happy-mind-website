import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Sparkles, MessageSquareHeart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import mensDay from "@/assets/org/november-mens-day.png";
import leadershipDay from "@/assets/org/november-leadership-day.png";
import selfCareWeek from "@/assets/org/november-self-care-week.png";

const benefits = [
  {
    icon: TrendingUp,
    title: "MEASURABLE ENGAGEMENT",
    description: "From passive attendance to active participation.",
  },
  {
    icon: Sparkles,
    title: "GREATER WELLBEING & RESILIENCE",
    description: "Less stress. More energy. Lasting habits.",
  },
  {
    icon: MessageSquareHeart,
    title: "STIGMA-FREE, INCLUSIVE WORKPLACES",
    description: "Open conversations. Stronger connections.",
  },
];

const NovemberBanner = () => {
  return (
    <section className="relative overflow-hidden w-full">
      {/* Lavender backdrop matching the website theme */}
      <div className="bg-gradient-to-b from-[#F5F1FD] via-[#ECE5FC] to-[#E5DBFB] pt-8 pb-0">
        {/* Ambient decorative blur glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-lavender-deep/15 blur-3xl" />
        </div>

        {/* Top UN announcement badge */}
        <div className="relative text-center px-4 mb-3">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-card/85 backdrop-blur-sm border border-primary/25 rounded-full px-4 py-1.5 shadow-sm"
          >
            <Star className="w-3.5 h-3.5 text-primary fill-primary" />
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-primary uppercase">
              United Nations Has Announced
            </span>
          </motion.div>
        </div>

        {/* Main heading */}
        <div className="relative text-center px-6 mb-2">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#191928] tracking-tight leading-tight"
          >
            THE FUTURE IS EVERYONE
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-1.5 text-lg sm:text-xl md:text-2xl font-bold bg-gradient-brand bg-clip-text text-transparent"
          >
            Does your workplace reflect that?
          </motion.p>
        </div>

        {/* Subtitle hairline divider with label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative flex items-center justify-center gap-3 px-6 mb-2"
        >
          <span className="hidden sm:block h-[1.5px] w-14 bg-gradient-to-r from-transparent via-primary/30 to-primary/60 rounded-full" />
          <p className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.22em] text-[#6E4BB8] uppercase">
            November 2026 · Three Key Themes · Inclusive Impact
          </p>
          <span className="hidden sm:block h-[1.5px] w-14 bg-gradient-to-l from-transparent via-primary/30 to-primary/60 rounded-full" />
        </motion.div>

        {/* Intro text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative text-center text-xs sm:text-sm md:text-base text-foreground/75 max-w-3xl mx-auto px-6 mb-8 leading-relaxed"
        >
          Organisations celebrate many occasions at work, yet still miss many
          hearts to connect with…{" "}
          <span className="font-bold text-[#191928]">
            we wish to warm these hearts on your behalf!
          </span>
        </motion.p>

        {/* Three Themed Cards */}
        <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {/* Card 1 - International Men's Day */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="bg-card rounded-2xl p-4 sm:p-4.5 border border-primary/15 shadow-card hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-stretch gap-4"
            >
              <div className="w-full sm:w-[130px] md:w-[120px] lg:w-[140px] flex-shrink-0">
                <img
                  src={mensDay}
                  alt="International Men's Day - Men discussing at work"
                  className="w-full h-44 sm:h-full object-cover rounded-xl shadow-sm"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center text-left min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-sm text-primary font-bold">♂</span>
                  <h3 className="font-bold text-xs sm:text-sm text-[#191928] truncate">
                    International Men's Day
                  </h3>
                </div>
                <p className="text-xs font-bold text-primary mb-2">
                  19th November
                </p>
                <div className="w-full border-b border-dashed border-primary/20 mb-2.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-bold text-[#D02670]">
                    More than 75%
                  </span>{" "}
                  of the workforce in India are Men, who are carrying so many
                  emotional overloads. This time give them their{" "}
                  <span className="font-extrabold text-[#D02670]">
                    SAFE SPACE
                  </span>
                  .
                </p>
              </div>
            </motion.div>

            {/* Card 2 - Leadership Day */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
              className="bg-card rounded-2xl p-4 sm:p-4.5 border border-primary/15 shadow-card hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-stretch gap-4"
            >
              <div className="w-full sm:w-[130px] md:w-[120px] lg:w-[140px] flex-shrink-0">
                <img
                  src={leadershipDay}
                  alt="Leadership Day - Woman manager leading a presentation"
                  className="w-full h-44 sm:h-full object-cover rounded-xl shadow-sm"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center text-left min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-sm text-primary font-bold">👥</span>
                  <h3 className="font-bold text-xs sm:text-sm text-[#191928] truncate">
                    Leadership Day
                  </h3>
                </div>
                <p className="text-xs font-bold text-primary mb-2">
                  16th November
                </p>
                <div className="w-full border-b border-dashed border-primary/20 mb-2.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-bold text-[#D02670]">
                    58%
                  </span>{" "}
                  of leaders/managers in India experience severe burnout and yet
                  they are unable to share. It's the occasion to recognise and
                  support them with{" "}
                  <span className="font-extrabold text-[#D02670]">
                    RESILIENCE
                  </span>
                  .
                </p>
              </div>
            </motion.div>

            {/* Card 3 - Self Care Week */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.55 }}
              className="bg-card rounded-2xl p-4 sm:p-4.5 border border-primary/15 shadow-card hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-stretch gap-4"
            >
              <div className="w-full sm:w-[130px] md:w-[120px] lg:w-[140px] flex-shrink-0">
                <img
                  src={selfCareWeek}
                  alt="Self Care Week - Mindfulness and meditation in the office"
                  className="w-full h-44 sm:h-full object-cover rounded-xl shadow-sm"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center text-left min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-sm text-primary font-bold">♡</span>
                  <h3 className="font-bold text-xs sm:text-sm text-[#191928] truncate">
                    Self Care Week
                  </h3>
                </div>
                <p className="text-xs font-bold text-primary mb-2">
                  16-22 November
                </p>
                <div className="w-full border-b border-dashed border-primary/20 mb-2.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Year's theme is{" "}
                  <span className="font-extrabold text-[#191928]">
                    MIND & BODY
                  </span>
                  , but{" "}
                  <span className="font-bold text-[#D02670]">
                    42%
                  </span>{" "}
                  Indians deprioritize their health, which is breaking the first
                  layer of defense. Time to do{" "}
                  <span className="font-extrabold text-[#D02670]">
                    SELF REFLECTION
                  </span>{" "}
                  & take action.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Motivational question CTA tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative text-center text-sm sm:text-base font-medium text-foreground/80 px-6 pb-6"
        >
          We are geared up to make the difference this 2026…{" "}
          <span className="font-bold text-[#C82A7A]">
            are you?
          </span>
        </motion.p>
      </div>

      {/* Deep purple/lavender brand footer bar */}
      <div className="bg-gradient-to-r from-[#2B1B54] via-[#3B2570] to-[#2B1B54] text-white py-4 px-4 sm:px-8 border-t border-primary/20 shadow-lg">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8">
            {/* Left title */}
            <div className="flex-shrink-0 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/20 pb-3 lg:pb-0 lg:pr-6">
              <p className="font-bold text-[11px] sm:text-xs tracking-[0.14em] uppercase leading-tight text-white/95">
                What Your
              </p>
              <p className="font-bold text-[11px] sm:text-xs tracking-[0.14em] uppercase leading-tight text-white/95">
                Organisation
              </p>
              <p className="font-bold text-[11px] sm:text-xs tracking-[0.14em] uppercase leading-tight text-white/95">
                Gains
              </p>
            </div>

            {/* Middle 3 benefit chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-[11px] font-extrabold uppercase tracking-wide text-white leading-tight">
                        {benefit.title}
                      </p>
                      <p className="text-[10px] text-white/70 leading-snug mt-0.5">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right CTA button */}
            <div className="flex-shrink-0">
              <Button
                size="lg"
                className="rounded-full px-6 py-5 text-xs sm:text-sm font-bold bg-gradient-to-r from-[#D02670] to-[#9933CC] hover:from-[#B81E60] hover:to-[#8528B5] text-white shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center gap-2"
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-contact-form"))
                }
              >
                <span>CONNECT WITH US TODAY</span>
                <span className="w-6 h-6 rounded-full bg-white text-[#D02670] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NovemberBanner;
