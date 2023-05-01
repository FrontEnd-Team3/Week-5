import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterMain>
        <FooterBox>
          <FooterInner>
            <FooterH3>CUSTOMER SERVICE</FooterH3>
            <FooterInnerP>
              <i className="fa fa-phone"></i>
              <span
              //   style="font-size: 24px;"
              >
                1666-7891
              </span>
            </FooterInnerP>
            <FooterCustomer>
              <FooterA>이용약관 </FooterA>
              <span>|</span>
              <FooterA>개인정보처리방침 </FooterA>
              <span>|</span>
              <FooterA>사업자 정보 확인</FooterA>
            </FooterCustomer>
          </FooterInner>
          <FooterInner1>
            <FooterH3>MEMBERSHIP BENEFIT</FooterH3>
            <ul>
              <FooterInnerLi>
                <FooterA>공식 온라인 스토어 혜택</FooterA>
              </FooterInnerLi>
              <FooterInnerLi>
                <FooterA>무료 시향지 신청</FooterA>
              </FooterInnerLi>
            </ul>
          </FooterInner1>
          <FooterInner>
            <FooterH3>INFO</FooterH3>
            <ul>
              <FooterInnerLi>
                <FooterA>공지사항</FooterA>
              </FooterInnerLi>
              <FooterInnerLi>
                <FooterA>채용</FooterA>
              </FooterInnerLi>
              <FooterInnerLi>
                <FooterA>자주묻는 질문</FooterA>
              </FooterInnerLi>
              <FooterInnerLi>
                <FooterA>배송 & 교환/반품</FooterA>
              </FooterInnerLi>
            </ul>
          </FooterInner>
          <FooterInner>
            <FooterH3>CONTACT US</FooterH3>
            <ul>
              <FooterInnerLi>
                <FooterA>주문조회</FooterA>
              </FooterInnerLi>
              <FooterInnerLi>
                <FooterA>문의하기</FooterA>
              </FooterInnerLi>
              <FooterInnerLi>
                <FooterA>기업구매 문의</FooterA>
              </FooterInnerLi>
              <FooterInnerLi>
                <FooterA>고객센터</FooterA>
              </FooterInnerLi>
              <FooterInnerLi>
                <FooterA>매장안내</FooterA>
              </FooterInnerLi>
            </ul>
          </FooterInner>
          <FooterInner>
            <FooterH3>SOCIAL</FooterH3>
            <ul className="social">
              <FooterInnerLi>
                <FooterA></FooterA>Instagram
              </FooterInnerLi>
              <FooterInnerLi>
                <FooterA></FooterA>Pinterest
              </FooterInnerLi>
              <FooterInnerLi>
                <FooterA></FooterA>Kakao
              </FooterInnerLi>
            </ul>
          </FooterInner>
        </FooterBox>
      </FooterMain>
    </>
  );
};

const FooterMain = styled.div`
  position: absolute;
  width: 100%;
  padding: 50px;
  margin-top: 30px;
  font-size: 14px;
  line-height: 1.4;
`;

const FooterH3 = styled.h3`
  margin: 0 0 15px;
  font-size: 20px;
  font-weight: 400;
`;

const FooterA = styled.a`
  font-size: 14px;
`;

const FooterBox = styled.div`
  width: 100%;
  border-top: 1px solid black;
  padding-top: 50px;
  display: flex;
  align-items: flex-start;
`;

const FooterInner = styled.div`
  margin-bottom: 50px;
  padding: 0 15px 0 15px;
  flex: 1 1 25%;
`;

const FooterInner1 = styled.div`
  margin-bottom: 50px;
  padding: 0 55px 0 15px;
  flex: 1 1 25%;
`;

const FooterInnerP = styled.p`
  margin: 0 0 20px;
`;

const FooterInnerLi = styled.li`
  padding: 0 30px 5px 0;
  list-style-type: none;
`;

const FooterCustomer = styled.div`
  font-size: 10px;
`;

export default Footer;
