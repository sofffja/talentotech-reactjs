import "./Header.css";
import { NavLink } from "react-router";
import { useAuthContext } from "../../context/AuthContext";
import { useCartContext } from "../../context/CartContext";
import Button from "../Button/Button";
import { FaShoppingCart, FaUser, FaSignInAlt, FaSignOutAlt, FaHome, FaStore, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const { isAuthenticated, logout } = useAuthContext();
  const { cartItems } = useCartContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="header__logo">
        <h1>Tienda</h1>
      </div>
      
      <button className="header__toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
        <ul className="header__menu">
          <li>
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/productos" onClick={() => setIsMenuOpen(false)}>
               Productos
            </NavLink>
          </li>
          <li>
            <NavLink to="/carrito" className="header__cart" onClick={() => setIsMenuOpen(false)}>
              <FaShoppingCart />
              <span>Carrito</span>
              <span className="header__count">{cartItems.length}</span>
            </NavLink>
          </li>
          {isAuthenticated ? (
            <>
              <li className="header__admin">
                <NavLink to="/admin" onClick={() => setIsMenuOpen(false)}>
                    Admin
                </NavLink>
              </li>
              <li>
                <Button onClick={() => { logout(); setIsMenuOpen(false); }}>
                    <FaSignOutAlt /> LOG OUT
                </Button>
              </li>
            </>
          ) : (
            <li>
              <NavLink to="/login" onClick={() => setIsMenuOpen(false)}>
                <FaSignInAlt /> Log in
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
