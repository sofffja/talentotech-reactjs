import "./Admin.css";
import { useNavigate } from "react-router";
import { deleteProduct } from "../../api/client";
import Button from "../../components/Button/Button";
import { useProducts } from "../../hooks/useProducts";

export default function Admin() {
  const { products, loading, error, setProducts } = useProducts();
  const navigate = useNavigate();

  if (error) return <p>{error}</p>;
  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="admin">
      <h1>Panel de Administración</h1>

      <div className="admin__add-product-button">
        <Button
          onClick={() => {
            navigate("/admin/agregar-producto");
          }}
          variant="secondary"
        >
          + Agregar Producto
        </Button>
      </div>

      <div className="">
        {products.map((product) => (
          <div key={product.id} className="admin__product">
            <p>{product.name}</p>
            <div className="admin__product-buttons">
              <Button
                onClick={() => {
                  console.log("Editar producto", product.id);
                  navigate(`/admin/editar-producto/${product.id}`);
                }}
              >
                Editar
              </Button>
              <Button
                onClick={() => {
                  if (
                    window.confirm(
                      "¿Estás seguro de que deseas eliminar este producto?"
                    )
                  ) {
                    deleteProduct(product.id);
                    setProducts(products.filter((p) => p.id !== product.id));
                  }
                }}
              >
                Eliminar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
