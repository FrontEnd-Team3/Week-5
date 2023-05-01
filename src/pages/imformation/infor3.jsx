import img3 from "../imges/제품3.jpg";
import moduleStyle from "./ModuleStyle.module.css";
import { useState } from "react";

function Infor3() {
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
      <img src={img3} className={moduleStyle.img} />
      <p className={moduleStyle.font}>
        초여름이 시작되는 달콤한 공기.보랏빛으로 익어가는 블랙커런트와 여린
        풀잎의 상쾌함. 테이블게스트는 모든 이야기의 시작에 담긴 찬란한 설렘을
        그려냅니다. 연둣빛 덩굴 사이로 감도는 촉촉한 흙내음과 바람결에 실린
        화사한 프리지아의 향기가 생기 넘치는 여름 정원의 이미지를 표현합니다
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
export default Infor3;
