import pinky from "../assets/pink.jpg";
import prize4 from "../assets/albums/prize4.jpg";
import jungle from "../assets/jungle.jpg";
import racism from "../assets/racism.jpg";
import own from "../assets/own.jpg";
import pro from "../assets/pro.jpg";
import record from "../assets/record.jpg";
import studio from "../assets/studio.jpg";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Album() {
  const [showingImage, setShowingImage] = useState(0);
  const albumRef = useRef([]);
  const [allImages, setAllImages] = useState(null);

  useEffect(() => {
    albumRef.current.forEach((albumImage, index) => {
      if (index !== showingImage) {
        albumImage.classList.add("queue");
      } else {
        albumImage.classList.remove("queue");
      }
    });
  }, [showingImage]);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.clientX >= window.innerWidth / 2) {
        if (showingImage >= 2) {
          return;
        }
        setShowingImage(showingImage + 1);
      } else {
        if (showingImage - 1 < 0) {
          return;
        }
        setShowingImage(showingImage - 1);
      }
    });
  }, [showingImage]);

  useEffect(() => {
    changeAllImages();
    return () => {
      setAllImages(albumRef.current.length);
    };
  }, []);

  const changeAllImages = () => {
    setAllImages(albumRef.current.length);
  };

  const album = [
    {
      id: 0,
      title: "studio",
      url: studio,
    },
    {
      id: 1,
      title: "pinky",
      url: pinky,
    },
    {
      id: 2,
      title: "racism",
      url: racism,
    },
  ];
  return (
    <section className="album-section">
      <div className="position-container">
        {album.map((albumImage, index) => (
          <div
            className="img-container"
            key={albumImage.id}
            ref={(el) => (albumRef.current[index] = el)}
          >
            <img src={albumImage.url} alt={albumImage.title} />
          </div>
        ))}
      </div>

      <div className="back-icon">
        <Link to="/">
          <i className="fas fa-level-down-alt"></i>
        </Link>
      </div>
      <div className="album-title">pink</div>
      <div className="index">
        <span className="current-index">0{showingImage + 1}/</span>
        <span className="total-index">
          {allImages >= 10 ? allImages : "0" + allImages}
        </span>
      </div>
    </section>
  );
}
