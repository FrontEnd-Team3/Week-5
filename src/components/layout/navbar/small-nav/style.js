import styled from "styled-components";

export const SmallNavContainer = styled.nav`
  position: absolute;
  right: 60px;
  top: 25px;
  ul {
    display: flex;
    li {
      margin-left: 45px;
      a {
        font-weight: 500;
        font-size: 18px;
      }
    }
  }
`;
