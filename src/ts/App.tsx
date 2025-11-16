import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../css/App.css";
import { type EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";

function App() {
  const [count, setCount] = useState(3);
  const OPTIONS: EmblaOptionsType = { loop: true };

  function testFunction() {
    console.log("return value: " + count);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count 1 is {count}
        </button>
        <button onClick={testFunction}>print text</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <EmblaCarousel options={OPTIONS} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
