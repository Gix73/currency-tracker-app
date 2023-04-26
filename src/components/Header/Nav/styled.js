import styled from "styled-components";
import logo from "../../../assets/miniLogo.svg";
export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 103px;
  padding: 0 100px;
`;

export const Logo = styled.div`
  width: 40px;
  height: 42px;
  background-image: url("${logo}");
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 657px;
  width: 100%;
  height: 44px;
`;

export const Button = styled.input.attrs({ type: "checkbox" })`
  width: 50px;
  height: 50px;
`;
