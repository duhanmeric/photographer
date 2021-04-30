import about from "../assets/about.jpg";
import { useEffect, useState } from "react";

export default function Hero() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <section className="hero-section text-center">
      <div className="top-left-frame">
        <div className="first-frame"></div>
        <div className="second-frame"></div>
      </div>
      <div className="recording animate__animated animate__flash animate__infinite animate__slow">
        <div className="ball"></div>
        <span className="rec-text">REC</span>
      </div>
      <h4 className="photographer-name">JOHN DOE</h4>
      <img src={about} className="p-img" alt="p-img" />
      <p className="hero-info mb-0">
        PHOTOGRAPH <span style={{ fontWeight: "bold" }}>ENTHUSIAST</span> <br />
        AT AMSTERDAM
      </p>
      <div className="timer">
        00:
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        {("0" + ((time / 10) % 100)).slice(-2)}
      </div>
      <div className="bottom-right-frame">
        <div className="first-frame"></div>
        <div className="second-frame"></div>
      </div>
    </section>
  );
}
