import "./styles/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import Footer from "./components/Footer";
import About from "./views/About";
import Contact from "./views/Contact";
import Album from "./views/Album";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/:id" exact component={Album} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
