import Image from "next/image";
import { Button } from "@/components/ui/button";

export function SectionList({ sections }) {
  return (
    <div className="w-screen">
      {sections.map((section, index) => {
        console.log("SECTION IMAGE:", section.image);
        const isEven = index % 2 === 0;

        const styles = isEven
          ? "company-yellow-bg text-white"
          : "bg-white company-blue-text";

        return (
          <div
            key={index}
            className={`flex items-center justify-around py-10 ${styles} ${
              isEven ? "flex-col xl:flex-row" : "flex-col xl:flex-row-reverse"
            }`}
          >
            <Image
              className="xl:w-2/6 w-95 flex flex-col justify-center object-cover"
              src={section.image || "/images/content-blocks/default.webp"}
              alt={section.title || "Service"}
              loading="lazy"
              width={700}
              height={500}
            />
            <div className="xl:w-2/5 w-95 flex flex-col justify-center">
              {section.title && (
                <h2 className="text-3xl font-bold mb-10">{section.title}</h2>
              )}

              {section.text && <p className="text-lg pb-10">{section.text}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
