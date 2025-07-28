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
                    <a href="tel:0478800028">0478 800 028</a>
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
                      href="https://www.google.com/maps/place/5+Agosta+Dr,+Laverton+North+VIC+3026,+Australia/@-37.8238595,144.7984469,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad661c5ebb05625:0xb41c0eb286ef944c!8m2!3d-37.8238638!4d144.8010218!16s%2Fg%2F11csfvbskm?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
                    >
                      5 Agosta Drive, Laverton North Victoria 3026.
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
