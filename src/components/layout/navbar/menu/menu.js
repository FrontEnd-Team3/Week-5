import Category from "./style";

const Menu = () => {
  return (
    <Category>
      <ul id="menu">
        <li>
          <a href="#">SHOP</a>
          <ul>
            <li className="shop-menu">
              <a href="#">SHOP ALL</a>
            </li>
            <li className="shop-menu">
              <a href="#">BEST SELLER</a>
            </li>
            <li className="shop-menu">
              <a href="#">PERFUME</a>
            </li>
            <li className="shop-menu">
              <a href="#">HOME FRAGRANCE</a>
            </li>
            <li className="shop-menu">
              <a href="#">BODY CARE</a>
            </li>
            <li className="shop-menu">
              <a href="#">HAND CARE</a>
            </li>
            <li className="shop-menu">
              <a href="#">GIFT SET</a>
            </li>
            <li className="shop-menu">
              <a href="#">HOME OBJECTS</a>
            </li>
            <li className="shop-menu">
              <a href="#">ACC</a>
            </li>
          </ul>
        </li>

        <ul id="bottom-menu">
          <li className="hover">
            <a href="#">ABOUT</a>
            <ul className="side-menu">
              <li className="shop-menu">
                <a href="#">OUR STORY</a>
              </li>
              <li className="shop-menu">
                <a href="#">CAMPAIGN</a>
              </li>
              <li className="shop-menu">
                <a href="#">PRESS</a>
              </li>
            </ul>
          </li>
          <li className="shop-menu-1">
            <a href="#">STORES</a>
          </li>
          <li className="shop-menu-1 hover">
            <a href="#" className="hover">
              CONTACT
            </a>
            <ul className="side-menu">
              <li className="shop-menu">
                <a href="#">CONTACT US</a>
              </li>
              <li className="shop-menu">
                <a href="#">CAREERS</a>
              </li>
            </ul>
          </li>
        </ul>

        <li>SEARCH</li>
      </ul>
    </Category>
  );
};

export default Menu;
