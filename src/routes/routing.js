import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import Detail from "../pages/detail";
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
        path: "/:todoId",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
