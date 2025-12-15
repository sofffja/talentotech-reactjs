import "./ProductCard.css";
import Button from "../Button/Button";

export default function ProductCard({ product, navigate, addToCart }) {
  return (
    <div key={product.id} className="product-card">
      <p className="product-card__category">{product.category}</p>
      <img src={product.image} alt={product.name} />
      <div className="product-card__info">
        <h3>{product.name}</h3>
        <p className="product-card__price">$ {product.price}</p>
        <p className="product-card__stock">
          {product.stock > 0 ? `${product.stock} en stock` : "Agotado"}
        </p>
      </div>
      <div className="product-card__actions">
        <Button onClick={() => navigate(`/productos/${product.id}`)}>
          Ver más
        </Button>
        <Button onClick={() => addToCart(product)}>Agregar</Button>
      </div>
    </div>
  );
}
