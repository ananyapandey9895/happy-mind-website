import jayaAzadImg from "@/assets/team/jaya-azad.png";
import sangeetaImg from "@/assets/team/sangeeta-janardhan.png";
import amitRathiImg from "@/assets/team/amit-rathi-coach.jpg";
import anumehaImg from "@/assets/team/anumeha-sinha.jpg";
import induImg from "@/assets/team/indu-ananth.jpg";
import maheshwariImg from "@/assets/team/maheshwari-jani.jpg";
import nidhiImg from "@/assets/team/nidhi-sharma.jpg";
import sanjeevImg from "@/assets/team/sanjeev-bhatia.jpg";
import jayaShuklaImg from "@/assets/team/jaya-shukla.jpg";

export interface GrowthCoach {
  id: string;
  name: string;
  designation: string;
  city: string;
  expertise: string[];
  coachingLevel: string;
  icfCertified: boolean;
  bio: string;
  summary: string;
  linkedIn: string;
  feesForHM: number;
  photo?: string;
}

export const COACHING_EXPERTISE = [
  "Leadership Development",
  "Executive Coaching",
  "Career Development",
  "Change Management",
  "HR Transformation",
  "Emotional Intelligence",
  "Performance Enhancement",
  "Business Storytelling",
] as const;

export const COACHING_LEVELS = [
  "All",
  "ACC",
  "PCC",
] as const;

export const COACH_CITIES = [
  "Gurugram",
  "Chennai",
  "Bengaluru",
  "New Delhi",
  "Mumbai",
  "NCR",
] as const;

