import styled from "styled-components";

export const HomePageWrapper = styled.main`
  display: flex;
  flex-grow: 1;
  padding: 0px 120px;
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
  column-gap: 184px;
  row-gap: 50px;
  padding-top: 50px;
`;

export const CategorySpan = styled.span`
  font-weight: 300;
  font-size: 32px;
  line-height: 41px;
  border-bottom: 1px solid #474747;
  padding-bottom: 20px;
`;
