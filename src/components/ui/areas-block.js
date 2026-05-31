import Link from "next/link";

const floridaAreas = [
  "Anna Maria",
  "Bradenton",
  "Clearwater",
  "Longboat Key",
  "North Port",
  "Saint Petersburg",
  "Sarasota",
  "Tampa",
  "Venice",
];

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

export function AreasService() {
  return (
    <div className="bg-gradient py-25">
      <div className="text-white text-center mb-10">
        <div className="font-bold uppercase pb-5">service areas</div>
        <h2 className="title-text-block pb-7">Proudly serving</h2>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className="text-yellow-400 uppercase text-2xl">Florida</h2>

        <div className="cities_content text-center">
          {floridaAreas.map((area) => {
            const slug = slugify(area);

            return (
              <Link href={`/areas/${slug}`} key={slug}>
                {area}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
