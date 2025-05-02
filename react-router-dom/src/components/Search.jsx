import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const handleChange = (e) => {
    setSearchParams({ query: e.target.value });
  };

  return (
    <>
      <h3 className="search">Search Page</h3>
      <div className="query-input-container">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search something..."
        />
        <p className="query">Current Query: {query}</p>
      </div>
    </>
  );
};

export default Search;
