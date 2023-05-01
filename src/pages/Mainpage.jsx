import img1 from "./imges/제품1.jpg";
import img2 from "./imges/제품2.jpg";
import img3 from "./imges/제품3.jpg";
import styled from "styled-components";
import Maincomponetns from "./components";

function Mainpage() {
  return (
    <Imgflex>
      <Maincomponetns
        information="information1"
        img={img1}
        title="GAIAC FLOWER"
        title2="Hand Wash"
        a=" 300"
        b="ML"
        c=" / 10"
        d="OZ"
        price="32,000 KRW"
        explain="스모키하게 변주되는 오리엔털 플로럴의 순수함과 관능. 논픽션 핸드워시는
        식물성 오일 성분을 함유해 피부 손상을 최소화하며, 풍성한 향기로
        즉각적인 리프레시를 선사합니다."
      />
      <Maincomponetns
        information="information2"
        img={img2}
        title="GAIAC FLOWER"
        title2="Hand Cream"
        a="50"
        b="ML"
        c=" / 1.7"
        d="OZ"
        price="21,000 KRW"
        explain="스모키하게 변주되는 오리엔털 플로럴의 순수함과 관능. 시어버터와
        비타민E를 함유한 논픽션 핸드크림은 건조한 손 피부를 더욱 생기있게
        케어합니다."
      />
      <Maincomponetns
        information="information3"
        img={img3}
        title="TABLE GUEST"
        title2="Scented Candle"
        a="200"
        b="G"
        price="78,000 KRW"
        explain=" 초여름이 시작되는 달콤한 공기. 보랏빛으로 익어가는 블랙커런트와 여린
        풀잎의 상쾌함. 자연과 공간이 주는 영감 위에 그라스 향료 제조의
        헤리티지를 담아 완성한 논픽션 센티드 캔들의 드라마틱한 스토리텔링을
        만나보세요."
      />
    </Imgflex>
  );
}
export default Mainpage;

const Imgflex = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;
