import { memo } from "react";
import { Logo, StyledLink } from "@src/globalStyled/staticComponents.js";
import ToggleButton from "../ToggleButton/ToggleButton.jsx";
import { NavContainer, NavWrapper } from "./styled";
import { PropTypes } from "prop-types";

const Nav = ({ toggleTheme }) => {
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
      <ToggleButton toggleTheme={toggleTheme} />
    </NavWrapper>
  );
};

Nav.propTypes = {
  toggleTheme: PropTypes.func,
};

export default memo(Nav);
