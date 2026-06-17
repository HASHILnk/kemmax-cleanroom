import { Hero } from "../components/sections/Hero";
import { ServiceCards } from "../components/sections/ServiceCards";
import { CompanyIntro } from "../components/sections/CompanyIntro";
import { IndustriesGrid } from "../components/sections/IndustriesGrid";
import { FeaturedProducts } from "../components/sections/FeaturedProducts";
import { WhyChooseUs } from "../components/sections/WhyChooseUs";
import { CTABanner } from "../components/sections/CTABanner";
import { ContactPreview } from "../components/sections/ContactPreview";

export function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <CompanyIntro />
      <IndustriesGrid />
      <FeaturedProducts />
      <WhyChooseUs />
      <CTABanner />
      <ContactPreview />
    </>
  );
}
