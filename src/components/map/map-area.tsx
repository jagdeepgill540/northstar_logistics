const MapArea = () => {
  return (
    <div className="it-map-area">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <div className="it-map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5092.574443829935!2d144.80167833887444!3d-37.82384431798272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad661c871fc77d3%3A0xac72826b6190786b!2s73%20Pipe%20Rd%2C%20Laverton%20North%20VIC%203026%2C%20Australia!5e1!3m2!1sen!2sin!4v1753012153356!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MapArea;
