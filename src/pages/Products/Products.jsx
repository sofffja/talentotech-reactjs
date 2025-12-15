import "./Products.css";
import { useState, useContext } from "react";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../../components/ProductCard/ProductCard";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";

export default function Products() {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className="products">
      <h2>PRODUCTOS</h2>

      <div className="products__search">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="products__search-input"
        />
      </div>

      <ul className="products__list">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <li key={product.id}>
              <ProductCard
                product={product}
                navigate={navigate}
                addToCart={addToCart}
              />
            </li>
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </ul>

      {totalPages > 1 && (
        <div className="products__pagination">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            variant="secondary"
          >
            Anterior
          </Button>
          <span className="products__pagination-info">
            Página {currentPage} de {totalPages}
          </span>
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            variant="secondary"
          >
            Siguiente
          </Button>
        </div>
      )}
    </div>
  );
}
