import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("pageId"));

  const onClickNavigationContact = () => {
    window.location.href = "/contact";
  };

  //   let [contactText, setContactText] = useState([
  //     "CONTACT",
  //     "COMSTOMER SURVICE",
  //     "PM 13:30 - 17:30 (MON - FRI)",
  //     "BREAK TIME",
  //     "PM 12:00 - 13:30",
  //     "+82 1666-7891",
  //     "고객문의",
  //     "입점문의",
  //     "hello@nonfiction.com",
  //     "제휴문의",
  //     "press@nonfiction.com",
  //   ]);

  return (
    <>
      <S.Main>
        <div className="title">
          <S.H3>CONTACT</S.H3>
        </div>
        <S.Section>
          <div className="main-img">
            <S.ImgBig src="https://nonfiction.com/web/upload/category/editor/2022/01/12/5a14f8cfa738b945e43100970e2fce25.jpg" />
          </div>
          <S.MainText>
            <div>
              COMSTOMER SURVICE <br />
              PM 13:30 - 17:30 (MON - FRI) <br />
              BREAK TIME <br />
              PM 12:00 - 13:30 <br />
              +82 1666-7891
              <br />
              <br />
              <S.MainTextLine></S.MainTextLine>
              <br />
              <br />
              고객문의, 입점문의 <br />
              hello@nonfiction.com <br />
              제휴문의 <br />
              press@nonfiction.com <br />
              <br />
              <S.MainTextInputBtn>
                <S.A onClick={onClickNavigationContact}>기업구매 문의하기</S.A>
              </S.MainTextInputBtn>
            </div>
          </S.MainText>
        </S.Section>
      </S.Main>

      {/* <div className='contactForm'>
                <h4>{contactText[0]}</h4>
                <div>{contactText[1]}</div>
                <div>{contactText[2]}</div>
                <div>{contactText[3]}</div>
                <div>{contactText[4]}</div>
                <div>{contactText[5]}</div>
            </div>
            <div className='contactForm'>
                <div>{contactText[6]}</div>
                <div>{contactText[7]}</div>
                <div>{contactText[8]}</div>
                <div>{contactText[9]}</div>
                <div>{contactText[10]}</div>
            </div>
            <button onClick={onClickNavigationContact}>기업구매 문의하기</button> */}
    </>
  );
};

const Main = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  position: relative;
  padding-top: 240px;
`;

const ImgBig = styled.img`
  width: 400px;
  height: 432px;
  padding-right: 40px;
`;

const H3 = styled.h3`
  font-weight: 400;
  text-align: center;
  margin: 40px 20px;
  padding: 30px 0;
`;

const Section = styled.section`
  max-width: 1000px;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  margin-left: 100px;
`;

const MainText = styled.div`
  font-size: 12px;
`;

const MainTextLine = styled.div`
  border-bottom: 1px solid #000;
`;

const MainTextInputBtn = styled.div`
  display: block;
  border: 1px solid black;
  padding: 10px 15px;
  text-align: center;
  background-color: #000;
  width: 200px;
  cursor: pointer;
  transition: filter 0.6s linear;
  :hover {
    opacity: 0.7;
  }
`;

const A = styled.a`
  font-size: 14px;
  outline: none;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`;

const S = {
  Main,
  ImgBig,
  H3,
  Section,
  MainText,
  MainTextLine,
  MainTextInputBtn,
  A,
};

export default MainPage;
