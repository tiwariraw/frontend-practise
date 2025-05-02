import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();

  return (
    <>
      <h3 className="error">Error page</h3>

      <h3 className="error">
        {err.status} - {err.statusText}
      </h3>

      <h3 className="error">{err.data}</h3>
    </>
  );
};

export default ErrorPage;

// useRouteError can only be used with data router (createBrowserRouter or createHashRouter)
