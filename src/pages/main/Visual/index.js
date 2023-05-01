import styled from "styled-components";
import MainVisual from "../../../images/img/main_visual.jpg";
import { Link } from "react-router-dom";

const Visual = () => {
  return (
    <div className="main__visual">
      <ul>
        <li>
          <Link to="/Contact/:contactId">
            <VisualTitle>Contact Us</VisualTitle>
            <img src={MainVisual} />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Visual;

const VisualTitle = styled.h2`
  position: absolute;
  top: 240px;
  left: 200px;
  color: #222;
  font-size: 48px;
  font-weight: 500;
`;
