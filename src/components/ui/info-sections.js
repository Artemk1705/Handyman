import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";

export function InfoSectionList({
  title,
  image,
  tag,
  text,
  sectionIndex,
  href,
  button,
}) {
  const isEven = sectionIndex % 2 === 0;

  const sectionStyles = isEven
    ? "bg-white text-neutral-900 xl:flex-row flex-col"
    : "company-yellow-bg text-white xl:flex-row-reverse flex-col";

  const buttonType = isEven ? "gradient" : "blur";

  return (
    <div
      className={`w-screen xl:py-25 pb-10 ${
        isEven
          ? "bg-white company-blue-text"
          : "company-yellow-bg company-blue-text"
      }`}
    >
      <div
        className={`flex items-center justify-around ${
          isEven ? "xl:flex-row flex-col" : "xl:flex-row-reverse flex-col"
        }`}
      >
        <Image
          className="xl:w-2/6 w-95 xl:mt-0 mt-7 flex flex-col justify-center object-cover"
          src={image}
          alt={tag}
          width={400}
          height={500}
          loading="lazy"
        />
        <div className="xl:w-2/5 w-95 flex flex-col justify-center">
          <h2 className="text-3xl font-bold xl:mb-10 my-10">{title}</h2>
          <div className="space-y-3 pb-10">
            <div className="text-lg">{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
