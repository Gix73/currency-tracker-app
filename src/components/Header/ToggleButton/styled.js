import styled from "styled-components";

export const StyledLabel = styled.label`
  cursor: pointer;
  width: 50px;
  height: 30px;
  background: ${({ checked }) => (checked ? "black" : "white")};
  display: block;
  border: 2px solid ${({ checked }) => (checked ? "white" : "black")};
  border-radius: 100px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: ${({ checked }) => (checked ? "-1px" : "calc(55% - 7px)")};
    top: 0px;
    width: 26px;
    height: 26px;
    background: ${({ checked }) => (checked ? "black" : "white")};
    border: 1px solid ${({ checked }) => (checked ? "white" : "black")};
    border-radius: 30px;
    transition: 0.3s;
  }
`;

export const Input = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
`;
