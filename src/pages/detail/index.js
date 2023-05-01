import { GridSection } from "../../styles/common";
import ImgSection from "./components/img-section/img-section";
import { useParams } from "react-router-dom";
import ServiceExplain from "./components/service-explain/service-explain";

const Detail = ({}) => {
  const { todoId } = useParams();
  console.log("todoId", todoId);
  return (
    <GridSection>
      <ImgSection num={todoId}></ImgSection>
      <ServiceExplain></ServiceExplain>
    </GridSection>
  );
};

export default Detail;
