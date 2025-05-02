import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import { useParams } from "react-router-dom";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);

      if (!data.ok) {
        console.log(data.status, data.statusText);
      }

      const json = await data.json();
      setLoading(false);
      setProduct(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="products-container">
      {loading && <Loader loading={loading} />}
      {error && <div>{error}</div>}
      <ProductCard product={product} />
    </div>
  );
};

export default Products;
