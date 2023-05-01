import styled from "styled-components";

const MainSector = styled.div`
  width: 400px;
  img {
    transition: filter 0.5s ease;
    max-width: 400px;
  }
  img:hover {
    filter: blur(10px);
  }
  .text-center {
    text-align: center;
    a {
      color: black;
      text-decoration: none;
      font-weight: 500;
    }
  }
  .price-flex {
    padding: 20px 0 10px 0;
    display: flex;
    justify-content: space-between;
    h3 {
      font-weight: 500;
    }
  }
  p {
    font-family: var(--main-font2);
    font-size: 14px;
    line-height: 22px;
  }
  .cart {
    text-align: center;
    padding: 50px 0;
  }
`;
export default MainSector;
