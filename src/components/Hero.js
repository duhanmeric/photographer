import video from "../assets/girl.mp4";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="enthusiast">
        Photograph <br /> Art <br />
        Music <br />
        Enthusiast
      </div>
      <div className="video-container">
        <video className="hero-video" src={video} autoPlay muted loop></video>
      </div>
    </section>
  );
}
