import { CITY_IMAGES } from "@/constants/service-cards-pictures";
import { notFound } from "next/navigation";
import { SectionList } from "@/components/servicesPagesContent/list-section";
import { CityHeroSection } from "@/components/areasPageContent/city-hero-section";
import Link from "next/link";
import Image from "next/image";
import { previewServices } from "@/data/preview-section/preview";
import { PreviewSection } from "@/components/ui/preview";
import { MainServices } from "@/components/ui/main-services";
import { ConclusionSection } from "@/components/ui/conclusion-section";
import { AREAS_SERVICES_CONTENT } from "@/data/cities/cities";

export default function AreasPage() {
  const content = AREAS_SERVICES_CONTENT;

  if (!content || !content.sections) {
    return <div>Areas content not found</div>;
  }

  const section1 = content.sections.slice(0, 1);
  const section2 = content.sections.slice(1, 2);
  const section3 = content.sections.slice(2);

  const cities = section1?.[0]?.bullets || [];

  const citiesList = cities.map((city) => {
    const slug = city.toLowerCase().replace(/\s+/g, "-");

    return {
      name: city,
      slug,
      image: CITY_IMAGES[slug] || "/images/serv-back.webp",
    };
  });

  const backgroundImage = CITY_IMAGES["areas"] || "/images/serv-back.webp";

  return (
    <div className="service-page">
      <CityHeroSection
        title={content.title}
        backgroundImage={backgroundImage}
      />

      <PreviewSection
        title={previewServices["areas"]?.title}
        text={previewServices["areas"]?.text}
      />

      <div className="py-25">
        <h2 className="text-3xl text-center text-neutral-900">
          Service Area Overview
        </h2>

        <div className="city-list pt-25">
          {citiesList.map((city, index) => (
            <Link
              href={`/areas/${city.slug}`}
              key={index}
              className="city-link"
            >
              <div className="city-card">
                <Image
                  src={city.image}
                  alt={`${city.name} Services`}
                  width={300}
                  height={200}
                  className="city-image"
                />

                <div className="overlay">
                  <p className="city-name">{city.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <SectionList sections={section2} />
      <MainServices />
      <SectionList sections={section3} />
      <ConclusionSection text={content.conclusion} />
    </div>
  );
}
