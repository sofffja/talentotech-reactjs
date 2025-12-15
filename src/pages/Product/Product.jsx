import "./Product.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getProductById } from "../../api/client";
import { useCartContext } from "../../context/CartContext";
import Button from "../../components/Button/Button";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  const { addToCart } = useCartContext();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        setError("Lo sentimos, hubo un error al cargar los productos.");
        console.error(err);
      }
    };

    fetchProduct();
  }, []);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading...</p>;

  console.log(product);

  return (
    <div>
      <h1>{product.name}</h1>
      <div>
        <img src={product.image} alt="" />
        <p>{product.description}</p>
        <p>${product.price}</p>
        <p>{product.stock > 0 ? `${product.stock} en stock` : "Agotado"}</p>
      </div>
      <div>
        <Button onClick={() => addToCart(product)}>Agregar al carrito</Button>
      </div>
    </div>
  );
}
