import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loader from "./Loader";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await fetch("https://fakestoreapi.com/products");

      if (!data.ok) {
        console.log(data.status, data.statusText);
      }

      const json = await data.json();
      setLoading(false);
      setProducts(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products-container">
      <h3>Products</h3>
      {loading && <Loader loading={loading} />}
      {error && <div>{error}</div>}
      <ul className="products-list">
        {products?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
