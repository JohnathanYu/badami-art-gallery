import { type EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../EmblaCarousel";
import { useState } from "react";
import "../../css/gallery.css";

function Gallery() {
  const [description, setDescription] = useState("");
  function updateCard(newDescription: string) {
    setDescription(newDescription);
  }
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <>
      <title>Gallery</title>
      <EmblaCarousel options={OPTIONS} updateCard={updateCard} />
      <div>
        <p>{description}</p>
      </div>
    </>
  );
}

export default Gallery;
