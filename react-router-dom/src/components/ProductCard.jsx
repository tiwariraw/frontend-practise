import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product?.id}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={product?.image} alt="thumbnail" />
      <h3>{product?.title}</h3>
      <h2>${product?.price}</h2>
      <p>{product?.description}</p>
    </div>
  );
};

export default ProductCard;
