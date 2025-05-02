import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/* NOTE: use below commented code (and modify the App.jsx) when creating data router using createBrowserRouter
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Product from "./components/Product";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import ErrorPage from "./components/ErrorPage";
import Search from "./components/Search.jsx";
import { wait } from "./utils/wait.js";

const Products = lazy(() => import("./components/Products"));

const About = lazy(() => wait(1000).then(() => import("./components/About")));

// if the component (Contact) is named export instead of default export
const Contact = lazy(() => {
  return import("./components/Contact.jsx").then((module) => {
    console.log(module);
    return {
      default: module.Contact,
    };
  });
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/", // instead of the path: "/", we can use index: true
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h3 className="loading">Loading...</h3>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h3 className="loading">Loading...</h3>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/products",
        element: (
          <PrivateRoute>
            <Suspense fallback={null}>
              <Products />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
      {
        path: "/search",
        element: (
          <Search />
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
*/
