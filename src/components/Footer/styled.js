import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: 520px;
  padding: 90px 120px 40px;
  flex-shrink: 0;
`;

export const FooterContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 100%;
  height: 100%;
  padding-bottom: 50px;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 485px;
  width: 100%;
`;

export const CompanyWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 20px;
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
`;

export const AboutSpan = styled.span`
  padding-top: 40px;
  font-size: 24px;
  line-height: 150%;
  font-weight: 300;
`;

export const LinksWrapper = styled.div`
  display: grid;
  width: 100%;
  padding-left: 100px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const NavContainer = styled.div``;

export const NavFooterSpan = styled.span`
  font-weight: 400;
  font-size: 28px;
  line-height: 150%;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 130px;
  padding-top: 40px;
  justify-content: space-between;
`;

export const FooterInfoSpan = styled.span`
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  color: #898989;
`;
