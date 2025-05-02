import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  return (
    <div className="about">
      <h3>About page</h3>
      <p className="url">Current URL: {location.pathname}</p>
    </div>
  );
};

export default About;
