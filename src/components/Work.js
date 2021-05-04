import record from "../assets/record.jpg";
import racism from "../assets/racism.jpg";
import p0 from "../assets/pinky/p0.jpg";
import l0 from "../assets/landscape/l0.jpg";
import { Link } from "react-router-dom";

export default function Works() {
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
      title: "record",
      url: record,
      album: "/record",
    },
    {
      id: 3,
      title: "two souls",
      url: racism,
      album: "/racism",
    },
  ];
  return (
    <section className="work-section">
      <h1 className="work-section-title text-center">
        SELECTED <span style={{ fontWeight: "bold" }}>WORKS</span>
      </h1>
      {works.map((work) => (
        <div className="row mx-auto p-0" key={work.id}>
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
