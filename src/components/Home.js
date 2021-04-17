import Hero from "./Hero";
import Works from "./Works";
import Prizes from "./Prizes";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Works />
      <Prizes />
      <div
        className="line mx-auto"
        style={{
          width: "100%",
          maxWidth: "calc(100% - 300px)",
          height: "1px",
          backgroundColor: "#f8f32b",
        }}
      ></div>
      <Contact />
    </>
  );
}
