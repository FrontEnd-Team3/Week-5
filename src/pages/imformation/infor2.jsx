import img2 from "../imges/제품2.jpg";
import moduleStyle from "./ModuleStyle.module.css";
import { useState } from "react";

function Infor2() {
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
      <h4>Hand Cream</h4>
      <img src={img2} className={moduleStyle.img} />
      <p className={moduleStyle.font}>
        끈적임 없이 빠르게 흡수되어 벨벳같은 부드러움만 남기는 논픽션 핸드크림은
        셰어버터와 비타민E를 함유해 건조한 손을 더욱 생기 있게 케어합니다. 손의
        온기를 통해 주변으로 따뜻하게 퍼지는 매력적인 향기는 당신의 공간 속에
        색다른 여운과 표정을 선사할 것입니다.
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
export default Infor2;
