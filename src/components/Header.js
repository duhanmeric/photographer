import { Link } from "react-router-dom";
import { useRef } from "react";

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
            <Link
              to="/"
              onClick={() => {
                if (nav.current.classList.contains("active")) {
                  nav.current.classList.remove("active");
                }
              }}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => {
                if (nav.current.classList.contains("active")) {
                  nav.current.classList.remove("active");
                }
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/playlist"
              onClick={() => {
                if (nav.current.classList.contains("active")) {
                  nav.current.classList.remove("active");
                }
              }}
            >
              Playlist
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
