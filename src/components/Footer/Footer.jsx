import styled from "styled-components";

function Footer() {
  return <FooterH1>논픽션 사이트입니다</FooterH1>;
}
export default Footer;

const FooterH1 = styled.h1`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
