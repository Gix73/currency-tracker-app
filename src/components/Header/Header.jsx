import { memo, useEffect } from "react";
import Nav from "./Nav/Nav.jsx";
import SiteInfo from "./SiteInfo/SiteInfo.jsx";
import UpdateInfo from "./UpdateInfo/UpdateInfo.jsx";
import { HeaderWrapper } from "./styled";

const Header = ({ toggleTheme }) => {
  return (
    <HeaderWrapper>
      <Nav toggleTheme={toggleTheme} />
      <SiteInfo />
      <UpdateInfo />
    </HeaderWrapper>
  );
};

export default memo(Header);
