import p0 from "../assets/pinky/p0.jpg";
import l0 from "../assets/landscape/l0.jpg";
import a0 from "../assets/art/a0.jpg";
import r0 from "../assets/remote/r0.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Works() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const works = [
    {
      id: 0,
      title: "pinky girl",
      url: p0,
      album: "/pinky",
    },
    {
      id: 1,
      title: "landscape",
      url: l0,
      album: "/landscape",
    },
    {
      id: 2,
      title: "art",
      url: a0,
      album: "/art",
    },
    {
      id: 3,
      title: "remote",
      url: r0,
      album: "/remote",
    },
  ];
  return (
    <section className="work-section">
      <h1 className="work-section-title text-center">
        SELECTED <span style={{ fontWeight: "bold" }}>WORKS</span>
      </h1>
      {works.map((work) => (
        <div className="row mx-auto p-0" key={work.id} data-aos="fade-up">
          <div className="img-wrapper">
            <Link to={work.album} className="pop-up">
              SEE THE
              <span className="album-text" style={{ fontWeight: "bold" }}>
                ALBUM
              </span>
            </Link>
            <img src={work.url} alt={work.title} className="work-img" />
          </div>
          <div className="work-title">{work.title}</div>
        </div>
      ))}
    </section>
  );
}
