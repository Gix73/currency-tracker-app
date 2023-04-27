import ToggleButton from "../ToggleButton/ToggleButton.jsx";
import { Logo, NavContainer, NavWrapper } from "./styled";

const Nav = () => {
  return (
    <NavWrapper>
      <Logo />
      <NavContainer>
        <div>Home</div>
        <div>Timeline</div>
        <div>Bank card</div>
        <div>Contato</div>
      </NavContainer>
      <ToggleButton />
    </NavWrapper>
  );
};

export default Nav;
