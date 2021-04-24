import { useState, useRef, useEffect } from "react";

export default function AboutSelect() {
  const [active, setActive] = useState();
  const businessBtnRef = useRef();
  const personalBtnRef = useRef();

  useEffect(() => {
    setActive("business");
  }, []);

  useEffect(() => {
    if (active === "business") {
      businessBtnRef.current.classList.add("active");
      personalBtnRef.current.classList.remove("active");
    } else {
      personalBtnRef.current.classList.add("active");
      businessBtnRef.current.classList.remove("active");
    }
  }, [active]);

  const handleSelect = (selected) => {
    setActive(selected);
  };

  return (
    <section className="about-select">
      <button
        type="button"
        className="select-btn"
        onClick={() => handleSelect("business")}
        ref={businessBtnRef}
      >
        Business
      </button>
      <button
        type="button"
        className="select-btn"
        onClick={() => handleSelect("personal")}
        ref={personalBtnRef}
      >
        Personal
      </button>
    </section>
  );
}
