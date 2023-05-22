import styled from "styled-components";

export const ContactsWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  padding: 60px 80px;
  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;
