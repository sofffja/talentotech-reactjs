import './Header.css';
import { NavLink } from 'react-router';

export default function Header() {
  return (
    <div className="header">
      <h1>Tienda</h1>
      <nav>
        <ul className="header__menu">
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/productos">Productos</NavLink>
          </li>
          <li>
            <NavLink to="/carrito" className="header__cart">
              <span>Carrito</span>
              <span className="header__count">0</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