export const GROWTH_COACHES: GrowthCoach[] = [
  {
    id: "amit-rathi",
    name: "Amit Rathi",
    designation: "CXO, Executive & Life Coach | Business Transformation Leader",
    city: "Gurugram",
    expertise: [
      "Executive & Leadership Coaching",
      "Enterprise Thinking",
      "Conscious Growth Expert",
      "Role Transition Expert",
      "Corporate Leadership",
    ],
    coachingLevel: "ACC",
    icfCertified: true,
    bio: "Amit Rathi is an alumnus of IIM Calcutta with over 25 years of general management and CXO leadership experience across Banking, Insurance, Healthcare and Real Estate. ICF-certified coach and a two-time startup founder with profitable businesses, he has managed P&Ls of over \u20b91,500 crore and large team structures in B2C and B2B models. Having held senior roles at Emaar, Max Group, Yes Bank, and ICICI, Amit specializes in executive coaching for mid management and CXOs. He believes in conscious growth model & coachees experience a real shift with his style. He combines strategic business management with transformative coaching to help senior leaders drive performance, navigate complexity, and scale organizational impact.",
    summary: "Amit Rathi \u2013 CXO, Executive & Life Coach | Business Transformation Leader",
    linkedIn: "https://www.linkedin.com/in/amit-rathi-iimc/",
    feesForHM: 5000,
    photo: amitRathiImg,
  },
  {
    id: "jaya-azad",
    name: "Jaya Azad",
    designation: "Leadership & Executive Coach",
    city: "Gurugram, India",
    expertise: [
      "Strategic HR Leadership",
      "HR Transformation",
      "Organization Design",
      "Talent & Culture Strategy",
    ],
    coachingLevel: "ACC",
    icfCertified: true,
    bio: "Jaya Azad is a strategic HR leader and ICF Certified Coach with 21+ years of experience across diverse industries. She brings deep expertise in leadership development, talent strategy, organisational effectiveness, and culture transformation. As a coach, Jaya works with leaders and professionals to build greater self-awareness, strengthen leadership capabilities, navigate change, and unlock their potential through practical, business-focused coaching conversations.",
    summary: "Jaya Azad \u2013 Leadership & Executive Coach",
    linkedIn: "https://www.linkedin.com/in/jaya-azad2312/",
    feesForHM: 5000,
    photo: jayaAzadImg,
  },
  {
    id: "sangeeta-janardhan",
    name: "Sangeeta Janardhan",
    designation: "Executive & Leadership Coach",
    city: "Chennai",
    expertise: [
      "Executive & Leadership Coach",
      "Mentor Coach",
      "Mindfulness Practitioner",
    ],
    coachingLevel: "PCC",
    icfCertified: true,
    bio: "Sangeeta Janardhan is an ICF Professional Certified Coach (PCC) with over 30 years of corporate and L&D experience, backed by 4,300+ coaching hours. Combining sharp business acumen with an M.Sc. in Psychology, somatic awareness, and mindfulness practices, she helps leaders navigate complex organizational dynamics with clarity and confidence. Her holistic coaching style fosters deep, transformational breakthroughs\u2014helping individuals dissolve limiting beliefs, reconnect with core purpose, and lead with compassion and impact.",
    summary: "Sangeeta Janardhan \u2013 Executive & Leadership Coach",
    linkedIn: "https://in.linkedin.com/in/sangeeta-janardhan-5053723",
    feesForHM: 6000,
    photo: sangeetaImg,
  },
  {
    id: "anumeha-sinha",
    name: "Anumeha Sinha",
    designation: "Leadership Development & Transition Coach",
    city: "Bengaluru",
    expertise: [
      "Professional Development",
      "Performance Enhancement",
      "Leadership Development",
      "Change Management",
    ],
    coachingLevel: "PCC",
    icfCertified: true,
    bio: "Anumeha Sinha is an ICF Professional Certified Coach (PCC) with over 1,000 coaching hours, partnering with people leaders across diverse industries. Specializing in professional development, career transitions, change management, and team building, she has coached and mentored 90+ leaders across the entire employee lifecycle. Anumeha is particularly passionate about supporting first-time leaders as they navigate the critical shift from individual contributors to people managers. Her coaching philosophy centers on authenticity and trust, helping leaders build culture, balance work-life integration, and reach their full potential.",
    summary: "Anumeha Sinha \u2013 Leadership Development & Transition Coach",
    linkedIn: "https://in.linkedin.com/in/anumeha-sinha-pcc-icf-296859142",
    feesForHM: 6000,
    photo: anumehaImg,
  },
  {
    id: "indu-ananth",
    name: "Indu Ananth",
    designation: "Career, Executive & Life Coach",
    city: "Bengaluru",
    expertise: [
      "Career Development Coaching",
      "Executive Coaching",
      "Life Coaching",
      "Leadership Development",
    ],
    coachingLevel: "ACC",
    icfCertified: true,
    bio: "Indu Ananth is an ICF Associate Certified Coach (ACC), certified NLP Practitioner, and Emotional Intelligence Specialist. With a background as an IT engineer for nearly 9 years and a creative entrepreneur for 7 years, she brings a unique blend of analytical rigor and creative insight to her coaching practice. Specializing in career development, executive coaching, and leadership growth, Indu takes a tailored, client-centered approach. She empowers professionals to navigate complex career reinventions, unlock untapped potential, and thrive in evolving business environments with confidence.",
    summary: "Indu Ananth \u2013 Career, Executive & Life Coach",
    linkedIn: "https://www.linkedin.com/in/indu-ananth-icf-coach/",
    feesForHM: 4000,
    photo: induImg,
  },
  {
    id: "maheshwari-jani",
    name: "Maheshwari Jani",
    designation: "Leadership Development & Executive Coach | OD & Human Capital Specialist",
    city: "New Delhi",
    expertise: [
      "Executive Coaching",
      "Leadership Journey",
      "Business Storytelling",
      "Emotional Intelligence",
    ],
    coachingLevel: "",
    icfCertified: false,
    bio: "Maheshwari Jani brings nearly two decades of experience as a catalyst in leadership development, executive coaching, and human capital transformation. An Executive PG holder in OD & Change from TISS, a Certified NLP Coach, and a DISC/Psychometric Practitioner, she works with senior executives across ITES, Manufacturing, BFSI, Retail, and Pharma to enhance cognitive and leadership capabilities.",
    summary: "Maheshwari Jani \u2013 Leadership Development & Executive Coach | OD & Human Capital Specialist",
    linkedIn: "https://www.linkedin.com/in/maheshwari-jani-40091317/",
    feesForHM: 4000,
    photo: maheshwariImg,
  },
  {
    id: "nidhi-sharma",
    name: "Nidhi Sharma",
    designation: "Executive & Emotional Intelligence Coach | Behavioral Trainer",
    city: "Mumbai",
    expertise: [
      "Executive Coaching",
      "Extensive Industry Exposure",
      "Group Coaching",
      "Behavioral Support Program",
      "Holistic Fitness Counselling",
    ],
    coachingLevel: "PCC",
    icfCertified: true,
    bio: "Nidhi is an Executive Coach, Positive Psychologist, and former advertising professional with 14 years of corporate background. Holding a Master\u2019s in Counseling Psychology alongside certifications in Neuro-Linguistic Programming (NLP), she has coached and counselled over 200 individuals\u2014including senior leadership\u2014and trained 1,000+ professionals across 50+ organizations. Specializing in behavioral transformations, growth mindsets, and holistic fitness counseling. Nidhi helps leaders rewrite limiting patterns to transition their lives and careers from good to great.",
    summary: "Nidhi Sharma \u2013 Executive & Emotional Intelligence Coach | Behavioral Trainer",
    linkedIn: "https://www.linkedin.com/in/nidhikharesharma/",
    feesForHM: 5000,
    photo: nidhiImg,
  },
  {
    id: "sanjeev-bhatia",
    name: "Sanjeev Bhatia",
    designation: "Global Executive Coach & HR Leader",
    city: "Mumbai",
    expertise: [
      "Executive Coaching",
      "Career Development Coaching",
      "Change Management",
      "Leadership Development",
    ],
    coachingLevel: "PCC",
    icfCertified: true,
    bio: "Sanjeev Bhatia is an ICF Associate Certified Coach (ACC) and former Global HR Head with extensive corporate experience. Serving as Secretary of the ICF Mumbai Chapter, he specializes in executive coaching, leadership development, and change management within high-impact sectors like Petrochemicals, Infrastructure, Utilities, Power, and Steel. Sanjeev partners with leaders to build authentic leadership capabilities, cultivate talent pipelines, and drive valuable organizational shifts through a thought-provoking, creative coaching process.",
    summary: "Sanjeev Bhatia \u2013 Global Executive Coach & HR Leader",
    linkedIn: "https://www.linkedin.com/in/sanjeev-bhatia-pcc-8345432/",
    feesForHM: 5000,
    photo: sanjeevImg,
  },
  {
    id: "jaya-shukla",
    name: "Jaya Shukla",
    designation: "Executive, Leadership & Career Transition Coach",
    city: "NCR",
    expertise: [
      "Executive Coaching",
      "Leadership Development",
      "Career Transition",
    ],
    coachingLevel: "PCC",
    icfCertified: true,
    photo: jayaShuklaImg,
    bio: "Jaya Shukla is an ICF Professional Certified Coach (PCC) with over 27 years of HR leadership and talent transformation experience, having logged 2,125+ coaching hours. Her expertise spans executive coaching, career reinvention, and leadership development across diverse industries\u2014from emerging leaders to CXOs. Blending positive psychology, VIA Character Strengths, and behavioral insights with sharp business acumen, Jaya equips professionals to navigate AI-driven change, build adaptability, and lead with intentional clarity and confidence.",
    summary: "Jaya Shukla \u2013 Executive, Leadership & Career Transition Coach",
    linkedIn: "https://www.linkedin.com/in/coach-jaya-shukla/",
    feesForHM: 6000,
  },
];
