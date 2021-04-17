import about from "../assets/img/about.jpg";

export default function About() {
  return (
    <section className="about-section text-center text-white">
      <div className="top-left-frame">
        <div className="horizontal-line"></div>
        <div className="vertical-line"></div>
      </div>
      <h1 className="text-center">
        ABOUT <span style={{ fontWeight: "bold" }}>MYSELF</span>
      </h1>
      <img
        src={about}
        alt="about"
        width="300"
        height="300"
        className="my-5"
        style={{ borderRadius: "50%", objectFit: "cover" }}
      />
      <p className="w-50 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="bottom-right-frame">
        <div className="vertical-line"></div>
        <div className="horizontal-line"></div>
      </div>
    </section>
  );
}
