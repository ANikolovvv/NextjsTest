import styled, { css } from "styled-components";

export const StyledButtonCard = styled.button`
  font-family: sans-serif;
  overflow: hidden;
  text-align: center;
  align-self: left;
  display: flex;
  align-items: left;
  justify-content: left;
  border-radius: 7px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  min-height: 70px;
  padding: 18px;
  cursor: pointer;
  border: 2px solid;
  color: white;

  &:nth-child(1) {
    max-width: 510px;
  }

  &:nth-child(2) {
    max-width: 540px;
  }

  &:nth-child(3) {
    max-width: 570px;
  }
  &:hover {
    border: 2px solid #03a9f4;
  }
`;
