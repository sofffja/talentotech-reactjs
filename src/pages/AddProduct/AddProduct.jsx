import { useNavigate } from "react-router";
import ProductForm from "../../components/ProductForm/ProductForm";
import { createProduct } from "../../api/client";
import { toast } from "react-toastify";

export default function AddProduct() {
  const navigate = useNavigate();

  const handleCreateProduct = async (productData) => {
    await createProduct(productData);
    toast.success("Producto creado con éxito!", {
      onClose: () => navigate("/admin"),
    });
  };

  return <ProductForm onSubmit={handleCreateProduct} />;
}
