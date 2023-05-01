import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import ShopAll from "../pages/shopall";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ShopAll />,
      },
      {
        path: "/items/:itemId",
      },
    ],
  },
]);

export default router;
