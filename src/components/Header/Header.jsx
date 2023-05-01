import logo from "./logo.svg";
import styled from "styled-components";

function Header() {
  return <Logo src={logo} />;
}

export default Header;

const Logo = styled.img`
  width: 200px;
  display: block;
  margin: auto;
`;
