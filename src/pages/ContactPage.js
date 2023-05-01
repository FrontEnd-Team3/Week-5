import styled from "styled-components";

const ContactPage = () => {
  return (
    <>
      <MainImg src="https://nonfiction4096.cafe24.com/images/massrequest/pc0.jpg" />
      <MainText>
        클라이언트, 파트너 및 임직원을 위한 선물을 논픽션과 함께 준비해 보세요.
        정성이 가득 담긴 논픽션의 다양한 기프트 세트는 웨딩을 비롯한 각종 가족
        행사의 답례품으로도 손색 없는 선택입니다. 공간에 각인되는 논픽션의
        시그니처 향과 완성도 높은 퀄리티의 제품은 받는 이의 곁에서 특별한 감사의
        기억을 더욱 오래도록 전해드릴 것입니다.
      </MainText>
      <MainBtnOutForm>
        <MainBtn>기업구매상담</MainBtn>
      </MainBtnOutForm>
      <div>
        <MainText2Title>기업 구매 유의사항</MainText2Title>
        <MainText2SubTitle>용도 확인 정책</MainText2SubTitle>
        <MainText2SubText>
          재판매 등 의도하지 않은 부작용을 막기 위해 대량 구매 진행시 용도에
          관한 명확한 확인 절차와 증빙자료를 요청드리고 있습니다. 대량 구매
          제품을 선물 이외의 용도로 사용하시는 것은 엄격하게 제한됩니다.
        </MainText2SubText>
        <MainText2SubTitle>배송 및 소요시간</MainText2SubTitle>
        <MainText2SubText>
          협의된 배송일에 지정된 한 곳의 주소지로 택배 발송됩니다. 배송까지의
          소요시간은 주문 수량 및 포장/물류 센터의 상황에 따라 달라질 수
          있습니다. 대량 주문은 최소 1주일 전 발주를 권해 드리며, 견적 요청시
          희망 배송일을 함께 확인해 정상 배송 가능 여부를 알려드리고 있습니다
        </MainText2SubText>
        <MainText2SubTitle>교환정책</MainText2SubTitle>
        <MainText2SubText>
          하자가 있거나 배송 중 파손된 제품에 대해서는 배송 받으신 송장과 훼손된
          부분을 사진으로 확인한 뒤 교환해 드리고 있습니다. 단순 변심 등 기타
          개인적 사유에 의한 반품 및 교환은 불가한 점 양지해 주시기 바랍니다.
        </MainText2SubText>
      </div>
    </>
  );
};

const MainImg = styled.img`
  width: 980px;
  margin-left: 250px;
`;

const MainText = styled.p`
  width: 470px;
  text-align: center;
  margin-left: 480px;
  margin-top: 70px;
  font-size: 14px;
`;

const MainBtn = styled.a`
  font-size: 14px;
  outline: none;
  text-decoration: none;
  color: black;
  font-weight: 500;
  cursor: pointer;
`;

const MainBtnOutForm = styled.div`
  display: block;
  border: 1px solid black;
  padding: 10px 15px;
  text-align: center;
  background-color: white;
  width: 200px;
  margin-top: 70px;
  margin-left: 600px;
  cursor: pointer;
  transition: filter 0.2s linear;
  :hover {
    background-color: grey;
  }
`;

const MainText2Title = styled.h4`
  width: 470px;
  text-align: center;
  margin-top: 110px;
  margin-left: 480px;
`;

const MainText2SubTitle = styled.a`
  width: 470px;
  text-align: center;
  margin-left: 670px;
  margin-top: 10px;
`;

const MainText2SubText = styled.p`
  width: 470px;
  text-align: center;
  margin-left: 480px;
  margin-top: 20px;
  font-size: 14px;
`;

export default ContactPage;
