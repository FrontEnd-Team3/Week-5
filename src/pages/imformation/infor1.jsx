import img1 from "../imges/제품1.jpg";
import moduleStyle from "./ModuleStyle.module.css";
import { useState } from "react";

function Infor1() {
  let [count, setcount] = useState(0);
  const Plus = () => {
    setcount(count + 1);
  };
  const Zero = () => {
    setcount((count = 0));
  };
  return (
    <div className={moduleStyle.position}>
      <h4>GAIAC FLOWER</h4>
      <h4>Hand Wash</h4>
      <img src={img1} className={moduleStyle.img} />
      <p className={moduleStyle.font}>
        오염과 건조함 사이에서 빠르게 지쳐가는 손의 피부는 더욱 섬세한 보호를
        필요로합니다.
        <br />
        <br />
        식물 유래 계면활성제와 풍부한 진정 성분을 함유한 논픽션 핸드워시는
        스쿠알란, 아보카도, 스위트아몬드, 해바라기씨 등 식물성 오일 성분으로
        피부 손상을 최소화하며, 풍성한 향기로 즉각적인 리프레시를 선사합니다.
        흐르는 물과 함께 퍼지는 향기로 일상에 리프레쉬를 줍니다.
      </p>
      <button className={moduleStyle.button} onClick={Plus}>
        카트에 추가하기
      </button>
      <button className={moduleStyle.button} onClick={Zero}>
        초기화
      </button>
      <span className={moduleStyle.span}>{count} 개</span>
    </div>
  );
}
export default Infor1;
