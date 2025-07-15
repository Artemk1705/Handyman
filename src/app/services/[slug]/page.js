import { SERVICES_PAGES } from "@/constants/services-pages";
import { HERO_IMAGES } from "@/constants/cervice-hero-pictures";
import { notFound } from "next/navigation";

import { HeroSection } from "@/components/servicesPagesContent/hero-section";
import { SectionList } from "@/components/servicesPagesContent/list-section";
import { ReviewBlock } from "@/components/ui/rewies";
import { FormContact } from "@/components/ui/contact-form";
import { MainServices } from "@/components/ui/main-services";
import { ConclusionSection } from "@/components/ui/conclusion-section";
import { previewServices } from "@/data/preview-section/preview";
import { PreviewSection } from "@/components/ui/preview";

export default function ServicePage({ params }) {
  const content = SERVICES_PAGES[params.slug];
  if (!content) return notFound();

  const backgroundImage = HERO_IMAGES[params.slug] || "/images/serv-back.webp";

  const section1 = content.sections?.slice(0, 2);
  const section2 = content.sections?.slice(2, 4);
  const section3 = content.sections?.slice(4);

  return (
    <>
      <HeroSection title={content.title} backgroundImage={backgroundImage} />
      <PreviewSection
        title={previewServices[params.slug]?.title}
        text={previewServices[params.slug]?.text}
      />

      <MainServices />
      <SectionList sections={section1} />
      <div className="block_reviews py-16 bg-gray-50">
        <ReviewBlock />
      </div>
      <SectionList sections={section2} />
      <FormContact />

      <SectionList sections={section3} />
      <ConclusionSection />
    </>
  );
}
