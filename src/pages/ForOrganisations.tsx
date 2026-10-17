import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NovemberBanner from "@/components/org/people-intelligence/NovemberBanner";
import HeroSection from "@/components/org/people-intelligence/HeroSection";
import WhyItMatters from "@/components/org/people-intelligence/WhyItMatters";
import WhatIsUnique from "@/components/org/people-intelligence/WhatIsUnique";
import WhatIsThePoc from "@/components/org/people-intelligence/WhatIsThePoc";
import OperatingFramework from "@/components/org/people-intelligence/OperatingFramework";
import IntelligentOutcome from "@/components/org/people-intelligence/IntelligentOutcome";
import CreateWinWin from "@/components/org/people-intelligence/CreateWinWin";
import SupportSystem from "@/components/org/people-intelligence/SupportSystem";
import ProvenImpact from "@/components/org/people-intelligence/ProvenImpact";
import GrowthEcosystem from "@/components/org/people-intelligence/GrowthEcosystem";
import PrivacyScience from "@/components/org/people-intelligence/PrivacyScience";
import CorporateClients from "@/components/org/people-intelligence/CorporateClients";
import OrgFaq from "@/components/org/people-intelligence/OrgFaq";
import TrustedBy from "@/components/org/people-intelligence/TrustedBy";
import PerformancePsychology from "@/components/org/people-intelligence/PerformancePsychology";

const ForOrganisations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <NovemberBanner />
        <div className="surface-hero">
          <HeroSection />
        </div>
        <div className="surface-canvas">
          <WhyItMatters />
        </div>
        <div className="surface-soft">
          <WhatIsUnique />
        </div>
        <WhatIsThePoc />
        <div className="surface-canvas">
          <OperatingFramework />
        </div>
        <div className="surface-soft">
          <IntelligentOutcome />
        </div>
        <div className="surface-tint">
          <TrustedBy />
        </div>
        <div className="surface-canvas">
          <CreateWinWin />
        </div>
        <div className="surface-tint">
          <SupportSystem />
        </div>
        <CorporateClients />
        <div className="surface-canvas">
          <ProvenImpact />
        </div>
        <div className="surface-soft">
          <GrowthEcosystem />
        </div>
        <div className="surface-canvas">
          <PerformancePsychology />
        </div>
        <div className="surface-tint">
          <PrivacyScience />
        </div>
        <div className="surface-canvas">
          <OrgFaq />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ForOrganisations;
