import styled, { css } from "styled-components";

export const StyledButtonCard = styled.button`
  font-family: sans-serif;
  text-align: center;
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
    width: 510px;
  }

  &:nth-child(2) {
    width: 540px;
  }

  &:nth-child(3) {
    width: 570px;
  }
  &:hover {
    border: 2px solid #03a9f4;
  }
  @media (max-width: 600px) {
 
    &:nth-child(1) {
      width: 90%;
    }

    &:nth-child(2) {
      width: 95%;
    }

    &:nth-child(3) {
      width: 100%;
    }
  }
`;
