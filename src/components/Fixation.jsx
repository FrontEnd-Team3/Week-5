import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Fixation() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Fixation;
