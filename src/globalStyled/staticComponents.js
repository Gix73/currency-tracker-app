import { NavLink } from "react-router-dom";
import logo from "../assets/miniLogo.svg";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #898989;

  /* &[aria-current] {
    text-decoration: underline;
  } */
`;

export const Logo = styled.div`
  width: 40px;
  height: 42px;
  background-image: url("${logo}");
`;
