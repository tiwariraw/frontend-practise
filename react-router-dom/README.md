# References

- https://react.dev/reference/react/lazy
- https://react.dev/reference/react/Suspense

- https://www.youtube.com/watch?v=pj5N-Khihgc (Streaming Server Rendering with Suspense -> React conf)
- https://github.com/reactwg/react-18/discussions/37

- https://chat.deepseek.com/a/chat/s/9fa9691e-9fc2-4c93-9434-1afa32c80975
- https://chatgpt.com/c/680f16bd-a9cc-8000-a23a-73d40f3f0990 (own react-router-dom implementation )

- https://www.youtube.com/watch?v=JU6sl_yyZqs (Speed Up Your React Apps With Code Splitting -> web dev simplified)

- [React Router: `createRoutesFromElements`](https://reactrouter.com/6.30.0/utils/create-routes-from-elements) (VIP)
  A helper to create route objects from `<Route>` elements.
  - createRoutesFromElements is a helper that creates route objects from <Route> elements. It's useful if you prefer to create your routes as JSX instead of objects.

### Using `createRoutesFromElements` with React Router

```jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./components/Root";
import Dashboard from "./components/Dashboard";
import About from "./components/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

// In your main application file
<RouterProvider router={router} />;
```

### Equivalent Route Configuration Using Route Objects

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Dashboard from "./components/Dashboard";
import About from "./components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

// In your main application file
<RouterProvider router={router} />;
```
