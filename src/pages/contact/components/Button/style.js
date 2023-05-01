import styled, { css } from "styled-components";

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.COLOR.background.black};
    color: #fff;
  `,
};

const sizeCSS = {
  small: css`
    width: 64px;
    height: 32px;
    padding: 16px 0;
  `,

  medium: css`
    width: 96px;
    height: 48px;
    padding: 16px 0;
  `,
  large: css`
    width: 128px;
    height: 64px;
    padding: 16px 0;
  `,
};

const Button = styled.button`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  cursor: pointer;
  border: none;
  font-size: ${({ theme }) => theme.FONT_SIZE};
  :hover {
    color: #a9a9a9;
  }
`;
export default Button;
