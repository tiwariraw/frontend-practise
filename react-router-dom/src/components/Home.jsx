import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  return (
    <div className="home">
      <h3>Home page</h3>
      <p className="url">Current URL: {location.pathname}</p>
    </div>
  );
};

export default Home;
