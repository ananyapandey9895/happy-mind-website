import { SectionHeading } from "./shared";
import axisMaxLifeLogo from "@/assets/brand_logo/AXISmaxlife.png";
import bigFMLogo from "@/assets/brand_logo/BigFM.jpg";
import bptpLogo from "@/assets/brand_logo/BPTP.png";
import centralParkLogo from "@/assets/brand_logo/CentralPark.jpg";
import chintelsLogo from "@/assets/brand_logo/Chintels.jpg";
import ekartLogo from "@/assets/brand_logo/EKART.png";
import flipkartLogo from "@/assets/brand_logo/Flipkart.png";
import googleLogo from "@/assets/brand_logo/Google.webp";
import m3mLogo from "@/assets/brand_logo/M3M.png";
import mmtcPampLogo from "@/assets/brand_logo/mmtc-pamp.jpg";
import nuvocoLogo from "@/assets/brand_logo/Nuvoco.png";
import signatureGlobalLogo from "@/assets/brand_logo/signatures-global.webp";

const clientLogos = [
  { name: "Google", logo: googleLogo },
  { name: "Flipkart", logo: flipkartLogo },
  { name: "Ekart", logo: ekartLogo },
  { name: "Nuvoco", logo: nuvocoLogo },
  { name: "Axis Max Life", logo: axisMaxLifeLogo },
  { name: "BPTP", logo: bptpLogo },
  { name: "Big FM", logo: bigFMLogo },
  { name: "Central Park", logo: centralParkLogo },
  { name: "Chintels", logo: chintelsLogo },
  { name: "M3M", logo: m3mLogo },
  { name: "MMTC PAMP", logo: mmtcPampLogo },
  { name: "Signature Global", logo: signatureGlobalLogo },
];

const CorporateClients = () => (
  <section className="bg-white py-16 md:py-20 px-6 lg:px-16">
    <div className="container mx-auto max-w-7xl">
      <SectionHeading eyebrow="Trusted By" title="Our Corporate Clients" />
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 items-center">
        {clientLogos.map((client) => (
          <li key={client.name} className="h-32 flex items-center justify-center px-2">
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default CorporateClients;
