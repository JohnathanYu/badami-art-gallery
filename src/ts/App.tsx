import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Gallery from "./Pages/Gallery";

function App() {
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
      </main>
    </>
  );
}

export default App;
