import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function Header() {
  const headerRef = useRef();
  const navRef = useRef();
  const firstLine = useRef();
  const secondLine = useRef();
  const navLinkRefs = useRef([]);

  const navLinks = [
    {
      id: 0,
      title: "home",
      destination: "/",
    },
    {
      id: 1,
      title: "about",
      destination: "/about",
    },
    {
      id: 2,
      title: "contact",
      destination: "/contact",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      headerRef.current.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);

  const handleNavClick = () => {
    console.log("23");
    navRef.current.classList.remove("opened");
    firstLine.current.classList.remove("f-rotated");
    secondLine.current.classList.remove("s-rotated");
  };

  const handleNav = () => {
    navRef.current.classList.toggle("opened");
    firstLine.current.classList.toggle("f-rotated");
    secondLine.current.classList.toggle("s-rotated");
  };

  return (
    <header className="fixed-top" ref={headerRef}>
      <NavLink to="/" id="logo">
        <p className="mb-0">J&D</p>
      </NavLink>

      <div className="bar" onClick={() => handleNav()}>
        <div className="first-line" ref={firstLine}></div>
        <div className="second-line" ref={secondLine}></div>
      </div>
      <nav ref={navRef}>
        <ul className="list-unstyled">
          {navLinks.map((navLink, index) => (
            <li key={navLink.id}>
              <NavLink
                exact
                to={navLink.destination}
                activeClassName="active"
                ref={(el) => (navLinkRefs.current[index] = el)}
                onClick={() => {
                  handleNavClick();
                }}
              >
                {navLink.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
