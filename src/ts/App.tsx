import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Gallery from "./Pages/Gallery";
import NotFoundPage from "./Pages/NotFoundPage";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </HashRouter>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
