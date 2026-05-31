import Image from "next/image";

export function LeftFootbar() {
  return (
    <div className="flex flex-col justify-between xl:w-100 w-screen">
      <div className="text-center company-blue-text leading-7 py-5">
        <h3 className="py-4">Company Information</h3>
        <div>
          <strong>Hritsev Remodel</strong>
          <br /> Sarasota, FL 34243
          <br /> Phone:{" "}
          <a className="font-bold underline" href="tel:+15626436373">
            (562) 643-6373
          </a>
        </div>
      </div>

      <div className="text-center company-blue-text py-4">
        <h3>Connect With Us</h3>
        <div className="flex justify-evenly py-4">
          <a href="" target="_blank" rel="noopener noreferrer" title="">
            <Image
              className="footer_icon"
              src="/images/LogoFooter/facebook.webp"
              alt=""
              loading="lazy"
              width={700}
              height={500}
            />
          </a>

          <a
            href="https://www.linkedin.com/company/hritsev-bright-fix/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            title=""
          >
            <Image
              className="footer_icon"
              src="/images/LogoFooter/link-logo.webp"
              alt=""
              loading="lazy"
              width={700}
              height={500}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
