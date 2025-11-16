// import { useState } from "react";
import "../css/App.css";
import { type EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";
import Header from "./Header";

function App() {
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <>
      <Header></Header>
      <div className="card">
        {/* <button onClick={testFunction}>print text</button> */}
      </div>
      <EmblaCarousel options={OPTIONS} />
    </>
  );
}

export default App;
