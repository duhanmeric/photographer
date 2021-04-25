import about from "../assets/about.jpg";

export default function Contact() {
  return (
    <section className="contact-section">
      <h1 className="contact-title">
        GET IN <span style={{ fontWeight: "bold" }}>TOUCH</span>
      </h1>
      <div className="wrapper">
        <div className="img-container">
          <img src={about} alt="contact" />
        </div>
        <div className="email-container info">
          <div className="email">
            <a href="#">johndoe@info.com</a>
          </div>
        </div>
        <div className="phone-container info">
          <div className="phone">
            <p className="mb-0">+49 27285745</p>
          </div>
        </div>
        <div className="address-container info">
          <div className="address">
            <p className="mb-0">
              Wittekindshof{" "}
              <span style={{ color: "black" }}>
                Schulstrasse 32547 Bad Oyenhausen
              </span>
              <span> </span>
              <span style={{ fontWeight: "bold", color: "black" }}>
                GERMANY
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
