import { Link } from "react-router-dom";
import styled from "styled-components";
import { font } from "../style/style";

function Maincomponetns(props) {
  return (
    <Width>
      <Link to={props.information}>
        <Img src={props.img} width="300" />
      </Link>
      <H2>{props.title}</H2>
      <H2>{props.title2}</H2>
      <Textflex>
        <Infor>
          {props.a}
          <sub>{props.b}</sub>
          {props.c}
          <sub>{props.d}</sub>
        </Infor>
        <H2>{props.price}</H2>
      </Textflex>
      <p>{props.explain}</p>
    </Width>
  );
}

export default Maincomponetns;

const Width = styled.div`
  width: 295px;
`;
const H2 = styled.h2`
  ${font}
  font-size:20px;
  margin: 0;
  text-align: center;
`;
const Textflex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid black;
`;
const Infor = styled.p`
  margin: 5px 0 0 0;
  ${font}
`;
const Img = styled.img`
  transition: filter 0.2s linear;
  :hover {
    filter: blur(10px);
  }
`;
