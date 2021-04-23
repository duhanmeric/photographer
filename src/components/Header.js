import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function Header() {
  const headerRef = useRef();
  const navRef = useRef();
  const firstLine = useRef();
  const secondLine = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      headerRef.current.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);

  const handleNav = () => {
    navRef.current.classList.toggle("opened");
    firstLine.current.classList.toggle("f-rotated");
    secondLine.current.classList.toggle("s-rotated");
  };

  return (
    <header className="fixed-top" ref={headerRef}>
      <Link to="/" id="logo">
        <p className="mb-0">J&D</p>
      </Link>

      <div className="bar" onClick={() => handleNav()}>
        <div className="first-line" ref={firstLine}></div>
        <div className="second-line" ref={secondLine}></div>
      </div>
      <nav ref={navRef}>
        <ul className="list-unstyled">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
