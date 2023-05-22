import { memo } from "react";
import Nav from "./Nav/Nav.jsx";
import SiteInfo from "./SiteInfo/SiteInfo.jsx";
import UpdateInfo from "./UpdateInfo/UpdateInfo.jsx";
import { HeaderWrapper } from "./styled";
import { PropTypes } from "prop-types";

const Header = ({ toggleTheme, lastUpdate }) => {
  return (
    <HeaderWrapper>
      <Nav toggleTheme={toggleTheme} />
      <SiteInfo />
      <UpdateInfo lastUpdate={lastUpdate} />
    </HeaderWrapper>
  );
};

Header.propTypes = {
  toggleTheme: PropTypes.func,
  lastUpdate: PropTypes.string,
};

export default memo(Header);
