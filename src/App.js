import "./App.css";
import Header from "./components/Header";
import { useRef, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

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
    <Router>
      <div className="App">
        <div id="cursor" ref={cursorRef}>
          <div id="innerCursor"></div>
        </div>
        <Header />
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={About} exact path="/about" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
