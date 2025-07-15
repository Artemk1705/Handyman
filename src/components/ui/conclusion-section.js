import { Button } from "./button";

export function ConclusionSection() {
  return (
    <div className="company-blue-bg flex flex-col py-25 items-center text-white">
      <h2 className="text-white text-3xl px-5 xl:px-0">
        Call Hritsev BrightFix for Trusted, Professional Service
      </h2>
      <div className="grid grid-cols-2 gap-5 xl:flex xl:justify-evenly bg-white w-screen xl:w-200 py-6 my-15 xl:rounded-full">
        <div className="flex flex-col items-center text-center">
          <img
            className="w-17"
            src="/images/contact-block-logo/diagram.webp"
            alt=""
          />
          <h4 className="text-black">Efficient</h4>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            className="w-17"
            src="/images/contact-block-logo/medal.webp"
            alt=""
          />
          <h4 className="text-black">Reliable</h4>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            className="w-17"
            src="/images/contact-block-logo/person.webp"
            alt=""
          />
          <h4 className="text-black">Professional</h4>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            className="w-17"
            src="/images/contact-block-logo/stopwatch.webp"
            alt=""
          />
          <h4 className="text-black">Quick</h4>
        </div>
      </div>
      <p className="leading-8 xl:text-center w-screen xl:w-2/3 text-lg px-5 xl:px-0 pb-12">
        If you're looking to improve your home's appearance, safety, or
        function, Hritsev BrightFix offers expert handyman and pressure washing
        services designed to meet real-life needs. We handle everything from
        driveway cleaning and fence painting to TV mounting and home repairs —
        all with care and efficiency. Our goal is to simplify home maintenance
        through clear communication, honest pricing, and dependable results.
        Book your service today and discover how easy it is to protect and
        refresh your property with help from a team you can trust.
      </p>
      <Button variant="navblur">CONTACT</Button>
    </div>
  );
}
