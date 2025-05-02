import { useLocation, useLoaderData } from "react-router-dom";

export const Contact = () => {
  const location = useLocation();
  const products = useLoaderData();

  return (
    <div className="contact">
      <h3>Contact page</h3>
      <p className="url">Current URL: {location.pathname}</p>

      <ul>
        {products?.map((product) => (
          <li key={product?.id}>{product?.title}</li>
        ))}
      </ul>
    </div>
  );
};

// This is a named export (see in App.jsx to observe how lazy()
// works with named export)
