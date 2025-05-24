// TopBar.jsx
import './TopBar.css';

export default function TopBar() {
  return (
    <header className="TopBar">
      <div className="TopBar-logo">TPV WEB</div>

      <div className="TopBar-resto">
        <nav className="TopBar-nav">
          <a href="#inicio">Inicio</a>
          <a href="#ventajas">Ventajas</a>
          <a href="#packs">Packs</a>
          <a href="#capturas">Capturas</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <button className="TopBar-cta">Solicitar demo</button>
      </div>
    </header>
  );
}
