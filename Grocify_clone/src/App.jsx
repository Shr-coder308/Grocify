import React from "react";
import Home from "./component/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./component/Fruits/Fruits";
import Dairy from "./component/Dairy/Dairy";
import SeaFood from "./component/SeaFood/SeaFood";
import AllProducts from "./component/AllProducts/AllProducts";
import Layout from "./component/Layout/Layout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/fruits",
          element: <Fruits />,
        },
        {
          path: "/dairy",
          element: <Dairy />,
        },
        {
          path: "/seafood",
          element: <SeaFood />,
        },
        {
          path: "/allproducts",
          element: <AllProducts />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
