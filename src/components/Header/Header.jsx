import Nav from "./Nav/Nav.jsx";
import SiteInfo from "./SiteInfo/SiteInfo.jsx";
import UpdateInfo from "./UpdateInfo/UpdateInfo.jsx";
import { HeaderWrapper } from "./styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav />
      <SiteInfo />
      <UpdateInfo />
    </HeaderWrapper>
  );
};

export default Header;
