import { useState } from "react";
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { type EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";
import Header from "./Header";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Gallery from "./Pages/Gallery";

function App() {
  const [description, setDescription] = useState("");
  function updateCard(newDescription: string) {
    setDescription(newDescription);
  }
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <>
      <Header></Header>
      <main>
        <HashRouter>
          <Routes>
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </HashRouter>
        <EmblaCarousel options={OPTIONS} updateCard={updateCard} />
        <p>{description}</p>
      </main>
    </>
  );
}

export default App;
