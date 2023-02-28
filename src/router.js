import { createBrowserRouter, redirect } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Layout from "./pages/Layout/Layout";
import DataTable from "./components/datatable/Datatable";
import Error from "./pages/error/Error";
import {
  USERS_PATTERN,
  PRODUCTS_PATTERN,
} from "./components/datatable/PATTERNS";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      {
        path: "users",
        element: <DataTable columns={USERS_PATTERN} type="users" />,
      },
      {
        path: "products",
        element: <DataTable columns={PRODUCTS_PATTERN} type="products" />,
      },
      {
        path: "orders",
        element: <DataTable columns={PRODUCTS_PATTERN} type="products" />,
      },
      {
        path: "deliveries",
        element: <DataTable columns={PRODUCTS_PATTERN} type="products" />,
      },

      {
        path: "state",
        element: <>state</>,
      },

      {
        path: "notifications",
        element: <>notifications</>,
      },

      {
        path: "system",
        element: <>deliveries</>,
      },
      {
        path: "logs",
        element: <>deliveries</>,
      },
      {
        path: "settings",
        element: <>deliveries</>,
      },
      {
        path: "users/new",
        element: <New />,
      },
      {
        path: "users/:userId",
        element: <Single />,
        loader({ params: { userId } }) {
          return isNaN(userId) ? redirect("/") : null;
        },
      },
    ],
  },
]);
