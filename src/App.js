import "./styles/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import Footer from "./components/Footer";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
