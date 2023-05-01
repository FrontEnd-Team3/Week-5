import CartBtn from "./cart-btn/cart-btn";
import LanguageBtn from "./language-btn/language-btn";
import LoginBtn from "./login-btn/login-btn";
import { SmallNavContainer } from "./style";

const SmallNav = () => {
  return (
    <SmallNavContainer>
      <ul>
        <LanguageBtn />
        <LoginBtn />
        <CartBtn />
      </ul>
    </SmallNavContainer>
  );
};
export default SmallNav;
