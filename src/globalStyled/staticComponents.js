import { NavLink } from "react-router-dom";
import logo from "../assets/miniLogo.svg";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: 300;
  font-size: 20px;
  line-height: 41px;
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
