import ContactFormThree from '../form/contact-form-three';
import { LocationTwo, MailTwo, PhoneFour } from '../svg';

const ContactArea = () => {
  return (
    <div className="it-contact-area it-contact-innar-style it-contact-style-2 pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-5 order-1 order-lg-0">
            <div className="it-contact-inner-list">
              <span className="it-section-subtitle">Our Locations Contact</span>
              <h4 className="it-section-title pb-10">Get in touch</h4>
              <p className="mb-55">
                Northstar specializes in international shipping, offering fast,
                secure, and cost-effective solutions to connect
              </p>
              <ul>
                <li>
                  <i>
                    <PhoneFour />
                  </i>
                  <div>
                    <span>Have any question?</span>
                    <a className="border-line-black" href="tel:0478800028">
                    0478 800 028
                    </a>
                  </div>
                </li>
                <li>
                  <i>
                    <MailTwo />
                  </i>
                  <div>
                    <span>Write email</span>
                    <a
                      className="border-line-black"
                      href="mailto:operations@northstarlogistics.com.au"
                    >
                      operations@northstarlogistics.com.au
                    </a>
                  </div>
                </li>
                <li>
                  <i>
                    <LocationTwo />
                  </i>
                  <div>
                    <span>Visit anytime</span>
                    <a
                      className="border-line-black"
                      target="_blank"
                      href="https://www.google.com/maps/place/5+Agosta+Dr,+Laverton+North+VIC+3026,+Australia/@-37.8238595,144.7984469,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad661c5ebb05625:0xb41c0eb286ef944c!8m2!3d-37.8238638!4d144.8010218!16s%2Fg%2F11csfvbskm?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
                    >
                      NorthStar Logistics group
                      5 Agosta Drive, Laverton North Victoria 3026
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 order-0 order-lg-1">
            <div className="it-contact-form-box z-index-1 p-relative">
              <h4 className="it-section-title pb-40">Contact For Queries?</h4>
              <ContactFormThree />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactArea;
