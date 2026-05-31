import Link from "next/link";
import Image from "next/image";

export function MainServices() {
  return (
    <div className="py-25 w-screen bg-neutral-200 text-neutral-900 ">
      <div className="flex flex-col justify-between items-center py-10 company-blue-text">
        <div className="font-bold uppercase mb-10">our services</div>
        <h2 className="title-text-block mb-10">What We Do Best</h2>
      </div>
      <div className="flex flex-col">
        <div className="flex xl:flex-row justify-evenly gap-20 xl:gap-0 flex-col">
          <Link href="/services/cabinets">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <Image
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/kitchen-renovation-remodeling-cabinet-installation.png"
                alt="Painting the exterior of a home in sunny Sarasota Florida"
                loading="lazy"
                width={700}
                height={500}
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">
                  Cabinets Installation-Painting
                </h3>
                <p className="">
                  Upgrade your space with professional cabinet installation and
                  painting. We prep, paint, and finish with quality care for a
                  smooth, durable look.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services/texture-painting">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <Image
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/interior-painting-service-sarasota-home.png"
                alt="Handyman painting interior bedroom walls in Sarasota home"
                loading="lazy"
                width={700}
                height={500}
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">
                  Texture, Painting (Exterior, Interior)
                </h3>
                <p className="">
                  Refresh your property with expert texture and painting
                  services. We prepare surfaces carefully and deliver clean,
                  long-lasting interior and exterior finishes.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services/flooring">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <Image
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/sarasota-tampa-venice-tiling-flooring-bathroom-tiling.png"
                alt="Painting the exterior of a home in sunny Sarasota Florida"
                loading="lazy"
                width={700}
                height={500}
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">Flooring, Tiling</h3>
                <p className="">
                  Transform your home with quality flooring and tile
                  installation. We ensure proper preparation, clean layouts, and
                  durable results built to last.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex xl:flex-row flex-col justify-evenly gap-20 xl:gap-0 pt-20">
          <Link href="/services/general">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <Image
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/general-home-improvement-handyman-sarasota.png"
                alt="Handyman providing general home improvement services in Sarasota FL"
                loading="lazy"
                width={700}
                height={500}
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">
                  General Home Improvements
                </h3>
                <p>
                  We handle a wide range of home improvement projects. From
                  repairs to upgrades, we deliver dependable workmanship and
                  detail-focused service every time.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/services/carpentry">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <Image
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/timber-flooring-sarasota-tampa-venice-flooring-carpentry.png"
                alt="Handyman painting interior bedroom walls in Sarasota home"
                loading="lazy"
                width={700}
                height={500}
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">CARPENTRY</h3>
                <p>
                  Add style and function with custom carpentry services. We
                  build, repair, and install detailed woodwork designed to match
                  your space perfectly.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services/doors-installation">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <Image
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/doors-installation-doorframe.png"
                alt="Painting the exterior of a home in sunny Sarasota Florida"
                loading="lazy"
                width={700}
                height={500}
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">DOORS INSTALLATION</h3>
                <p className="">
                  Upgrade your home with professional door installation
                  services. We ensure accurate fitting, smooth operation, and a
                  clean finished appearance every time.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex xl:flex-row flex-col justify-evenly gap-20 xl:gap-0 pt-20">
          <Link href="/services/closet-remodel">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <Image
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/closet-remodel-renovation.png"
                alt="Handyman assembling flat-pack furniture in Sarasota home"
                loading="lazy"
                width={700}
                height={500}
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">CLOSETS REMODEL</h3>
                <p className="">
                  Maximize your storage space with custom closet remodeling. We
                  create organized, functional, and modern designs tailored to
                  your needs and lifestyle.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services/trim-moulding">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <Image
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/trim-baseboards-tampa-sarasota-installation.png"
                alt="Painting the exterior of a home in sunny Sarasota Florida"
                loading="lazy"
                width={700}
                height={500}
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">Trim and Moulding</h3>
                <p className="">
                  Complete your interior with clean trim and baseboard
                  installation. We deliver sharp finishes and precise fitting
                  for a polished final appearance.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services/drywall-work">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <Image
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/sarasota-tampa-drywall-intallation-remodeling.png"
                alt="Painting the exterior of a home in sunny Sarasota Florida"
                loading="lazy"
                width={700}
                height={500}
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">Drywall work</h3>
                <p className="">
                  Get smooth, durable walls and ceilings with expert drywall
                  services. We handle installation, patching, repairs, and
                  finishing with professional care.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex xl:flex-row flex-col justify-evenly gap-20 xl:gap-0 pt-20">
          <Link href="/services/kitchen-remodel">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <Image
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/kitchen-design-remodeling-renovation-sarasota.png"
                alt="Handyman assembling flat-pack furniture in Sarasota home"
                loading="lazy"
                width={700}
                height={500}
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">KITCHEN REMODEL</h3>
                <p className="">
                  Create a modern kitchen with quality remodeling services. We
                  handle cabinets, layouts, finishes, and details with
                  craftsmanship built for everyday living.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services/bathroom-remodel">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <Image
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/bathroom-renovation.png"
                alt="Painting the exterior of a home in sunny Sarasota Florida"
                loading="lazy"
                width={700}
                height={500}
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">BATHROOM REMODEL</h3>
                <p className="">
                  Refresh your bathroom with professional remodeling solutions.
                  We combine modern design, quality materials, and precise
                  installation for lasting comfort.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
