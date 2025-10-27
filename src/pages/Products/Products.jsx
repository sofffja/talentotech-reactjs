import './Products.css';
import { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => setError(err));
  }, []);

  if (error) return <p>{error}</p>;
  if (!products) return <p>Loading...</p>;

  return (
    <div className="products">
      <h2>PRODUCTOS</h2>
      <ul className="products__list">
        {products.map((product) => (
          <li key={product.id} className="products__item">
            <img src={product.images[0]} alt={product.title} />
            <div className="products__item-info">
              <h3>{product.title}</h3>
              <p className="products__item-price">$ {product.price}</p>
            </div>
            <Button>Agregar al carrito</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
