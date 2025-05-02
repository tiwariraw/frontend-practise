import { ClipLoader } from "react-spinners";

const Loader = ({ loading }) => {
  return (
    <div className="loader">
      <ClipLoader
        color={"oklch(66.7% 0.295 322.15)"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
