import { SERVICES_PAGES } from "@/constants/services-pages";
import { HERO_IMAGES } from "@/constants/blocks-picturtes";
import { notFound } from "next/navigation";

import { HeroSection } from "@/components/servicesPagesContent/hero-section";
import { SectionList } from "@/components/servicesPagesContent/list-section";
import { ReviewBlock } from "@/components/ui/rewies";
import { MainServices } from "@/components/ui/main-services";
import { ConclusionSection } from "@/components/ui/conclusion-section";
import { PreviewSection } from "@/components/ui/preview";
import { previewServices } from "@/data/preview-section/preview";

export async function generateStaticParams() {
  return Object.keys(SERVICES_PAGES).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const content = SERVICES_PAGES[slug];

  if (!content) return notFound();

  const backgroundImage =
    content.backgroundImage || HERO_IMAGES[slug] || "/images/serv-back.webp";

  const section1 = content.sections?.slice(0, 2);
  const section2 = content.sections?.slice(2, 4);
  const section3 = content.sections?.slice(4);

  return (
    <>
      <HeroSection title={content.title} backgroundImage={backgroundImage} />

      <PreviewSection
        title={previewServices[slug]?.title}
        text={previewServices[slug]?.text}
      />

      <MainServices />
      <SectionList sections={section1} />

      <div className="block_reviews py-16 bg-gray-50">
        <ReviewBlock />
      </div>

      <SectionList sections={section2} />
      <SectionList sections={section3} />

      <ConclusionSection text={content.conclusion} />
    </>
  );
}
