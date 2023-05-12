import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 103px;
  padding: 0 100px;
  @media (max-width: 1060px) {
    padding: 0 50px;
  }
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 657px;
  width: 100%;
  height: 44px;
  @media (max-width: 1060px) {
    max-width: 450px;
  }
  @media (max-width: 600px) {
    padding-right: 20px;
  }
`;

export const Logo = styled.img`
  width: 40px;
  height: 42px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: 300;
  font-size: 20px;
  line-height: 41px;
  color: #898989;
  @media (max-width: 1060px) {
    font-size: 15px;
  }
  &[aria-current] {
    text-decoration: underline;
  }
`;
