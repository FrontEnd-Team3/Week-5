import styled from "styled-components";
import Logo from "../../../images/img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <S.HeaderWarp id="header">
        <S.LogoWrap className="logo">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </S.LogoWrap>
      </S.HeaderWarp>
    </>
  );
};
export default Header;

const HeaderWarp = styled.header`
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat;
`;

const LogoWrap = styled.h1`
  position: absolute;
  left: 50%;
  top: 0;
  padding-top: 10px;
  padding-bottom: 15px;
  background-color: transparent;
  transform: translateX(-50%);

  a {
    display: block;
    width: 110px;
  }
`;

const S = {
  HeaderWarp,
  LogoWrap,
};
