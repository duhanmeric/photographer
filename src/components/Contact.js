export default function Contact() {
  return (
    <section className="contact-section">
      <h1 className="contact-title text-center text-white">
        GET IN <span style={{ fontWeight: "bold" }}>TOUCH</span>
      </h1>
      <div className="container w-50 d-flex justify-content-around flex-wrap">
        <a href="#" className="contact-link">
          Email
        </a>
        <a href="#" className="contact-link">
          Twitter
        </a>
        <a href="#" className="contact-link">
          Instagram
        </a>
        <a href="#" className="contact-link">
          LinkedIn
        </a>
        <a href="#" className="contact-link">
          VSCO
        </a>
        <a href="#" className="contact-link">
          Pinterest
        </a>
      </div>
      <div className="coder text-center text-white mt-5">
        <span style={{ fontStyle: "italic" }}>Designed</span> and
        <code style={{ fontSize: "16px" }}> Coded</code> with ❤️ by duhanmeric
      </div>
    </section>
  );
}
