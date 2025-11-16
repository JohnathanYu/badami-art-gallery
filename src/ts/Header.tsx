import "../css/Header.css";

function Header() {
  return (
    <>
      <header>
        <img src="../../public/icon.jpg" alt="Page Logo" />
        <h1>Joseph Badami</h1>
        <nav>
          <a href="home.html">Gallery</a>
          <h2>|</h2>
          <a href="menu.html">Projects</a>
          <h2>|</h2>
          <a href="board-games.html">About</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
