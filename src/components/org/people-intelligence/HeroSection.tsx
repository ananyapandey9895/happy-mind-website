import { motion } from "framer-motion";
import { ContactCta, MediaSlot } from "./shared";
import { heroImage } from "./pending-content";

const HeroSection = () => (
  <section className="relative overflow-hidden py-14 md:py-20 px-6 lg:px-16">
    {/* Ambient background: soft glows */}
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-40 right-0 w-[34rem] h-[34rem] rounded-full bg-lavender-deep/15 blur-3xl" />
    </div>

    <div className="relative container mx-auto max-w-7xl">
      <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold leading-[1.1] tracking-tight text-accent-foreground">
            Decoding Organisational Complexities{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              Through People Intelligence System
            </span>
          </h1>
          <div className="mt-8 flex items-center gap-2 justify-center lg:justify-start" aria-hidden>
            <span className="h-1.5 w-20 rounded-full bg-gradient-brand" />
            <span className="h-1.5 w-6 rounded-full bg-primary/40" />
            <span className="h-1.5 w-3 rounded-full bg-primary/20" />
          </div>
          <div className="mt-8">
            <ContactCta>Connect With Us</ContactCta>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="order-1 lg:order-2 relative mx-auto w-full max-w-sm"
        >
          {/* Layered frame behind the photo */}
          <div aria-hidden className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] bg-gradient-brand opacity-90" />
          <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-primary/20 blur-2xl" />

          <MediaSlot
            src={heroImage}
            alt="HappiMynd People Intelligence System — team collaborating"
            label="Hero image from PPT slide 1"
            className="relative w-full aspect-[3/4] rounded-[2rem] ring-4 ring-white shadow-2xl shadow-accent-foreground/25"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
