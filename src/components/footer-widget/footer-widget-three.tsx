import { Location, Mail } from '../svg';
import SocialBox from '../social/social-box';

const FooterWidgetThree = () => {
  return (
    <div className="it-footer-widget it-footer-col-4 d-flex justify-content-xl-end">
      <div>
        <h4 className="it-footer-widget-title">Contact Info</h4>
        <div className="it-footer-widget-tel-box mb-15">
          <span>
            <Location />
          </span>
          <a
            className="border-line-white"
            target="_blank"
            href="https://www.google.com/maps/dir///@24.4503253,17.1644279,4.17z?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
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
        <div className="it-footer-widget-social">
          <SocialBox />
        </div>
      </div>
    </div>
  );
};
export default FooterWidgetThree;
