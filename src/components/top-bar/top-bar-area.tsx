import SocialBox from '../social/social-box';
import { Phone } from '../svg';

const TopBarArea = () => {
  return (
    <div className="it-header-top-area it-header-top-ptb black-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-6">
            <div className="it-header-top-list-box">
              <ul>
                <li className="d-none d-lg-inline-block">
                  <span>
                    <Phone />
                    <a href="tel:0391909911">03 9190 9911 </a>
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa-light fa-envelope-open-text"></i>
                    <a href="mailto:mcssainfo@gmail.com">
                    operations@northstarlogistics.com.au
                    </a>
                  </span>
                </li>
                <li className="d-none d-xxl-inline-block">
                  <span>
                    <i className="fa-light fa-location-dot"></i>
                    <a
                      target="_blank"
                      href="https://www.google.com/maps/place/73+Pipe+Rd,+Laverton+North+VIC+3026,+Australia/@-37.8233733,144.8041288,330m/data=!3m1!1e3!4m6!3m5!1s0x6ad661c871fc77d3:0xac72826b6190786b!8m2!3d-37.8234371!4d144.8055284!16s%2Fg%2F11csk3gl0h?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
                    >
                      73 Pipe Road, Laverton North VIC 3026
.
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6 d-none d-sm-block">
            <div className="it-header-top-right d-flex align-items-center justify-content-end">
              <div className="it-header-top-contact d-none d-md-block mr-30">
                <a href="#">Help</a>
                <span>/</span>
                <a href="#">support</a>
                <span>/</span>
                <a href="#">contact</a>
              </div>
              <div className="it-header-top-social-box">
                <SocialBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBarArea;
