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
                    <a className="border-line-black" href="tel:0391909911">
                    03 9190 9911 
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
                      href="https://www.google.com/maps/place/73+Pipe+Rd,+Laverton+North+VIC+3026,+Australia/@-37.8233733,144.8041288,330m/data=!3m1!1e3!4m6!3m5!1s0x6ad661c871fc77d3:0xac72826b6190786b!8m2!3d-37.8234371!4d144.8055284!16s%2Fg%2F11csk3gl0h?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D"
                    >
                      NorthStar Logistics group
                      73 Pipe Road, Laverton North VIC 3026

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
