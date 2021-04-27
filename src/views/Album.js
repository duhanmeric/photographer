import pinky from "../assets/pink.jpg";
import prize4 from "../assets/albums/prize4.jpg";
import jungle from "../assets/jungle.jpg";
import { React, useRef, useEffect, useState } from "react";

export default function Album() {
  const pink = [
    {
      id: 0,
      title: "example 1",
      url: pinky,
    },
    {
      id: 1,
      title: "example 2",
      url: prize4,
    },
    {
      id: 2,
      title: "example 3",
      url: jungle,
    },
  ];

  let slideRef = useRef([]);

  const [showingImage, setShowingImage] = useState(0);
  const [allImagesLength, setAllImagesLength] = useState();

  useEffect(() => {
    setAllImagesLength(slideRef.current.length);
    slideRef.current.forEach((singleImage, index) => {
      if (index !== showingImage) {
        singleImage.classList.add("queue");
      } else {
        setTimeout(() => {
          singleImage.classList.remove("queue");
        }, 700);
      }
    });
  }, [showingImage]);

  const handleChange = (type) => {
    if (type === "next") {
      if (showingImage >= slideRef.current.length - 1) {
        return;
      }
      setShowingImage(showingImage + 1);
    } else {
      if (showingImage <= 0) {
        return;
      }
      setShowingImage(showingImage - 1);
    }
  };

  return (
    <section className="album-section">
      <div className="album-content">
        <div className="prev" onClick={() => handleChange("prev")}>
          <i className="fas fa-chevron-left"></i>
        </div>

        <div className="album-wrapper">
          {pink.map((singleItem, index) => (
            <div key={singleItem.id}>
              <img
                src={singleItem.url}
                alt={singleItem.title}
                ref={(element) => (slideRef.current[index] = element)}
              />
            </div>
          ))}
        </div>

        <div className="next" onClick={() => handleChange("next")}>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className="index">
          <span className="showing">0{showingImage + 1}</span>/
          <span className="allImageLength">0{allImagesLength}</span>
        </div>
        <div className="album-title">pink</div>
      </div>
    </section>
  );
}
