import React from "react";
import "./lib/i18n.ts";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../app/globals.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ErrorPage from "./components/error-page.tsx";
import { UserSettingsLayout } from "./(dashboard)/userSettings/user-settings-layout.tsx";
import { UserAppsLayout } from "./(dashboard)/userApps/user-apps-layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <App /> },
      { path: "/mint", element: <App /> },
      { path: "/apps", element: <UserAppsLayout /> },
      { path: "/transactions", element: <App /> },
      { path: "/settings", element: <UserSettingsLayout /> },
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
