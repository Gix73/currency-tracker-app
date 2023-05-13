import styled from "styled-components";

export const HomePageWrapper = styled.main`
  display: flex;
  flex-grow: 1;
  padding: 0px 120px;
  @media (max-width: 1060px) {
    padding: 0px 50px;
  }
  @media (max-width: 768px) {
    padding: 0px 20px;
  }
  @media (max-width: 376px) {
    padding: 0px 10px;
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 114px;
  row-gap: 50px;
  padding-top: 50px;
  @media (max-width: 1060px) {
    gap: 50px;
  }
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const CategorySpan = styled.span`
  font-weight: 300;
  font-size: 32px;
  line-height: 41px;
  border-bottom: 1px solid #474747;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 20px;
    padding-bottom: 5px;
  }
`;
