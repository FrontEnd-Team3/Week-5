import styled from "styled-components";

const Footer = () => {
  return (
    <S.FooterWrap>
      <S.FooterText>
        <p>CUSTOMER SERVICE</p>
        <a href="tel;">1666-7891</a>
        <S.FooterInfo>
          <a href="#;">이용약관</a>
          <a href="#;">개인정보 처리방침</a>
          <a href="#;">사업자 정보 확인</a>
        </S.FooterInfo>
      </S.FooterText>
    </S.FooterWrap>
  );
};
export default Footer;

const FooterWrap = styled.footer`
  padding: 28px 32px 40px;
  background-color: #222;
  color: #fff;
`;
const FooterText = styled.div`
  a {
    display: inline-block;
    margin-top: 8px;
  }
`;
const FooterInfo = styled.div`
  a {
    padding: 0 8px;
    border-right: 1px solid #fff;
  }
  a:first-child {
    padding-left: 0;
  }
  a:last-child {
    padding-right: 0;
  }
`;

const S = {
  FooterWrap,
  FooterText,
  FooterInfo,
};
