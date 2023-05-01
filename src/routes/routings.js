import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import MainPage from "../pages/main";
import Contact from "../pages/contact";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/contact/:contactId",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
