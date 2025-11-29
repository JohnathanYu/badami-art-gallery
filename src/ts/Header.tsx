import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../css/Header.css";

function Header() {
  return (
    <>
      <header>
        <a href="#gallery">
          <img src="icon.jpg" alt="Page Logo" />
        </a>
        <h1>Joseph Badami</h1>
        <Navbar className="navigation">
          <Nav>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            {/* <Nav.Link href="#projects">Projects</Nav.Link> */}
            <Nav.Link href="#About">About</Nav.Link>
          </Nav>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
