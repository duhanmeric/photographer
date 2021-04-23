import about from "../assets/about.jpg";

export default function Hero() {
  return (
    <section className="hero-section text-center">
      <div className="top-left-frame">
        <div className="first-frame"></div>
        <div className="second-frame"></div>
      </div>
      <div className="recording">
        <div className="ball"></div>
        <span className="rec-text">REC</span>
      </div>
      <h4 className="photographer-name">JOHN DOE</h4>
      <img src={about} className="p-img" alt="p-img" />
      <p className="hero-info mb-0">
        PHOTOGRAPH <span style={{ fontWeight: "bold" }}>ENTHUSIAST</span> <br />
        AT AMSTERDAM
      </p>
      <div className="timer">00:23:45:17</div>
      <div className="bottom-right-frame">
        <div className="first-frame"></div>
        <div className="second-frame"></div>
      </div>
    </section>
  );
}
