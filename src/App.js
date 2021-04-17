import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { useRef, useEffect } from "react";
import Works from "./components/Works";
import Prizes from "./components/Prizes";
import Contact from "./components/Contact";

function App() {
  var cursorRef = useRef();

  useEffect(() => {
    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursorRef.current.style.left = x + "px";
      cursorRef.current.style.top = y + "px";
    });
  }, []);

  return (
    <div className="App">
      <div id="cursor" ref={cursorRef}>
        <div id="innerCursor"></div>
      </div>
      <Header />
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
    </div>
  );
}

export default App;
