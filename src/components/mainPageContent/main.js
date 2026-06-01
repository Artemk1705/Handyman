"use client";

import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { mainSectionData } from "@/data/section-data/main-sections-data";
import { InfoSectionList } from "@/components/ui/info-sections";
import { previewData } from "@/data/preview-section/preview";
import { MainServices } from "@/components/ui/main-services";
import { MainPageHero } from "./hero-section";
import { PreviewSection } from "@/components/ui/preview";
import { Button } from "../ui/button";

const ReviewBlock = dynamic(
  () => import("../ui/rewies").then((mod) => mod.ReviewBlock),
  { ssr: false }
);

export function Main() {
  return (
    <div className="container">
      <div className="main_content">
        <MainPageHero />
        <Button
          variant="scroll"
          onClick={() =>
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          SERVICES
        </Button>
        <PreviewSection
          title={previewData.mainPreview.title}
          text={previewData.mainPreview.text}
        />
        <InfoSectionList
          sectionIndex={0}
          title={mainSectionData.firstSection.title}
          text={mainSectionData.firstSection.text}
          image={mainSectionData.firstSection.image}
          tag={mainSectionData.firstSection.tag}
          button={mainSectionData.firstSection.button}
          href={mainSectionData.firstSection.href}
        />
        <div id="services">
          <MainServices />
        </div>
        <InfoSectionList
          sectionIndex={1}
          title={mainSectionData.secondSection.title}
          text={mainSectionData.secondSection.text}
          image={mainSectionData.secondSection.image}
          button={mainSectionData.secondSection.button}
          tag={mainSectionData.secondSection.tag}
          href={mainSectionData.secondSection.href}
        />
        <ReviewBlock />
      </div>
    </div>
  );
}
