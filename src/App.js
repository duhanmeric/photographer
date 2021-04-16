import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { useRef, useEffect } from "react";

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
    </div>
  );
}

export default App;
