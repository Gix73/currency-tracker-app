import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* height: 100vh; */
  /* background-color: #030304; */
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
  /* min-height: 2000px; */
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  /* background-color: #030304; */
  flex-direction: column;
  max-width: 1456px;
  width: 100%;
  min-height: 100vh;
`;
