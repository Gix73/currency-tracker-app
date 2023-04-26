import { Button, Logo, NavContainer, NavWrapper } from "./styled";

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
      <Button />
    </NavWrapper>
  );
};

export default Nav;
