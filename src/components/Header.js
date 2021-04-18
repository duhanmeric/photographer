import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function Header() {
  const nav = useRef();

  return (
    <header className="fixed-top">
      <div className="author">
        <Link to="/">JOHN DOE</Link>
      </div>
      <div
        className="bar"
        onClick={() => {
          nav.current.classList.toggle("active");
          if (nav.current.classList.contains("active")) {
            document.body.classList.add("closeFlow");
          } else {
            document.body.classList.remove("closeFlow");
          }
        }}
      >
        <i className="fas fa-bars"></i>
      </div>
      <nav ref={nav}>
        <ul className="list-unstyled">
          <li>
            <Link to="/">Work</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/playlist">Playlist</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
