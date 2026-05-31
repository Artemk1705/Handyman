import { Button } from "./button";

export function ConclusionSection() {
  return (
    <div className="company-blue-bg flex flex-col py-25 items-center text-white">
      <h2 className="text-white text-3xl px-5 xl:px-0">
        Call Hritsev Remodel for Trusted, Professional Service
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
        If you&apos;re looking to improve your home&apos;s appearance,
        functionality, and overall value, Hritsev Remodel provides professional
        remodeling and renovation services designed for modern living. From
        kitchen and bathroom remodels to flooring, drywall, painting, carpentry,
        cabinets, doors, and custom home improvements, we handle every project
        with attention to detail and quality craftsmanship. Our goal is to make
        the remodeling process simple and stress-free through clear
        communication, honest pricing, and dependable results. Contact Hritsev
        Remodel today and discover how professional renovation services can
        completely transform your home.
      </p>
      <a href="sms:+15626436373">
        <Button variant="navblur">GET SCHEDULE</Button>
      </a>
    </div>
  );
}
