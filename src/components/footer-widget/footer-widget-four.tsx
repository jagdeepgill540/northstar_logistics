import { Location, Mail, PhoneTwo } from '../svg';

const FooterWidgetFour = () => {
  return (
    <div className="it-footer-widget it-footer-col-4 d-flex justify-content-xl-end">
      <div>
        <h4 className="it-footer-widget-title">Contact Info</h4>
        <div className="it-footer-widget-tel-box mb-25">
          <span>
            <Location />
          </span>
          <a
            className="border-line-white"
            target="_blank"
            href="https://www.google.com/maps/place/73+Pipe+Rd,+Laverton+North+VIC+3026,+Australia/@-37.8233733,144.8041288,330m/data=!3m1!1e3!4m6!3m5!1s0x6ad661c871fc77d3:0xac72826b6190786b!8m2!3d-37.8234371!4d144.8055284!16s%2Fg%2F11csk3gl0h?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
          >
            NorthStar Logistics group
            73 Pipe Road, Laverton North VIC 3026
          </a>
        </div>
        <div className="it-footer-widget-tel-box mb-25">
          <span>
            <Mail />
          </span>
          <a className="border-line-white" href="mailto:operations@northstarlogistics.com.au">
            operations@northstarlogistics.com.au
          </a>
        </div>
        <div className="it-footer-widget-tel-box">
          <span>
            <PhoneTwo />
          </span>
          <a className="border-line-white" href="tel:0478800028">
          0478 800 028
          </a>
        </div>
      </div>
    </div>
  );
};
export default FooterWidgetFour;
