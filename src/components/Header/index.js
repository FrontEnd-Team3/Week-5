import styled from "styled-components";

const Header = () => {
  const onClickNavigationContact = () => {
    window.location.href = "/";
  };

  return (
    <>
      <HeaderMain>
        <div className="header-header">
          <HeaderP1
          // style="background-color: #a9a9a9"
          >
            <HeaderP1A href="#">
              논픽션 선물하기 서비스를 이용해보세요
            </HeaderP1A>
          </HeaderP1>
        </div>
        <HeaderMain1>
          <HeaderMain1Ul>
            <HeaderMain1Li>
              <a className="category-main">SHOP</a>
            </HeaderMain1Li>
            <li className="category-li category-hover">
              <a className="category-main">ABOUT</a>
            </li>
            <li className="category-li">
              <a class="category-main">STORES</a>
            </li>
            <li className="category-li category-hover">
              <a className="category-main">CONTACT</a>
            </li>
            <li
              className="search"
              // style="margin-top: 50px"
            >
              <CategoryInput />
            </li>
          </HeaderMain1Ul>
          <Logo>
            <LogoA onClick={onClickNavigationContact}>
              <img
                className="logo"
                src="https://nonfiction.com/images/half_logo.svg?16159"
              />
            </LogoA>
          </Logo>
          <Shop>
            <ShopUl>
              <ShopUlLi>
                <label for="main" className="arrow">
                  <a>KR</a>
                </label>
              </ShopUlLi>
              <ShopUlLi>
                <a>LOGIN</a>
              </ShopUlLi>
              <ShopUlLi>
                <a>CART(0)</a>
              </ShopUlLi>
            </ShopUl>
          </Shop>
        </HeaderMain1>
      </HeaderMain>
    </>
  );
};

const HeaderMain = styled.header`
  position: fixed;
  width: 100%;
  z-index: 9;
  background-color: #fff;
`;

const HeaderP1 = styled.p`
  height: 30px;
  background-color: #000;
  text-align: center;
  position: relative;
`;

const HeaderP1A = styled.a`
  color: #fff;
  text-decoration: none;
  line-height: 30px;
`;

const HeaderMain1 = styled.div`
  position: relative;
`;

const HeaderMain1Ul = styled.ul`
  position: absolute;
  top: 20px;
  left: 50px;
  list-style-type: none;
  cursor: pointer;
`;

const HeaderMain1Li = styled.li`
  padding: 10px 0;
  padding-bottom: 10px;
  height: 30px;
`;

// HeaderMain1Li:hover 해야함

const CategoryInput = styled.input`
  border: 0;
  border-bottom: 1px solid black;
  outline: none;
  color: #000;
  background-color: transparent;
`;

const Logo = styled.div`
  padding-top: 20px;
  background-repeat: repeat;
`;

const LogoA = styled.a`
  width: 135px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
`;

const Shop = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
  margin: 0 50px;
`;

const ShopUl = styled.ul`
  list-style-type: none;
  cursor: pointer;
`;

const ShopUlLi = styled.li`
  float: left;
  margin: 0 10px;
  font-size: 18px;
  padding-left: 50px;
`;

export default Header;
