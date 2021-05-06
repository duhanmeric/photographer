import about from "../assets/about.mp4";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="about-hero" data-aos="fade-in">
        <div className="about-container">
          <video
            src={about}
            autoPlay
            loop
            muted
            className="about-video"
          ></video>
          <div className="about-info">
            <h1 className="about-title mb-4 text-center">
              I am <span style={{ fontWeight: "bold" }}>John Doe</span>
            </h1>
            <h5 className="about-subtitle text-center w-75 mx-auto">
              A professional photographer who is adventurer, rationalist and
              dilligent.
              <br />
              Living in Germany ✌️.
            </h5>
          </div>
        </div>
      </section>
      <section className="about-section" data-aos="fade-up">
        <h2 className="whoami-title">
          Okay but who am i really? (fictional character)
        </h2>
        <p className="whoami-text w-75 text-center mx-auto mt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          assumenda quae ut explicabo cumque sunt ipsa sit tempora hic neque,
          aliquid reprehenderit alias perspiciatis. Eveniet explicabo molestiae
          corporis sequi ipsa. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Temporibus assumenda quae ut explicabo cumque sunt
          ipsa sit tempora hic neque, aliquid reprehenderit alias perspiciatis.
          Eveniet explicabo molestiae corporis sequi ipsa.
        </p>
        <div className="row mx-auto">
          <div className="col-md-2 scale-col p-0">
            <div className="count">3000+</div>
            <div className="desc">photograps</div>
          </div>
          <div className="col-md-2 scale-col p-0">
            <div className="count">12</div>
            <div className="desc">staff</div>
          </div>
          <div className="col-md-2 scale-col p-0">
            <div className="count">2</div>
            <div className="desc">offices</div>
          </div>
          <div className="col-md-2 scale-col p-0">
            <div className="count">1000+</div>
            <div className="desc">happy clients</div>
          </div>
        </div>
      </section>
    </>
  );
}
