import { HERO_IMAGES } from "@/constants/cervice-hero-pictures";
import { HeroSection } from "@/components/servicesPagesContent/hero-section";
import { SectionList } from "@/components/servicesPagesContent/list-section";
import { ReviewBlock } from "@/components/ui/rewies";
import { FormContact } from "@/components/ui/contact-form";
import { MainServices } from "@/components/ui/main-services";
import { ConclusionSection } from "@/components/ui/conclusion-section";

import { MAIN_SERVICE_PAGE } from "@/data/services/property-services";

export default function ServicesMainPage() {
  const content = MAIN_SERVICE_PAGE;
  const backgroundImage = HERO_IMAGES["services"] || "/images/serv-back.webp";

  const section1 = content.sections?.slice(0, 2);
  const section2 = content.sections?.slice(2, 4);
  const section3 = content.sections?.slice(4);

  return (
    <>
      <HeroSection title={content.title} backgroundImage={backgroundImage} />
      <MainServices />
      <SectionList sections={section1} />
      <div className="block_reviews py-16 bg-gray-50">
        <ReviewBlock />
      </div>
      <SectionList sections={section2} />
      <FormContact />
      <SectionList sections={section3} />
      <ConclusionSection text={content.conclusion} />
    </>
  );
}
