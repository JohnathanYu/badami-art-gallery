import { useState } from "react";
import "../css/App.css";
import { type EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";
import Header from "./Header";

function App() {
  const [description, setDescription] = useState("");
  function updateCard(newDescription: string) {
    setDescription(newDescription);
  }
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <>
      <Header></Header>
      <div className="card"></div>
      <EmblaCarousel options={OPTIONS} updateCard={updateCard} />
      <h1>{description}</h1>
    </>
  );
}

export default App;
