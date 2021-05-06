import AlbumPinky from "../components/AlbumPinky";
import AlbumLandscape from "../components/AlbumLandscape";
import AlbumArt from "../components/AlbumArt";
import AlbumRemote from "../components/AlbumRemote";

import { useRef, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NotExist from "./NotExist";

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

  const handleFilter = () => {
    switch (id) {
      case "pinky":
        return AlbumPinky;
      case "landscape":
        return AlbumLandscape;
      case "art":
        return AlbumArt;
      case "remote":
        return AlbumRemote;
      default:
        return null;
    }
  };

  return (
    <>
      {handleFilter() ? (
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
      ) : null}
    </>
  );
}
