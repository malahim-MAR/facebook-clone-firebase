import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Layout from "../Layout";

import { createBrowserRouter } from "react-router-dom";

export const routesBeforeLogin = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "Signup",
        element: <Signup />,
      },
    ],
  },
]);
