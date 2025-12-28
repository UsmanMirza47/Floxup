import CheckoutPage from "./Pages/CheckoutPage";
import Products from "./Pages/Products";
import ViewProduct from "./Pages/ViewProduct";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Products />,
    },
    {
      path: "/viewproduct/:id",
      element: <ViewProduct />,
    },
    {
      path: "/checkout/:id",
      element: <CheckoutPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
};

export default App;
