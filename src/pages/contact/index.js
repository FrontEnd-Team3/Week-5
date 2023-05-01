import styled from "styled-components";
import Img from "../../images/img/img_01.jpg";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <S.Wrap>
      <S.Title>Contact</S.Title>
      <S.Inner>
        <S.ImgWrap>
          <img src={Img} />
        </S.ImgWrap>
        <S.InfoWrap>
          <S.InfoTxt>
            <h3>CUSTOMER SERVICE</h3>
            <p>AM 10:00 - 17:00 (MON - FRI)</p>
            <p>BREAK TIME</p>
            <p>PM 12:00 - 13:30</p>
            <p>+82 1666-7891</p>
          </S.InfoTxt>
          <S.Email>
            <ul>
              <li>
                <p>고객문의, 입점문의</p>
                <p>hello@nonfiction.com</p>
              </li>
              <li>
                <p>제휴문의</p>
                <p>press@nonfiction.com</p>
              </li>
            </ul>
          </S.Email>
          <S.Button>
            <Link to="/Contact/B2b">기업구매 문의하기</Link>
          </S.Button>
        </S.InfoWrap>
      </S.Inner>
    </S.Wrap>
  );
};
export default Contact;

const Wrap = styled.section`
  padding-top: 160px;
  min-height: 600px;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 28px;
`;
const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px;
  max-width: 1280px;
  margin: 0 auto;
`;
const ImgWrap = styled.article`
  width: 50%;
`;
const InfoWrap = styled.article`
  width: calc(50% - 80px);
  font-size: 14px;
`;
const InfoTxt = styled.div`
  h3 {
    font-weight: bold;
    margin-bottom: 12px;
  }
  p {
    margin-top: 6px;
  }
`;
const Email = styled.div`
  margin-top: 40px;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    width: 200px;
    height: 1px;
    background-color: #bbb;
  }
  li + li {
    padding-top: 20px;
  }
  p {
    margin-top: 4px;
    font-size: 12px;
  }
`;
const Button = styled.button`
  margin-top: 32px;
  padding: 12px;
  width: 160px;
  background-color: #222;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  :hover {
    color: #a9a9a9;
  }
`;

const S = {
  Wrap,
  Title,
  Inner,
  ImgWrap,
  InfoWrap,
  Button,
  InfoTxt,
  Email,
};
