import pink from "../assets/pink.jpg";
import jungle from "../assets/jungle.jpg";
import record from "../assets/record.jpg";
import racism from "../assets/racism.jpg";
import { Link } from "react-router-dom";

export default function Works() {
  const works = [
    {
      id: 0,
      title: "Pinky Girl",
      url: pink,
      album: "#",
    },
    {
      id: 1,
      title: "Jungle",
      url: jungle,
      album: "#",
    },
    {
      id: 2,
      title: "Record",
      url: record,
      album: "#",
    },
    {
      id: 3,
      title: "Racism",
      url: racism,
      album: "#",
    },
  ];
  return (
    <section className="work-section">
      <h1 className="work-section-title text-center">
        SELECTED <span style={{ fontWeight: "bold" }}>WORKS</span>
      </h1>
      {works.map((work) => (
        <div className="row mx-auto" key={work.id}>
          <div className="img-wrapper">
            <Link to={work.album}>
              <div className="pop-up">
                SEE THE
                <span></span>
                <span className="album-text" style={{ fontWeight: "bold" }}>
                  ALBUM
                </span>
              </div>
            </Link>

            <img src={work.url} alt={work.title} className="work-img" />
            <div className="work-title">{work.title}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
