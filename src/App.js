import router from "./routes/routings";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <GlobalStyles />
    </div>
  );
}

export default App;
