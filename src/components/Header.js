import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function Header() {
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      headerRef.current.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);

  return (
    <header className="fixed-top" ref={headerRef}>
      <div id="logo">
        <img src="#" alt="" />
        <p className="mb-0">J&D</p>
      </div>
      <nav>
        <ul className="list-unstyled mb-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
