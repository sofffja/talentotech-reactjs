import "./Cart.css";
import { useCartContext } from "../../context/CartContext";
import Button from "../../components/Button/Button";

export default function Cart() {
  const { cartItems, clearCart, removeFromCart } = useCartContext();

  return (
    <div className="cart">
      <h1>Carrito</h1>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul className="cart__list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart__item">
              <img src={item.image} alt={item.title} />
              <div className="cart__item-info">
                <h3>{item.title}</h3>
                <p className="cart__item-price">$ {item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>X</button>
            </li>
          ))}
        </ul>
      )}

      <div className="cart__total">
        <p>Total: $ {cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
      </div>

      <div className="cart__buttons">
        <Button onClick={clearCart}>Limpiar carrito</Button>
        <Button variant="secondary">Comprar</Button>
      </div>
    </div>
  );
}
