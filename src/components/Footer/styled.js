import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 90px 120px 40px;
  flex-shrink: 0;
  @media (max-width: 1060px) {
    padding: 90px 50px 40px;
  }
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 20px;
  }
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 485px;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const CompanyWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 20px;
  @media (max-width: 1060px) {
    padding-top: 0px;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Logo = styled.img`
  width: 40px;
  height: 42px;
  @media (max-width: 1060px) {
    width: 100px;
    height: 100px;
    order: 2;
  }
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const StyledSpan = styled.span`
  padding-left: 17px;
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  background: linear-gradient(
    90.18deg,
    #00ce2c 0.18%,
    #aedf23 49.3%,
    #a3dc00 99.88%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media (max-width: 1060px) {
    font-size: 26px;
  }
`;

export const AboutSpan = styled.span`
  padding-top: 40px;
  font-size: 20px;
  line-height: 150%;
  font-weight: 300;
  @media (max-width: 1300px) {
    font-size: 15px;
  }
  @media (max-width: 1060px) {
    display: none;
  }
`;

export const LinksWrapper = styled.div`
  display: grid;
  width: 100%;
  padding-left: 100px;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-left: 0px;
  }
`;

export const NavContainer = styled.div`
  padding-right: 30px;
  @media (max-width: 376px) {
    padding-right: 10px;
  }
`;

export const NavFooterSpan = styled.span`
  font-weight: 400;
  font-size: 28px;
  line-height: 150%;
  @media (max-width: 1060px) {
    font-size: 20px;
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 130px;
  padding-top: 40px;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding-top: 10px;
    justify-content: flex-start;
    height: auto;
  }
`;

export const FooterInfoSpan = styled.span`
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  color: #898989;
  @media (max-width: 1060px) {
    font-size: 15px;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: 300;
  font-size: 20px;
  line-height: 41px;
  color: #898989;
  @media (max-width: 1060px) {
    font-size: 15px;
  }
`;
