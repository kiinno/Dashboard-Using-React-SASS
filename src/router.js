import { createBrowserRouter, Outlet, redirect } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
export default createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <>Error</>,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "users", element: <List /> },
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
