import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  min-width: 375px;
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 1456px;
  width: 100%;
  min-height: 100vh;
`;
