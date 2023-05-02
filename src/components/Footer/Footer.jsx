import { memo, useEffect } from "react";
import { Logo, StyledLink } from "../../globalStyled/staticComponents";
import {
  AboutSpan,
  AboutWrapper,
  CompanyWrapper,
  FooterContainer,
  FooterInfoSpan,
  FooterWrapper,
  LinksWrapper,
  NavContainer,
  NavFooterSpan,
  NavLinksContainer,
  StyledSpan,
} from "./styled";

const Footer = () => {
  useEffect(() => {
    console.log("Footer Mount");
    return () => {
      console.log("Footer UnMount");
    };
  }),
    [];

  return (
    <FooterWrapper>
      <FooterContainer>
        <AboutWrapper>
          <CompanyWrapper>
            <Logo />
            <StyledSpan>Modsen Currency Tracker</StyledSpan>
          </CompanyWrapper>
          <AboutSpan>
            Since then, the company has grown organically to. Starsup is the
            world's largest trading platform, with $12 billion worth of currency
            trading and 500,000 tickets sold daily to tens of thousands of
            traders worldwide.
          </AboutSpan>
        </AboutWrapper>
        <LinksWrapper>
          <NavContainer>
            <NavFooterSpan>General</NavFooterSpan>
            <NavLinksContainer>
              <StyledLink>Market</StyledLink>
              <StyledLink>Service</StyledLink>
            </NavLinksContainer>
          </NavContainer>
          <NavContainer>
            <NavFooterSpan>Product</NavFooterSpan>
            <NavLinksContainer>
              <StyledLink>Sparks</StyledLink>
              <StyledLink>Snaps</StyledLink>
            </NavLinksContainer>
          </NavContainer>
          <NavContainer>
            <NavFooterSpan>Community</NavFooterSpan>
            <NavLinksContainer>
              <StyledLink>Ideas</StyledLink>
              <StyledLink>Streams</StyledLink>
            </NavLinksContainer>
          </NavContainer>
        </LinksWrapper>
      </FooterContainer>
      <FooterInfoSpan>Startsup © 2023-2024, All Rights Reserved</FooterInfoSpan>
    </FooterWrapper>
  );
};

export default memo(Footer);
