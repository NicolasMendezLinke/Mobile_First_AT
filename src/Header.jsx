import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [menuOn, setMenuOn] = useState(false);

  const toggleMenu = () => {
    setMenuOn(!menuOn);
  };

  return (
    <div className="header-content" id="inicio">
      <nav className="nav-btn">
        <img
          src="src/assets/menu-icon.png"
          alt="botão navegador"
          className="menu-icon"
          onClick={toggleMenu}
        />
        {menuOn && (
          <div className="menu-dropdown">
            <a href="#biografia" onClick={toggleMenu}>
              BIOGRAFIA
            </a>
            <a href="#propostas" onClick={toggleMenu}>
              PROPOSTAS
            </a>
            <a href="#agenda" onClick={toggleMenu}>
              AGENDA
            </a>
            <a href="#Contato" onClick={toggleMenu}>
              CONTATO
            </a>
          </div>
        )}
      </nav>

      <div>
        <h1
          style={{
            color: "white",
            fontFamily: '"Montserrat", sans-serif',
          }}
        >
          46 Marco Madureira
        </h1>
      </div>

      <div className="menu-desktop">
        <ul>
          <li>
            <a href="#biografia">BIOGRAFIA</a>
          </li>
          <li>
            <a href="#propostas">PROPOSTAS</a>
          </li>
          <li>
            <a href="#agenda">AGENDA</a>
          </li>
          <li>
            <a href="#Contato">CONTATO</a>
          </li>
        </ul>
      </div>
      
    </div>
  );
};

export default Header;
