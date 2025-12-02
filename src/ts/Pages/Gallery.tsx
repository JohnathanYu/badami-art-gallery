import { type EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../EmblaCarousel";
import { useState } from "react";
import "../../css/gallery.css";

function Gallery() {
  const [description, setDescription] = useState("");
  const [modalSrc, setModalSrc] = useState("../../CarouselAssets/Doot.PNG");
  const [modalDisplay, setModalDisplay] = useState(false);
  function updateCard(newDescription: string) {
    setDescription(newDescription);
  }

  function openModal(newSrc: string) {
    setModalSrc(newSrc);
    setModalDisplay(true);
  }

  function closeModal() {
    setModalDisplay(false);
  }

  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <>
      <title>Gallery</title>
      <EmblaCarousel
        options={OPTIONS}
        updateCard={updateCard}
        openModal={openModal}
      />
      <div>
        <p className="joeSays">Artist Commentary:</p>
        <p className="descriptionBox">
          <b>"</b>
          {description}
          <b>"</b>
        </p>
      </div>

      <div
        id="modal"
        className={modalDisplay ? "modal show" : "modal"}
        onClick={closeModal}
      >
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <img src={modalSrc} className="modal-content" />
      </div>
    </>
  );
}

export default Gallery;
