// Styled elements for the Card go here
import styled from "styled-components";
export const StyledCardTitle = styled.h1`
  margin: 0;
  color: black;
  font-size: 24px;
  &:hover {
    color: #03a9f4;
    text-decoration: underline;
  }
`;
export const StyledCardBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px 10px;
`;
export const StyledCardsBoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 5px;
  padding: 0px;
  margin-left: 20px;
`;
export const StyledCardParagraph = styled.p`
  margin: 0px;
  padding: 0px;
  text-align: left;
  color: black;
  font-size: 20px;
  letter-spacing: 1px;
  font-family: sans-serif;
`;
