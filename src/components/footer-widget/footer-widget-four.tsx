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
            href="https://www.google.com/maps/place/5+Agosta+Dr,+Laverton+North+VIC+3026,+Australia/@-37.8238595,144.7984469,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad661c5ebb05625:0xb41c0eb286ef944c!8m2!3d-37.8238638!4d144.8010218!16s%2Fg%2F11csfvbskm?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
          >
            NorthStar Logistics group
            5 Agosta Drive, Laverton North Victoria 3026
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
