import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal, SectionHeading } from "./shared";

const faqs = [
  {
    question: "What is HappiMynd's People Intelligence approach?",
    answer:
      "HappiMynd uses behavioural and psychological insights to create a psychodiagnostics profile of the organisation, influencing performance, culture, retention, leadership and collaboration - and turn them into actionable growth ideas.",
  },
  {
    question: "Is it a complex process to implement People Intelligence in any organisation?",
    answer:
      "Absolutely not. It is a 60-minute structured online engagement with the employees combining an interactive workshop, a short self-check-in, confidential individual insights for them and within 2 weeks you get an anonymised organisation-level people intelligence consulting report.",
  },
  {
    question: "What is the validation of People Intelligence System?",
    answer:
      "This system emerges out of multiple years of research on models, studies and tools used globally in the field of psychology. The knowledge gained is then applied through a psychodiagnostics process. Our assets carry an R-score of 0.8 and above.",
  },
  {
    question: "Is employee information kept confidential?",
    answer:
      "Yes. Employee data is kept completely confidential. Individual reports provide personalised insights to employees only. While consulting reports use anonymised workforce analytics to identify broader people patterns. We follow data security protocols and carry three layered security over AWS.",
  },
  {
    question: "Can HappiMynd's programs be scaled and customised for different organisations?",
    answer:
      "Yes. HappiMynd creates customised journeys around an organisation's specific people and business concerns, with programmes designed to work across sectors and workforce sizes. We have supported start ups to stalwarts in our journey.",
  },
  {
    question: "What support does HappiMynd offer beyond assessment and insights?",
    answer:
      "The ecosystem combines People Intelligence Consulting, employee assistance, leadership programmes, DEI & behavioural workshops, self-help tools, growth programmes and confidential expert support.",
  },
  {
    question: "How does HappiMynd connect employee growth with business outcomes?",
    answer:
      "The approach moves employees from Awareness → Acceptance → Action, translating individual growth into stronger performance, engagement, collaboration and organisational outcomes.",
  },
  {
    question: "Is there any ongoing support available for employees in this process?",
    answer:
      "Yes. Organisations can opt for giving online personalised growth journeys to each and every employee of the organisation, in a multi-language environment. It's safe and voluntary for them and very affordable for the organisation.",
  },
];

const OrgFaq = () => (
  <section className="py-16 md:py-20 px-6 lg:px-16">
    <div className="container mx-auto max-w-4xl">
      <SectionHeading eyebrow="FAQs" title="Frequently Asked Questions" />

      <Reveal>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${i}`}
              className="rounded-2xl border border-border bg-card px-5 md:px-6 shadow-sm data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-serif text-base md:text-lg font-bold text-foreground hover:no-underline hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);

export default OrgFaq;
