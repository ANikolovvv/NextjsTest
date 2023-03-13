import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 80px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 70vh;
  margin: 0px 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0px;
`;
export const CardsBox = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  gap: 20px;
`;
export const ImageContainer = styled.div`
  height: 700px;
`;
