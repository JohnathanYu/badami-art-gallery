import { type EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../EmblaCarousel";
import { useState } from "react";
import "../../css/gallery.css";

function Gallery() {
  const [description, setDescription] = useState("");
  const [modalSrc, setModalSrc] = useState("../../CarouselAssets/Doot.PNG");
  function updateCard(newDescription: string) {
    setDescription(newDescription);
  }

  function openModal(newSrc: string) {
    setModalSrc(newSrc);
    const modal = document.getElementById("modal");
    if (modal) {
      modal.style.display = "flex";
      modal.classList.add("show");
    }
  }

  function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
      modal.classList.remove("show");
      modal.style.display = "none";
    }
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
        <p className="joeSays">Joe Says:</p>
        <p className="descriptionBox">{description}</p>
      </div>

      <div id="modal" className="modal" onClick={closeModal}>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <img src={modalSrc} className="modal-content" />
      </div>
    </>
  );
}

export default Gallery;
