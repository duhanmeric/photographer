import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import prize0 from "../assets/img/prize0.jpg";
import prize1 from "../assets/img/prize1.jpg";
import prize2 from "../assets/img/prize2.jpg";
import prize3 from "../assets/img/prize3.jpg";

export default function Prizes() {
  var options = {
    loop: false,
    margin: 10,
    responsive: {
      320: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };
  const images = [
    {
      id: 0,
      url: prize0,
      alt: "prize0",
    },
    {
      id: 1,
      url: prize1,
      alt: "prize1",
    },
    {
      id: 2,
      url: prize2,
      alt: "prize2",
    },
    {
      id: 3,
      url: prize3,
      alt: "prize3",
    },
  ];
  return (
    <section className="prize-section">
      <h1 className="prize-title text-center text-white">
        MY <span style={{ fontWeight: "bold" }}>PRIZES</span>
      </h1>
      <div className="row mx-auto">
        <OwlCarousel className="owl-theme p-0" {...options}>
          {images.map((img) => (
            <div className="col-md-4" key={img.id}>
              <img
                src={img.url}
                alt={img.alt}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
}
