import { memo } from "react";
import ToggleButton from "@components/ui/ToggleButton/ToggleButton.jsx";
import { Logo, NavContainer, NavWrapper, StyledLink } from "./styled";
import { PropTypes } from "prop-types";
import logo from "@assets/miniLogo.svg";
import {
  BANKCARD_PATH,
  CONTACTS_PATH,
  HOME_PATH,
  TIMELINE_PATH,
} from "../../../constants/pathRoutes.js";

const Nav = ({ toggleTheme }) => {
  return (
    <NavWrapper>
      <Logo src={logo} alt="logo" />
      <NavContainer>
        <div>
          <StyledLink to={HOME_PATH}>Home</StyledLink>
        </div>
        <div>
          <StyledLink to={TIMELINE_PATH}>Timeline</StyledLink>
        </div>
        <div>
          <StyledLink to={BANKCARD_PATH}>Bank card</StyledLink>
        </div>
        <div>
          <StyledLink to={CONTACTS_PATH}>Contato</StyledLink>
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
