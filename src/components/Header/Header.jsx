import { memo } from "react";
import Nav from "./Nav/Nav.jsx";
import SiteInfo from "./SiteInfo/SiteInfo.jsx";
import UpdateInfo from "./UpdateInfo/UpdateInfo.jsx";
import { HeaderWrapper } from "./styled";
import { PropTypes } from "prop-types";

const Header = ({ toggleTheme }) => {
  return (
    <HeaderWrapper>
      <Nav toggleTheme={toggleTheme} />
      <SiteInfo />
      <UpdateInfo />
    </HeaderWrapper>
  );
};

Header.propTypes = {
  toggleTheme: PropTypes.func,
};

export default memo(Header);
