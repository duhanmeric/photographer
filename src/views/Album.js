import p1 from "../assets/pinky/p1.jpg";
import p2 from "../assets/pinky/p2.jpg";
import p3 from "../assets/pinky/p3.jpg";
import p4 from "../assets/pinky/p4.jpg";
// import l0 from "../assets/landscape/l0.jpg";
import l1 from "../assets/landscape/l1.jpg";
import l2 from "../assets/landscape/l2.jpg";
import l3 from "../assets/landscape/l3.jpg";
import l4 from "../assets/landscape/l4.jpg";
import l5 from "../assets/landscape/l5.jpg";
import l6 from "../assets/landscape/l6.jpg";
import { useRef, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Album() {
  const [showingImage, setShowingImage] = useState(0);
  const albumRef = useRef([]);
  const [allImages, setAllImages] = useState(null);

  let { id } = useParams();

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
        if (showingImage >= albumRef.current.length - 1) {
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
    const allAlbum = albumRef.current;
    changeAllImages();
    return () => {
      setAllImages(allAlbum.length);
    };
  }, []);

  const changeAllImages = () => {
    setAllImages(albumRef.current.length);
  };

  const albumPinky = [
    {
      id: 0,
      title: "p1",
      url: p1,
    },
    {
      id: 1,
      title: "p2",
      url: p2,
    },
    {
      id: 2,
      title: "p3",
      url: p3,
    },
    {
      id: 3,
      title: "p4",
      url: p4,
    },
  ];

  const albumLandscape = [
    {
      id: 0,
      title: "l1",
      url: l1,
    },
    {
      id: 1,
      title: "l2",
      url: l2,
    },
    {
      id: 2,
      title: "l3",
      url: l3,
    },
    {
      id: 3,
      title: "l4",
      url: l4,
    },
    {
      id: 4,
      title: "l5",
      url: l5,
    },
    {
      id: 5,
      title: "l6",
      url: l6,
    },
  ];

  const handleFilter = () => {
    switch (id) {
      case "pinky":
        return albumPinky;
      case "landscape":
        return albumLandscape;
      default:
        return "ddd";
        break;
    }
  };

  return (
    <section className="album-section">
      <div className="position-container">
        {handleFilter().map((albumImage, index) => (
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
      <div className="album-title">{id}</div>
      <div className="index">
        <span className="current-index">0{showingImage + 1}/</span>
        <span className="total-index">
          {allImages >= 10 ? allImages : "0" + allImages}
        </span>
      </div>
    </section>
  );
}
