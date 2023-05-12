import { memo } from "react";
import ToggleButton from "../ToggleButton/ToggleButton.jsx";
import { Logo, NavContainer, NavWrapper, StyledLink } from "./styled";
import { PropTypes } from "prop-types";
import logo from "@assets/miniLogo.svg";

const Nav = ({ toggleTheme }) => {
  return (
    <NavWrapper>
      <Logo src={logo} alt="logo" />
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
          <StyledLink to="/contacts">Contato</StyledLink>
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
