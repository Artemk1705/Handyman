import Link from "next/link";

export function MainServices() {
  return (
    <div className="py-25 w-screen bg-neutral-200 text-neutral-900 ">
      <div className="flex flex-col justify-between items-center py-10 company-blue-text">
        <div className="font-bold uppercase mb-10">our services</div>
        <h2 className="title-text-block mb-10">What We Do Best</h2>
      </div>
      <div className="flex flex-col">
        <div className="flex xl:flex-row justify-evenly gap-20 xl:gap-0 flex-col">
          <Link href="/services/roof-washing">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <img
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/roof-pressure-washing-service-sarasota.png"
                alt="Pressure washing moss and dirt off a residential roof in Sarasota Florida"
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">Roof Pressure Washing</h3>
                <p>
                  Keep your roof in top shape with professional pressure
                  washing. We safely remove algae, stains, and debris using
                  soft-wash techniques that protect your shingles while
                  restoring curb appeal and extending your roof's life.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services/driveway-washing">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <img
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/driveway-cleaning-pressure-wash-sarasota.png"
                alt="Driveway pressure washing removing oil stains and dirt in Sarasota"
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">
                  Driveway Pressure Washing
                </h3>
                <p className="">
                  Restore the clean look of your driveway with expert pressure
                  washing. We eliminate oil stains, grime, and mold from
                  concrete and pavers, using high-powered equipment that leaves
                  surfaces spotless and improves property appearance.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services/window-cleaning">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <img
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/window-cleaning-service-sarasota-handyman.png"
                alt="Handyman cleaning exterior windows on a home in Sarasota FL"
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">Window Cleaning</h3>
                <p className="">
                  Enjoy streak-free, sparkling windows with our residential
                  window cleaning service. We clean glass, frames, and sills
                  with precision tools and techniques to brighten your space and
                  improve natural light inside your home.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services/house-washing">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <img
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/house-exterior-pressure-washing-sarasota.png"
                alt="Pressure washing the siding of a Florida home in Sarasota"
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">
                  House Exterior Pressure Washing
                </h3>
                <p>
                  Refresh your home's exterior with deep pressure washing. We
                  clean siding, stucco, and brick to remove mold, mildew, and
                  dirt buildup, helping restore the original beauty of your
                  property with lasting, professional results.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex xl:flex-row flex-col justify-evenly gap-20 xl:gap-0 pt-20">
          <Link href="/services/general-repairs">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <img
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/general-home-improvement-handyman-sarasota.png"
                alt="Handyman providing general home improvement services in Sarasota FL"
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">
                  General Home Improvements
                </h3>
                <p>
                  We handle all types of home improvements, from small repairs
                  to custom upgrades. Whether it's drywall patching, hardware
                  installs, or basic carpentry, our handyman team delivers
                  reliable and detail-focused service.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services/blinds-installation">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <img
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/window-blinds-installation-sarasota.png"
                alt="Installing modern window blinds in a Sarasota home"
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">Blinds Installation</h3>
                <p>
                  Upgrade your windows with professionally installed blinds. We
                  ensure proper alignment and secure mounting for all types of
                  blinds, giving you smooth operation, better light control, and
                  a clean, finished look throughout your space.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services/interior-painting">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <img
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/interior-painting-service-sarasota-home.png"
                alt="Handyman painting interior bedroom walls in Sarasota home"
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">Interior Painting</h3>
                <p>
                  Give your rooms a clean and modern refresh with expert
                  interior painting. We prep surfaces, apply high-quality
                  paints, and deliver flawless finishes that enhance comfort,
                  color harmony, and long-term durability.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services/exterior-painting">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <img
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/exterior-house-painting-sarasota-fl.png"
                alt="Painting the exterior of a home in sunny Sarasota Florida"
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">Exterior House Painting</h3>
                <p className="">
                  Boost curb appeal with professional exterior painting. Our
                  process includes surface prep, priming, and application using
                  weather-resistant paints that protect siding, trim, and doors
                  from the elements and aging.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex xl:flex-row flex-col justify-evenly gap-20 xl:gap-0 pt-20">
          <Link href="/services/furniture-assembly">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <img
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/furniture-assembly-service-sarasota.png"
                alt="Handyman assembling flat-pack furniture in Sarasota home"
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">Furniture Assembly</h3>
                <p className="">
                  Skip the frustration of flat-pack furniture with expert
                  assembly services. We build beds, desks, shelves, and more —
                  ensuring proper alignment and stability with every piece, so
                  you can enjoy a safe and stylish setup.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services/mounting">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <img
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/expert-mounting.png"
                alt="Handyman assembling flat-pack furniture in Sarasota home"
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">Mounting Service</h3>
                <p className="">
                  Whether you're hanging shelves, mirrors, artwork, or curtain
                  rods — our precise mounting service ensures stability, level
                  alignment, and a clean finish. We use professional tools and
                  hardware to securely anchor fixtures to drywall, tile, or
                  concrete surfaces.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/services/flooring">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <img
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/laminate-floor-installation-sarasota.png"
                alt="Handyman assembling flat-pack furniture in Sarasota home"
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">Flooring Service</h3>
                <p className="">
                  Upgrade your interior with professionally installed laminate
                  and vinyl flooring. We provide clean, precise installation
                  that enhances durability, moisture resistance, and
                  style—perfect for high-traffic areas, kitchens, and modern
                  living spaces.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services/wallpaper-installation">
            <div className="group flex flex-col justify-evenly items-center transition duration-300 hover:scale-110">
              <img
                className="service_icon_picture group-hover:animate-bounce"
                src="/images/services-logo/wallpaper-installation-sarasota-handyman.png"
                alt="Handyman installing decorative wallpaper in Sarasota interior"
              />
              <div className="xl:w-80 w-95 text-center company-blue-text">
                <h3 className="service_icon_title">Wallpaper Installation</h3>
                <p className="">
                  Transform your walls with precision wallpaper installation. We
                  measure, align, and apply modern or classic wallpaper styles
                  for a smooth, bubble-free finish that adds character and
                  elegance to any interior space.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
