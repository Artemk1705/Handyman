import { notFound } from "next/navigation";
import { SectionList } from "@/components/servicesPagesContent/list-section";
import { CityHeroSection } from "@/components/areasPageContent/city-hero-section";
import { ConclusionSection } from "@/components/ui/conclusion-section";
import { ReviewBlock } from "@/components/ui/rewies";
import { AreasService } from "@/components/ui/areas-block";
import { FormContact } from "@/components/ui/contact-form";
import { PreviewSection } from "@/components/ui/preview";
import { MainServices } from "@/components/ui/main-services";
import { CITY_IMAGES } from "@/constants/service-cards-pictures";
import { previewServices } from "@/data/preview-section/preview";

import { CITIES_PAGES } from "@/data/cities/cities";

export async function generateStaticParams() {
  return Object.keys(CITIES_PAGES)
    .filter((key) => key !== "areas")
    .map((city) => ({ city }));
}

export default function CityPage({ params }) {
  const { city } = params;
  const cityContent = CITIES_PAGES[city];

  if (!cityContent) return notFound();

  const { title, sections, conclusion } = cityContent;
  const backgroundImage = CITY_IMAGES[city] || "/images/serv-back.webp";

  const section1 = sections?.slice(0, 1);
  const section2 = sections?.slice(1, 2);
  const section3 = sections?.slice(2);

  return (
    <div className="city-page">
      <CityHeroSection title={title} backgroundImage={backgroundImage} />
      <PreviewSection
        title={previewServices["areas"]?.title}
        text={previewServices["areas"]?.text}
      />
      <MainServices />
      <SectionList sections={section1} />
      <ReviewBlock />
      <SectionList sections={section2} />
      <AreasService />
      <SectionList sections={section3} />
      <FormContact />
      <ConclusionSection text={conclusion} />
    </div>
  );
}
