// Styled elements for the Card go here
import styled from "styled-components";
export const StyledCardTitle = styled.a`
  margin: 0;
  color: black;
  font-weight: 700;
  font-size: 24px;
  font-family: Poppins;
  text-decoration: none;
  &:hover {
    color: #03a9f4;
    text-decoration: underline;
  }
  @media (max-width: 600px) {
    font-size: 18px;
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
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
export const StyledCardParagraph = styled.p`
  font-family: Poppins;
  margin: 0px;
  padding: 0px;
  text-align: left;
  color: blue;
  font-size: 20px;
  letter-spacing: 1px;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
