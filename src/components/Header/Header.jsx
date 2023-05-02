import { memo, useEffect } from "react";
import Nav from "./Nav/Nav.jsx";
import SiteInfo from "./SiteInfo/SiteInfo.jsx";
import UpdateInfo from "./UpdateInfo/UpdateInfo.jsx";
import { HeaderWrapper } from "./styled";

const Header = () => {
  useEffect(() => {
    console.log("Header Mount");
    return () => {
      console.log("Header UnMount");
    };
  }),
    [];
  return (
    <HeaderWrapper>
      <Nav />
      <SiteInfo />
      <UpdateInfo />
    </HeaderWrapper>
  );
};

export default memo(Header);
