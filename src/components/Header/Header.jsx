import './Header.css';
import { NavLink } from 'react-router';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export default function Header() {
  const { cartItems } = useContext(CartContext);

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
              <span className="header__count">{cartItems.length}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
