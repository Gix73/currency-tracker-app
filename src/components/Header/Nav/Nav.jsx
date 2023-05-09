import { memo } from "react";
import { Logo, StyledLink } from "../../../globalStyled/staticComponents.js";
import ToggleButton from "../ToggleButton/ToggleButton.jsx";
import { NavContainer, NavWrapper } from "./styled";

const Nav = () => {
  return (
    <NavWrapper>
      <Logo />
      <NavContainer>
        <div>
          <StyledLink to="/">Home</StyledLink>
        </div>
        <div>
          <StyledLink to="/timeline">Timeline</StyledLink>
        </div>
        <div>
          <StyledLink to="/bankcard">Bank card</StyledLink>
        </div>
        <div>
          <StyledLink to="/">Contato</StyledLink>
        </div>
      </NavContainer>
      <ToggleButton />
    </NavWrapper>
  );
};

export default memo(Nav);
