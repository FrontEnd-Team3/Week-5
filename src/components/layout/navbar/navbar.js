import Logo from "./logo/logo";
import Menu from "./menu/menu";
import Header from "./style";
import SmallNav from "./small-nav/small-nav";

const NavBar = () => {
  return (
    <Header>
      {/* <Menu /> */}
      <Logo />
      <SmallNav />
    </Header>
  );
};
export default NavBar;
