import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../app/globals.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ErrorPage from "./components/error-page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/dashboard/profile", element: <App /> },
      { path: "/dashboard/activity", element: <App /> },
      { path: "/dashboard/setting", element: <App /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
