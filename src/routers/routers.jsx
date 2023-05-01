import { createBrowserRouter } from "react-router-dom";
import Fixation from "../components/Fixation";
import Mainpage from "../pages/Mainpage";
import Infor1 from "../pages/imformation/infor1";
import Infor2 from "../pages/imformation/infor2"
import Infor3 from "../pages/imformation/infor3"

const router = createBrowserRouter([
  {
    element: <Fixation />,
    children: [
      {
        path: "/",
        element: <Mainpage />,
      },
      {
        path: "information1",
        element: <Infor1 />,
      },
      {
        path: "information2",
        element: <Infor2 />,
      },
      {
        path: "information3",
        element: <Infor3 />,
      },
    ],
  },
]);

export default router;
