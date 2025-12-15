import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import ProductForm from "../components/ProductForm/ProductForm";
import { getProductById, updateProduct } from "../api/client";
import { toast } from "react-toastify";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        setProduct(productData);
      } catch (err) {
        setError("No se pudo cargar el producto. Inténtalo de nuevo.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleUpdateProduct = async (productData) => {
    await updateProduct(id, productData);
    toast.success("Producto actualizado con éxito!", {
      onClose: () => navigate("/admin"),
    });
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ProductForm onSubmit={handleUpdateProduct} initialProduct={product} />
  );
}
