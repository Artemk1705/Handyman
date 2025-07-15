import Link from "next/link";
import { footerAreas } from "@/data/cities/city-service";

export function RightFootbar() {
  const states = [{ name: "Areas", slug: "oregon", cities: footerAreas }];

  return (
    <div className="xl:w-100 w-screen items-center xl:items-top flex justify-evenly flex-col ">
      {states.map((state) => (
        <div key={state.slug} className="city_block">
          <Link href={`/services/${state.slug}`}>
            <h3 className="city_title my-4">{state.name}</h3>
          </Link>
          <div className="city_content">
            {state.cities.map((city, index) => (
              <span key={city.slug}>
                <Link href={`/services/${state.slug}/${city.slug}`}>
                  <span className="footer_city leading-7">{city.name}</span>
                </Link>
                {index < state.cities.length - 1 ? " | " : ""}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
