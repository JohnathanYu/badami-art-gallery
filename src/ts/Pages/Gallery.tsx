import { type EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../EmblaCarousel";
import { useState } from "react";

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
      <p>{description}</p>
    </>
  );
}

export default Gallery;
