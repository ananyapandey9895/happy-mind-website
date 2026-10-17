/**
 * Content still to be supplied for the Organisation page.
 * Every section renders cleanly while these are empty — fill them in as they arrive.
 *
 * Images: drop the file into src/assets/org/ and import it here, e.g.
 *   import heroPic from "@/assets/org/hero.png";
 *   export const heroImage: string | null = heroPic;
 */

import orgHero from "@/assets/org/org-hero.png";
import redRoads1 from "@/assets/org/red-roads-1.jpg";
import redRoads2 from "@/assets/org/red-roads-2.jpg";
import nuvoco1 from "@/assets/org/nuvoco-1.jpg";
import nuvoco2 from "@/assets/org/nuvoco-2.jpg";

/** Section 1 — the header picture from the PPT title slide. */
export const heroImage: string | null = orgHero;

/** Section 12 — Red Roads programme pictures showing the large crowd. */
export const redRoadsImages: string[] = [redRoads1, redRoads2];

/** Section 12 — Nuvoco workshop pictures, shown after the Red Roads photos (a 3rd is still to come). */
export const workshopImages: string[] = [nuvoco1, nuvoco2];

/** Section 6 — the 6 questions given to Ayushi, one per index. */
export const indexQuestions: Record<
  | "Predictive Hiring"
  | "Performance Potential"
  | "Retention Propensity"
  | "Personality & Role Alignment"
  | "Team Unit Effectiveness"
  | "Workplace Inclusion",
  string
> = {
  "Predictive Hiring": "How likely are the future hires to succeed in the respective role?",
  "Performance Potential": "How much performance/growth and sales capacity does your team carry?",
  "Retention Propensity":
    "What is the likelihood of sustained organizational commitment from the current hierarchy layers?",
  "Personality & Role Alignment":
    "How effectively is your organisation/function placed on the right person for the right job fitment?",
  "Team Unit Effectiveness": "How effectively does the manager/team unit function collectively?",
  "Workplace Inclusion":
    "How capable & adaptable is the leadership/team of creating a diversified & inclusive environment?",
};
