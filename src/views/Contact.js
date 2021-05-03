import about from "../assets/about.jpg";
import { useRef, useEffect } from "react";

export default function Contact() {
  const redRefs = useRef([]);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      if (e.clientX > window.innerWidth / 2) {
        redRefs.current.forEach((r, index) => {
          if (r) {
            if (index === 0) {
              r.style.left = "-65%";
            } else {
              r.style.right = "-65%";
            }
          }
        });
      } else {
        redRefs.current.forEach((r, index) => {
          if (r) {
            if (index !== 0) {
              r.style.right = "-50%";
            } else {
              r.style.left = "-50%";
            }
          }
        });
      }
    });
  }, []);

  return (
    <section className="contact-section">
      <h1 className="contact-title">
        GET IN <span style={{ fontWeight: "bold" }}>TOUCH</span>
      </h1>
      <div className="wrapper">
        <div className="img-container">
          <img src={about} alt="contact" />
        </div>
        <div
          className="email-container info"
          ref={(el) => (redRefs.current[0] = el)}
        >
          <div className="email">
            <a href="mailto:johndoe@info.com">johndoe@info.com</a>
          </div>
        </div>
        <div
          className="phone-container info"
          ref={(el) => (redRefs.current[1] = el)}
        >
          <div className="phone">
            <p className="mb-0">+49 27285745</p>
          </div>
        </div>
        <div
          className="address-container info"
          ref={(el) => (redRefs.current[2] = el)}
        >
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
