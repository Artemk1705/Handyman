export function LeftFootbar() {
  return (
    <div className="flex flex-col justify-between xl:w-100 w-screen">
      <div className="text-center company-blue-text leading-7 py-5">
        <h3 className="py-4">Company Information</h3>
        <div>
          <strong>Hritsev Bright Fix</strong>
          <br /> Sarasota, FL 34243
          <br /> Phone: <a href="tel:+13609535762">(360) 607-8204</a>
        </div>
      </div>

      <div className="text-center company-blue-text py-4">
        <h3>Connect With Us</h3>
        <div className="flex justify-evenly py-4">
          <a
            href="https://www.facebook.com/SMARTHVACLLC"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow Smart HVAC on Facebook"
          >
            <img
              className="footer_icon"
              src="/images/LogoFooter/facebook.webp"
              alt="Smart HVAC Facebook - HVAC Services in Vancouver WA and Portland OR"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/smart-hvac-llc-bb4a0535b/"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow Smart HVAC on LinkedIn"
          >
            <img
              className="footer_icon"
              src="/images/LogoFooter/link-logo.webp"
              alt="Smart HVAC LinkedIn - Professional HVAC Solutions"
            />
          </a>

          <a
            href="https://www.youtube.com/@SmartHVAC-m9g"
            target="_blank"
            rel="noopener noreferrer"
            title="Subscribe to Smart HVAC on YouTube"
          >
            <img
              className="footer_icon"
              src="/images/LogoFooter/youtube-logo.webp"
              alt="Smart HVAC YouTube - HVAC Tutorials and Tips"
            />
          </a>

          <a
            href="https://www.tiktok.com/@smarthhvacus"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow Smart HVAC on TikTok"
          >
            <img
              className="footer_icon"
              src="/images/LogoFooter/tik-logo.webp"
              alt="Smart HVAC TikTok - HVAC Installation and Repair Videos"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
