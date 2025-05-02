/* NOTE: use below commented code (and modify the main.jsx) when creating data router using createBrowserRouter
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
*/

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Product from "./components/Product";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import ErrorPage from "./components/ErrorPage";
import { wait } from "./utils/wait.js";
import Search from "./components/Search.jsx";
import { contactLoader } from "./utils/loader.js";
// import About from "./components/About";
// import Products from "./components/Products"; // static import

const Products = lazy(() => {
  return import("./components/Products").then((module) => {
    console.log(module);
    return module;
  });
});

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

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={
            <Suspense fallback={<h3 className="loading">Loading...</h3>}>
              <About />
            </Suspense>
          }
        />

        <Route
          path="/contact"
          element={
            <Suspense fallback={<h3 className="loading">Loading...</h3>}>
              <Contact />
            </Suspense>
          }
          loader={contactLoader} // fetching data using react-router-dom library
        />

        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Suspense fallback={null}>
                <Products />
              </Suspense>
            </PrivateRoute>
          }
        />

        <Route
          path="/products/:id"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/search" element={<Search />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
