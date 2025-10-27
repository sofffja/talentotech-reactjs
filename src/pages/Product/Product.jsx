import './Product.css';
import { useParams } from 'react-router';

export default function Product() {
  const { id } = useParams();

  return (
    <div className="product">
      <h1>Producto {id}</h1>
      <p>Detalles del producto...</p>
    </div>
  );
}
