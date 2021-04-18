import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import foggy from "../assets/img/foggy.jpg";
import prize1 from "../assets/img/prize1.jpg";
import prize2 from "../assets/img/prize2.jpg";
import prize3 from "../assets/img/prize3.jpg";

export default function Prizes() {
  // const images = [
  //   {
  //     id: 0,
  //     url: prize0,
  //     alt: "prize0",
  //   },
  //   {
  //     id: 1,
  //     url: prize1,
  //     alt: "prize1",
  //   },
  //   {
  //     id: 2,
  //     url: prize2,
  //     alt: "prize2",
  //   },
  //   {
  //     id: 3,
  //     url: prize3,
  //     alt: "prize3",
  //   },
  // ];
  return (
    <section className="prize-section">
      <h1 className="prize-title text-center text-white">
        MY <span style={{ fontWeight: "bold" }}>PRIZES</span>
      </h1>
    </section>
  );
}
