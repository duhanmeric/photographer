import pink from "../assets/img/pink.jpg";
import california from "../assets/img/california.jpg";
import music from "../assets/img/music.jpg";
import racism from "../assets/img/racism.jpg";

export default function Works() {
  const images = [
    {
      id: 0,
      url: pink,
      alt: "pink",
    },
    {
      id: 1,
      url: california,
      alt: "california",
    },
    {
      id: 2,
      url: music,
      alt: "music",
    },
    {
      id: 3,
      url: racism,
      alt: "racism",
    },
  ];

  return (
    <section className="works-section">
      <h1 className="works-title text-center">
        SELECTED <span>WORKS</span>
      </h1>
      <div className="row mx-auto justify-content-between">
        {images.map((img) => (
          <div key={img.id} className="col-md-6 col-sm-6 img-col">
            <img src={img.url} alt={img.alt} />
            <div className="pop-up">See the Album</div>
          </div>
        ))}
      </div>
    </section>
  );
}
